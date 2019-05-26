import Solid from '../index'
import { Minify, NativeColor } from '../various/interfaces'
import fs from 'fs-extra'

describe('Solid Collector', () => {
  let solid: Solid
  let colors: Array<NativeColor>
  let path: string
  let output: string
  let file: string
  let build: string
  let minify: Minify

  beforeAll(async () => {
    colors = [{ name: 'black', hex: '#000' }, { name: 'white', hex: '#FFF' }]
    solid = new Solid(colors)
    path = './temp'
    file = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><div class="df fc jcc aic md-fr bg-black pl2 pr2 cn128"><span class="white ts24 tfsb mv2"></span></div></body></html>`
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

  test('Build method works', () => {
    build = solid.build()
    expect(build).toBeTruthy()
  })

  test('Build output is in plain CSS', () => {
    expect(build).toContain('.br5 { border-radius: 5px }')
    expect(build).toContain('@media (min-width: 568px) { .sm-br5 { border-radius: 5px } }')
    expect(build).toContain('.zi100 { z-index: 100')
    expect(build).toContain('@media (min-width: 1024px) { .lg-zi100 { z-index: 100 } }')
  })

  test('The file has been correctly written to the fs', () => {
    expect(fs.readFileSync(`${path}/index.html`, 'utf8')).toBe(file)
  })

  test('Search returns all classes inside the file', async () => {
    expect(await solid.search('./temp')).toStrictEqual(['df', 'fc', 'jcc', 'aic', 'md-fr', 'bg-black', 'pl2', 'pr2', 'cn128', 'white', 'ts24', 'tfsb', 'mv2'])
  })

  test('Minify method works', async () => {
    minify = await solid.minify(path, output)
    expect(minify).toBeTruthy()
  })

  test('Minification works correctly', async () => {
    expect(minify.css).toContain('.df { display: flex }')
    expect(minify.css).toContain('.fc { flex-direction: column }')
    expect(minify.css).toContain('.jcc { justify-content: center }')
    expect(minify.css).toContain('.aic { align-items: center }')
    expect(minify.css).toContain('@media (min-width: 768px) { .md-fr { flex-direction: row } }')
    expect(minify.css).toContain('.bg-black { background: #000 }')
    expect(minify.css).toContain('.white { color: #FFF }')
    expect(minify.css).toContain('.ts24 { font-size: 24px; line-height: 30px }')
    expect(minify.css).toContain('.tfsb { font-weight: 600 }')
    expect(minify.css).toContain('.pl2 { padding-left: 2px }')
    expect(minify.css).toContain('.pr2 { padding-right: 2px }')
    expect(minify.css).toContain('.mv2 { margin-top: 2px; margin-bottom: 2px }')
    expect(minify.css).not.toContain('.cn128 { width: 128px; height: 128px }')
  })
})
