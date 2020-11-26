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
    expect(Object.keys(css.style).length).toBe(46057)
  })

  it('derives', () => {
    expect(css.derive('wp100 hv50 bg-black white br100 bw1 bc-white-50 false-positive o50 zi2')).toMatchObject({
      width: '100%',
      height: '50vh',
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '100px',
      borderWidth: '1px',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      opacity: '50%',
      zIndex: 2
    })
  })

  it('has no duplicates', () => {
    expect(css.duplicates).toHaveLength(0)
  })

  it('extrapolates', () => {
    expect(css.extrapolate('./tests/template/')).toHaveLength(20)
  })

  it('writes', () => {
    css.write('./tests/template/', './tests/template/index.css')
    expect(fs.readFileSync('./tests/template/index.css', 'utf8').length).toBe(699)
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
