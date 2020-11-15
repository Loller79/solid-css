import CSS from '../src/index'

describe('CSS', () => {
  let css: CSS

  beforeAll(() => {
    css = new CSS(
      [
        { name: 'black', hex: '#000' },
        { name: 'white', hex: '#fff' }
      ],
      { fontScale: 0, height: 512, scale: 0, width: 256 }
    )
  })

  it('compiles', () => {
    expect(Object.keys(css.compile())).toHaveLength(9793)
  })

  it('derives', () => {
    expect(css.derive('wp100 hv50 bg-black white br100 bw1 bc-white false-positive')).toMatchObject({
      width: '100%',
      height: 256,
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: '#fff'
    })
  })

  it('has no duplicates', () => {
    expect(css.duplicates).toHaveLength(0)
  })
})
