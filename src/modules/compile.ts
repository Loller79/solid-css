import ColorHandler from 'color'
import { Color, Compiled, Style } from '../definitions/types'

class Compile {
  static all(v: Style<any>, cs: Color[]): Compiled {
    let r1: Style<any>, r2: string[], ks1: string[], vs1: any[], k1: string, v1: any, ks2: string[], vs2: any[], k2: string, v2: any

    r1 = {}
    r2 = []

    ks1 = Object.keys(v)
    vs1 = Object.values(v)

    for (let i = 0; i < ks1.length; i++) {
      k1 = ks1[i]
      v1 = vs1[i]

      ks2 = Object.keys(vs1[i])
      vs2 = Object.values(vs1[i])

      for (let j = 0; j < ks2.length; j++) {
        k2 = ks2[j]
        v2 = vs2[j]

        switch (true) {
          case v2 === '%':
            this.percentual(r1, r2, k1, k2)
            break
          case v2 === 'WINDOW_WIDTH':
            this.viewport(r1, r2, k1, k2, 'w')
            break
          case v2 === 'WINDOW_HEIGHT':
            this.viewport(r1, r2, k1, k2, 'h')
            break
          case v2 === 0:
            this.natural(r1, r2, k1, k2)
            break
          case v2 === 1:
            this.natural(r1, r2, k1, k2, 'px', 4096)
            break
          case v2 === 2:
            this.natural(r1, r2, k1, k2, 'px', 4096)
            break
          case v2 === 3:
            this.natural(r1, r2, k1, k2, 'px', 4096)
            break
          case v2 === 4:
            this.natural(r1, r2, k1, k2, 0)
            break
          case v2 === 'COLOR':
            this.color(r1, r2, k1, k2, cs)
            break
          default:
            this.string(r1, r2, k1, k2, v2)
            break
        }
      }
    }

    return { regex: new RegExp('(sm-|md-|lg-|xl-)?' + '(' + r2.join('|') + ')', 'gm'), style: r1 }
  }

  static natural(r1: Style<any>, r2: string[], k1: string, k2: string, m: any = 'px', mx: number = 100) {
    for (let i = 0; i <= mx; i++) {
      if (r1[k1 + i]) {
        r1[k1 + i][k2] = i + m
      } else {
        r1[k1 + i] = { [k2]: i + m }
      }
    }
    r2.push(`\\b${k1}[0-9]+\\b`)
  }

  // static integer(r1: Style<any>, r2: string[], k1: string, k2: string, m: any = 0, mx: number = 100) {
  //   for (let i = -100; i <= mx; i++) {
  //     r1[k1 + i] = { [k2]: i + m }
  //   }
  //   r2.push(`\\b${k1}\-?[0-9]+\\b`)
  // }

  static percentual(r1: Style<any>, r2: string[], k1: string, k2: string) {
    return this.natural(r1, r2, k1, k2, '%')
  }

  static viewport(r1: Style<any>, r2: string[], k1: string, k2: string, m: 'w' | 'h') {
    return this.natural(r1, r2, k1, k2, 'v' + m)
  }

  static color(r1: Style<any>, r2: string[], k1: string, k2: string, cs: Color[]) {
    for (let i = 0; i < cs.length; i++) {
      r1[k1 + (k1 ? '-' : '') + cs[i].name] = { [k2]: cs[i].hex }

      for (let j = 0; j <= 100; j++) {
        r1[k1 + (k1 ? '-' : '') + cs[i].name + '-' + j] = {
          [k2]: new ColorHandler(cs[i].hex)
            .alpha(j / 100)
            .rgb()
            .string()
        }
      }

      r2.push(`\\b${k1}${k1 ? '-' : ''}${cs[i].name}(\-[0-9]+)?\\b`)
    }
  }

  static string(r1: Style<any>, r2: string[], k1: string, k2: string, v: string) {
    r1[k1] = { [k2]: v }
    r2.push(`\\b${k1}\\b`)
  }
}

export default Compile
