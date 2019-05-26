import Solid from '../index'
import { NativeColor } from '../various/interfaces'
import { ScaledSize } from 'react-native'
import fs from 'fs-extra'

describe('Solid Collector', () => {
  let solid: Solid
  let colors: Array<NativeColor>
  let screen: ScaledSize
  let path: string
  let output: string
  let file: string

  beforeAll(() => {
    colors = [{ name: 'black', hex: '#000' }, { name: 'white', hex: '#FFF' }]
    screen = { width: 375, height: 667, scale: 0, fontScale: 0 }
    solid = new Solid(colors)
    path = './temp'
    file = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><div class="df fc jcc aic md-fr bg-black"><span class="white ts24 tfsb"></span></div></body></html>`
    output = `${path}/solid.css`

    fs.mkdirSync(path)
    fs.writeFileSync(`${path}/index.html`, file)
  })

  afterAll(() => {
    fs.removeSync(path)
  })

  test('Instance is correct', () => {
    expect(solid).toBeInstanceOf(Solid)
  })

  test('Build output is in plain CSS', () => {
    expect(solid.build()).toContain('.br5 { border-radius: 5px }')
    expect(solid.build()).toContain('@media (min-width: 568px) { .sm-br5 { border-radius: 5px } }')
    expect(solid.build()).toContain('.zi100 { z-index: 100')
    expect(solid.build()).toContain('@media (min-width: 1024px) { .lg-zi100 { z-index: 100 } }')
  })

  test('The file has been correctly written to the fs', () => {
    expect(fs.readFileSync(`${path}/index.html`, 'utf8')).toBe(file)
  })

  test('Search returns all classes inside the file', async () => {
    expect(await solid.search('./temp')).toStrictEqual(['df', 'fc', 'jcc', 'aic', 'md-fr', 'bg-black', 'white', 'ts24', 'tfsb'])
  })

  test('Minification works correctly', async () => {
    expect((await solid.minify(path, output)).css).toContain('.df { display: flex }')
    expect((await solid.minify(path, output)).css).toContain('.fc { flex-direction: column }')
    expect((await solid.minify(path, output)).css).toContain('.jcc { justify-content: center }')
    expect((await solid.minify(path, output)).css).toContain('.aic { align-items: center }')
    expect((await solid.minify(path, output)).css).toContain('@media (min-width: 768px) { .md-fr { flex-direction: row } }')
    expect((await solid.minify(path, output)).css).toContain('.bg-black { background: #000 }')
    expect((await solid.minify(path, output)).css).toContain('.white { color: #FFF }')
    expect((await solid.minify(path, output)).css).toContain('.ts24 { font-size: 24px; line-height: 30px }')
    expect((await solid.minify(path, output)).css).toContain('.tfsb { font-weight: 600 }')
  })
})
