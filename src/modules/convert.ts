import { kebabCase } from 'lodash'

class Convert {
  static toCSS<T extends object>(style: T, important: boolean = false): string {
    let r: string[], ks: string[], vs: any[], k: string, v: any

    r = []

    ks = Object.keys(style)
    vs = Object.values(style)

    for (let i = 0; i < ks.length; i++) {
      k = ks[i]
      v = vs[i]

      r.push(`${kebabCase(k)}: ${v}${important ? ' !important' : ''};`)
    }

    return r.join(' ')
  }
}

export default Convert
