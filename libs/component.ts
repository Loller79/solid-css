import { forEach, reduce, uniq } from 'lodash'
import regex from './regex'
import { Class, Classes, NativeColor } from '../various/interfaces'
import Css from './css'

class Component extends Css {
  readonly name: string
  readonly classes: Classes
  readonly colors: Array<NativeColor>
  readonly length: Array<number>
  readonly regex: Array<string>

  /**
   * Create a new Solid Component
   *
   * @param {string} name
   * @param {Classes} classes
   * @param {Array<NativeColor>} colors
   */
  constructor (name: string, classes: Classes, colors: Array<NativeColor> = []) {
    super()
    this.name = name
    this.classes = { normal: {}, int: {}, color: {}, special: {}, ...classes }
    this.colors = colors
    this.length = new Array<number>(101).fill(0)
    this.regex = []
  }

  /**
   * Parse normal classes
   *
   * @returns {Class}
   */
  parseNormal (): Class {
    return reduce(
      this.classes.normal,
      (r: Class, v: string, k: string) => {
        r[k] = v
        this.regex.push(`\\b${k}\\b`)
        return r
      },
      {}
    )
  }

  /**
   * Parse int classes to inject numbers
   *
   * @returns {Class}
   */
  parseInt (): Class {
    let line = (i: number) => ( i === 0 ? 0 : i + ( i / 4 ) ).toString()

    return reduce(
      this.classes.int,
      (r: Class, v: string, k: string) => {
        forEach(this.length, (n: number, i: number) => {
          r[k + i] = v
            .replace(regex.width, i.toString() + 'vw')
            .replace(regex.height, i.toString() + 'vh')
            .replace(regex.lineHeight, line(i) + 'px')
            .replace(regex.percent, i.toString() + '%')
            .replace(regex.zIndex, i.toString())
            .replace(regex.int, i.toString() + 'px')
        })
        this.regex.push(`\\b${k}\\d+\\b`)
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
          this.regex.push(`\\b${k + name}\\b`)
        })
        return r
      },
      {}
    )
  }

  /**
   * Parse special classes to inject both int and colors
   *
   * @returns {Class}
   */
  parseSpecial (): Class {
    return reduce(
      this.classes.special,
      (r: Class, v: string, k: string) => {
        forEach(this.length, (n: number, i: number) => {
          forEach(this.colors, ({ name, hex }) => {
            r[k
              .replace(regex.int, i.toString())
              .replace(regex.color, name)
              ] = v
              .replace(regex.int, i.toString())
              .replace(regex.color, hex)
            this.regex.push(`\\b${k.replace(regex.int, '\\d+').replace(regex.color, name)}\\b`)
          })
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
    let normal, int, color, special

    normal = this.parseNormal()
    int = this.parseInt()
    color = this.parseColor()
    special = this.parseSpecial()

    return { ...normal, ...int, ...color, ...special }
  }

  /**
   * Build the Component
   *
   * @returns {string}
   */
  build (): string {
    let classes: Class, css: string

    classes = this.parseAll()
    css = this.toCss(classes)

    return css
  }

  /**
   * Get the regex for this component
   *
   * @returns {Array<String>}
   */
  getRegex (): Array<string> {
    return uniq(this.regex)
  }
}

export default Component
