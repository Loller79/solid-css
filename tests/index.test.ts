import fs from 'fs'
import CSS from '../src/index'

describe('CSS', () => {
  let css: CSS

  beforeAll(() => {
    css = new CSS([
      { name: 'black', hex: '#000' },
      { name: 'white', hex: '#fff' }
    ])
  })

  it('compiles', () => {
    css.compile()
    expect(Object.keys(css.style).length).toBe(138577)
  })

  it('has no duplicates', () => {
    expect(css.duplicates).toHaveLength(0)
  })

  it('extrapolates', () => {
    expect(css.extrapolate('./tests/template/')).toHaveLength(20)
  })

  it('writes', () => {
    css.write('./tests/template/', './tests/template/index.css')
    expect(fs.readFileSync('./tests/template/index.css', 'utf8').length).toBe(710)
  })

  // it('watches', () => {
  //   let watcher: FSWatcher

  //   watcher = css.watch('./tests/template', './tests/template/index.css')

  //   fs.writeFileSync('./tests/template/temporary.html', '<div class="w128 h128"></div>', 'utf8')

  //   expect(fs.readFileSync('./tests/template/index.css').length).toBe(943)

  //   fs.rmSync('./tests/template/temporary.html')

  //   expect(fs.readFileSync('./tests/template/index.css').length).toBe(699)
  // })
})
