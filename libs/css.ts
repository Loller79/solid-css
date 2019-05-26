import { Class, Query } from '../various/interfaces'
import { forEach, reduce } from 'lodash'
import regex from './regex'

class Css {
  readonly queries: Array<Query>

  /**
   * Handles conversion of Class to Css with media queries
   *
   * @param {Array<Query>} queries
   */
  constructor (queries: Array<Query> = [
    { name: 'sm', width: 568 },
    { name: 'md', width: 768 },
    { name: 'lg', width: 1024 },
    { name: 'xl', width: 1280 }
  ]) {
    this.queries = [{ name: '', width: 0 }, ...queries]
  }

  static toQuery (name: string, width: number, v: string, k: string): string {
    return `${width ? `@media (min-width: ${width}px) { ` : ''}.${name ? `${name}-` : ''}${k} ${v.replace(/"/gm, '').replace(/,/gm, ';')} ${width ? '}' : ''}\n`
  }

  /**
   * Convert the JSON classes to CSS
   *
   * @param {Class} classes
   * @param {Boolean} selective
   * @returns {string}
   */
  toCss (classes: Class, selective?: Boolean): string {
    return reduce(
      classes,
      (r: string, v: string, k: string) => {
        if (selective) {
          let name: string, width: number

          name = (k.match(regex.query('')) || [''])[0].replace('-', '')
          width = (this.queries.find(q => q.name === name) || this.queries[0]).width
          k = name ? k.replace(`${name}-`, '') : k

          r += Css.toQuery(name, width, v, k)
        } else {
          forEach(this.queries, ({ name, width }) => {
            r += Css.toQuery(name, width, v, k)
          })
        }
        return r
      },
      ''
    )
  }
}

export default Css
