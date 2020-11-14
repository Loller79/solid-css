import { forEach, reduce, uniq } from 'lodash'
import { Class, Classes, NativeColor } from '../various/interfaces'
import CSS from './css'
import regex from './regex'

class Component extends CSS {
  readonly name: string
  readonly classes: Classes
  readonly colors: NativeColor[]
  readonly length: number[]
  readonly regex: string[]

  /**
   * Create a new Solid Component
   */
  constructor(name: string, classes: Classes, colors: NativeColor[] = []) {
    super()
    this.name = name
    this.classes = { normal: {}, int: {}, color: {}, special: {}, ...classes }
    this.colors = colors
    this.length = new Array<number>(101).fill(0)
    this.regex = []
  }

  /**
   * Parse normal classes
   */
  parseNormal(): Class {
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
   */
  parseInt(): Class {
    let line = (i: number) => (i === 0 ? 0 : i + i / 4).toString()
    let opacity = (i: number) => (i / 100).toString()

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
            .replace(regex.opacity, opacity(i))
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
   */
  parseColor(): Class {
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
   */
  parseSpecial(): Class {
    return reduce(
      this.classes.special,
      (r: Class, v: string, k: string) => {
        forEach(this.length, (n: number, i: number) => {
          forEach(this.colors, ({ name, hex }) => {
            r[k.replace(regex.int, i.toString()).replace(regex.color, name)] = v.replace(regex.int, i.toString()).replace(regex.color, hex)
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
   */
  parseAll(): Class {
    let normal: Class, int: Class, color: Class, special: Class

    normal = this.parseNormal()
    int = this.parseInt()
    color = this.parseColor()
    special = this.parseSpecial()

    return { ...normal, ...int, ...color, ...special }
  }

  /**
   * Build the Component
   */
  build(): string {
    let classes: Class, css: string

    classes = this.parseAll()
    css = this.toCSS(classes)

    return css
  }

  /**
   * Get the regex for this component
   */
  getRegex(): string[] {
    return uniq(this.regex)
  }
}

export default Component
