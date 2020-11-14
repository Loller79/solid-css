import { forEach, reduce } from 'lodash'
import { Class, Query } from '../various/interfaces'
import regex from './regex'

class CSS {
  readonly queries: Query[]

  /**
   * Handles conversion of Class to CSS with media queries
   */
  constructor(
    queries: Query[] = [
      { name: 'sm', width: 568 },
      { name: 'md', width: 768 },
      { name: 'lg', width: 1024 },
      { name: 'xl', width: 1280 }
    ]
  ) {
    this.queries = [{ name: '', width: 0 }, ...queries]
  }

  /**
   * Convert name and property to a media query css class
   */
  static toQuery(name: string, width: number, v: string, k: string): string {
    return `${width ? `@media (min-width: ${width}px) { ` : ''}.${name ? `${name}-` : ''}${k} ${v.replace(/"/gm, '').replace(/,/gm, ';')} ${width ? '}' : ''}\n`
  }

  /**
   * Remove the query piece from a string
   */
  static removeQuery(v: string) {
    return v.replace(regex.query(''), '')
  }

  /**
   * Convert the JSON classes to CSS
   */
  toCSS(classes: Class, selective?: Boolean): string {
    return reduce(
      classes,
      (r: string, v: string, k: string) => {
        if (selective) {
          let name: string, width: number

          name = (k.match(regex.query('')) || [''])[0].replace('-', '')
          width = (this.queries.find((q) => q.name === name) || this.queries[0]).width
          k = name ? k.replace(`${name}-`, '') : k

          r += CSS.toQuery(name, width, v, k)
        } else {
          forEach(this.queries, ({ name, width }) => {
            r += CSS.toQuery(name, width, v, k)
          })
        }
        return r
      },
      ''
    )
  }
}

export default CSS
