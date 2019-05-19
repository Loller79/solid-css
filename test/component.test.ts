import Component from '../libs/component'
import { Classes, NativeColor } from '../various/interfaces'
import { ScaledSize } from 'react-native'

describe('Empty Component', () => {
  let component: Component

  beforeAll(() => {
    component = new Component('component', {})
  })

  test('The name is "component"', () => {
    expect(component.name).toBe('component')
  })
})

describe('Normal Component', () => {
  let classes: Classes
  let component: Component

  beforeAll(() => {
    classes = { normal: { 'df': '{ "display": "flex" }' } }
    component = new Component('component', classes)
  })

  test('The classes are correct and filled', () => {
    expect(component.classes).toStrictEqual({ normal: {}, int: {}, color: {}, ...classes })
  })

  test('The build is plain JS', () => {
    expect(component.build()).toStrictEqual({ 'df': { display: 'flex' } })
  })
})

describe('Int Component', () => {
  let classes: Classes
  let component: Component
  let screen: ScaledSize

  beforeAll(() => {
    classes = { int: { 'w': '{ "width": $INT }', 'wp': '{ "width": "$INT%" }' ,'wd': '{ "width": $INTvw } ' } }
    screen = { width: 375, height: 667, scale: 0, fontScale: 0 }
    component = new Component('component', classes, [], 101, screen)
  })

  test('The classes are correct and filled', () => {
    expect(component.classes).toStrictEqual({ normal: {}, int: {}, color: {}, ...classes })
  })

  test('The build is plain JS', () => {
    expect(component.build()).toHaveProperty('w25')
    expect(component.build()['w25']).toStrictEqual({ width: 25 })
    expect(component.build()).toHaveProperty('wp50')
    expect(component.build()['wp50']).toStrictEqual({ width: '50%' })
    expect(component.build()).toHaveProperty('wd75')
    expect(component.build()['wd75']).toStrictEqual({ width: (75 / 100) * screen.width })
  })
})

describe('Color Component', () => {
  let classes: Classes
  let colors: Array<NativeColor>
  let component: Component

  beforeAll(() => {
    classes = { color: { 'bg-': '{ "background": "$COLOR" }' } }
    colors = [{ name: 'black', hex: '#000' }]
    component = new Component('component', classes, colors)
  })

  test('The classes are correct and filled', () => {
    expect(component.classes).toStrictEqual({ normal: {}, int: {}, color: {}, ...classes })
  })

  test('The colors are correct', () => {
    expect(component.colors).toStrictEqual(colors)
  })

  test('The build is plain JS', () => {
    expect(component.build()).toHaveProperty('bg-black')
    expect(component.build()['bg-black']).toStrictEqual({ 'background': '#000' })
  })
})
