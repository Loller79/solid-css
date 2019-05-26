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
  let build: string

  beforeAll(() => {
    classes = { normal: { 'df': '{ "display": "flex" }' } }
    component = new Component('component', classes)
  })

  test('The classes are correct and filled', () => {
    expect(component.classes).toStrictEqual({ normal: {}, int: {}, color: {}, special: {}, ...classes })
  })
  
  test('Build method works', () => {
    build = component.build()
    expect(build).toBeTruthy()
  })

  test('The build is plain CSS', () => {
    expect(build).toContain('.df { display: flex }')
    expect(build).toContain('@media (min-width: 568px) { .sm-df { display: flex } }')
  })
})

describe('Int Component', () => {
  let classes: Classes
  let component: Component
  let build: string

  beforeAll(() => {
    classes = { int: { 'w': '{ "width": $INT }', 'wp': '{ "width": "$INT%" }' ,'wd': '{ "width": $INTvw } ' } }
    component = new Component('component', classes, [])
  })

  test('The classes are correct and filled', () => {
    expect(component.classes).toStrictEqual({ normal: {}, int: {}, color: {}, special: {}, ...classes })
  })

  test('Build method works', () => {
    build = component.build()
    expect(build).toBeTruthy()
  })

  test('The build is plain CSS', () => {
    expect(build).toContain('.w25 { width: 25px }')
    expect(build).toContain('@media (min-width: 768px) { .md-wp50 { width: 50% } }')
  })
})

describe('Color Component', () => {
  let classes: Classes
  let colors: Array<NativeColor>
  let component: Component
  let build: string

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

  test('Build method works', () => {
    build = component.build()
    expect(build).toBeTruthy()
  })

  test('The build is plain CSS', () => {
    expect(build).toContain('.bg-black { background: #000 }')
    expect(build).toContain('@media (min-width: 1024px) { .lg-bg-black { background: #000 } }')
  })
})

describe('Special Component', () => {
  let classes: Classes
  let colors: Array<NativeColor>
  let component: Component
  let build: string

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

  test('Build method works', () => {
    build = component.build()
    expect(build).toBeTruthy()
  })

  test('The build is plain CSS', () => {
    expect(build).toContain('.s15-black { box-shadow: 0 0 15px 0 #000 }')
    expect(build).toContain('@media (min-width: 1280px) { .xl-s15-black { box-shadow: 0 0 15px 0 #000 } }')
  })
})
