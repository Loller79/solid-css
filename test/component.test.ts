import Component from '../libs/component'
import { Classes, NativeColor } from '../various/interfaces'

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
    expect(component.classes).toStrictEqual({ normal: {}, int: {}, color: {}, special: {}, ...classes })
  })

  test('The build is plain JS', () => {
    expect(component.build()).toContain('.df { display: flex }')
    expect(component.build()).toContain('@media (min-width: 568px) { .sm-df { display: flex } }')
  })
})

describe('Int Component', () => {
  let classes: Classes
  let component: Component

  beforeAll(() => {
    classes = { int: { 'w': '{ "width": $INT }', 'wp': '{ "width": "$INT%" }' ,'wd': '{ "width": $INTvw } ' } }
    component = new Component('component', classes, [])
  })

  test('The classes are correct and filled', () => {
    expect(component.classes).toStrictEqual({ normal: {}, int: {}, color: {}, special: {}, ...classes })
  })

  test('The build is plain CSS', () => {
    expect(component.build()).toContain('.w25 { width: 25px }')
    expect(component.build()).toContain('@media (min-width: 768px) { .md-wp50 { width: 50% } }')
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
    expect(component.classes).toStrictEqual({ normal: {}, int: {}, color: {}, special: {}, ...classes })
  })

  test('The colors are correct', () => {
    expect(component.colors).toStrictEqual(colors)
  })

  test('The build is plain JS', () => {
    expect(component.build()).toContain('.bg-black { background: #000 }')
    expect(component.build()).toContain('@media (min-width: 1024px) { .lg-bg-black { background: #000 } }')
  })
})

describe('Special Component', () => {
  let classes: Classes
  let colors: Array<NativeColor>
  let component: Component

  beforeAll(() => {
    classes = { special: { 's$INT-$COLOR': '{ "box-shadow": "0 0 $INTpx 0 $COLOR" }' } }
    colors = [{ name: 'black', hex: '#000' }]
    component = new Component('component', classes, colors)
  })

  test('The classes are correct and filled', () => {
    expect(component.classes).toStrictEqual({ normal: {}, int: {}, color: {}, special: {}, ...classes })
  })

  test('The colors are correct', () => {
    expect(component.colors).toStrictEqual(colors)
  })

  test('The build is plain JS', () => {
    expect(component.build()).toContain('.s15-black { box-shadow: 0 0 15px 0 #000 }')
    expect(component.build()).toContain('@media (min-width: 1280px) { .xl-s15-black { box-shadow: 0 0 15px 0 #000 } }')
  })
})
