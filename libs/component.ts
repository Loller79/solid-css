import { forEach, reduce } from 'lodash'
import regex from './regex'
import { toCamelCase } from '../various/utils'
import { Build, Class, Classes, NativeColor } from '../various/interfaces'
import { ScaledSize } from 'react-native'

class Component {
  readonly name: string
  readonly classes: Classes
  readonly colors: Array<NativeColor>
  readonly length: Array<number>
  readonly screen: ScaledSize

  /**
   * Create a new Solid Component
   *
   * @param {string} name
   * @param {Classes} classes
   * @param {Array<NativeColor>} colors
   * @param {number} length
   * @param {ScaledSize} screen
   */
  constructor (name: string, classes: Classes, colors: Array<NativeColor> = [], length: number = 101, screen: ScaledSize = {
    width: 0,
    height: 0,
    scale: 0,
    fontScale: 0
  }) {
    this.name = name
    this.classes = { normal: {}, int: {}, color: {}, ...classes }
    this.colors = colors
    this.length = new Array<number>(length).fill(0)
    this.screen = screen
  }

  /**
   * Parse int classes to inject numbers
   *
   * @returns {Class}
   */
  parseInt (): Class {
    let size = (i: number, j: number = 100) => ( i === 0 ? 0 : ( i / 100 ) * j ).toString()
    let line = (i: number) => ( i === 0 ? 0 : i + ( i / 4 ) ).toString()

    return reduce(
      this.classes.int,
      (r: Class, v: string, k: string) => {
        forEach(this.length, (n: number, i: number) => {
          r[k + i] = v
            .replace(regex.width, size(i, this.screen.width))
            .replace(regex.height, size(i, this.screen.height))
            .replace(regex.lineHeight, line(i))
            .replace(regex.int, i.toString())
        })
        return r
      },
      {}
    )
  }

  /**
   * Parse color classes to inject colors
   *
   * @returns {Class}
   */
  parseColor (): Class {
    return reduce(
      this.classes.color,
      (r: Class, v: string, k: string) => {
        forEach(this.colors, ({ name, hex }) => {
          r[k + name] = v.replace(regex.color, hex)
        })
        return r
      },
      {}
    )
  }

  /**
   * Parse all classes
   *
   * @returns {Class}
   */
  parseAll (): Class {
    let normal, int, color

    normal = this.classes.normal
    int = this.parseInt()
    color = this.parseColor()

    return { ...normal, ...int, ...color }
  }

  /**
   * Convert the JSON classes to JS
   *
   * @param {Class} classes
   * @returns {Build}
   */
  toJs (classes: Class): Build {
    return reduce(
      classes,
      (r: Class, v: string, k: string) => {
        r[k] = JSON.parse(v, toCamelCase)
        return r
      },
      {}
    )
  }

  /**
   * Build the Component
   *
   * @returns {Build}
   */
  build (): Build {
    let classes: Class, js: Build

    classes = this.parseAll()
    js = this.toJs(classes)

    return js
  }
}

export default Component
