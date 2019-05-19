import Solid from '../index'
import { NativeColor } from '../various/interfaces'
import { ScaledSize } from 'react-native'

describe('Solid Collector', () => {
  let solid: Solid
  let colors: Array<NativeColor>
  let screen: ScaledSize

  beforeAll(() => {
    colors = [{ name: 'black', hex: '#000' }]
    screen = { width: 375, height: 667, scale: 0, fontScale: 0 }
    solid = new Solid(colors, screen)
  })

  test('Instance is correct', () => {
    expect(solid).toBeInstanceOf(Solid)
  })

  test('Build output is in plain JS', () => {
    expect(solid.build()).toHaveProperty('br5')
    expect(solid.build()['br5']).toStrictEqual({ borderRadius: 5 })
    expect(solid.build()).toHaveProperty('zi100')
    expect(solid.build()['zi100']).toStrictEqual({ zIndex: 100 })
  })
})
