import { filter, forEach, max, reduce, uniq } from 'lodash'
import { ScaledSize } from 'react-native'
import { Color, Style } from './definitions/types'
import Aspect from './styles/aspect'
import Backface from './styles/backface'
import Border from './styles/border'
import Display from './styles/display'
import Flex from './styles/flex'
import Height from './styles/height'
import Margin from './styles/margin'
import Opacity from './styles/opacity'
import Overflow from './styles/overflow'
import Padding from './styles/padding'
import Position from './styles/position'
import Shadow from './styles/shadow'
import Text from './styles/text'
import Width from './styles/width'
import ZIndex from './styles/z.index'

class CSSConstructor {
  colors: Color[]
  compiled: Style<any>
  source: Style<any>
  window: ScaledSize

  constructor() {
    this.colors = []
    this.compiled = {}
    this.source = {}
    this.window = { fontScale: 0, height: 0, scale: 0, width: 0 }
  }

  initialize(colors: Color[], window: ScaledSize) {
    this.colors = colors
    this.source = {
      ...Aspect,
      ...Backface,
      ...Border,
      ...Display,
      ...Flex,
      ...Height,
      ...Margin,
      ...Opacity,
      ...Overflow,
      ...Padding,
      ...Position,
      ...Shadow,
      ...Text,
      ...Width,
      ...ZIndex
    }
    this.window = window

    this.compiled = this.compile()
  }

  compile(): Style<any> {
    return reduce(
      this.source,
      (r: Style<any>, v: any, k: string) => {
        forEach(v, (w: boolean | number | string, l: string) => {
          switch (true) {
            case typeof w === 'number':
              for (let i = 0; i <= max([this.window.width, this.window.height]); i++) {
                r[k + i] = { [l]: i }
              }
              break
            case typeof w === 'string' && w === '%':
              for (let i = 0; i <= 100; i++) {
                r[k + i] = { [l]: i + '%' }
              }
              break
            case typeof w === 'string' && w === 'WINDOW_WIDTH':
              for (let i = 100; i >= 0; i--) {
                r[k + i] = { [l]: (this.window.width * i) / 100 }
              }
              break
            case typeof w === 'string' && w === 'WINDOW_HEIGHT':
              for (let i = 100; i >= 0; i--) {
                r[k + i] = { [l]: (this.window.height * i) / 100 }
              }
              break
            case typeof w === 'string' && w === 'COLOR':
              for (let i = 0; i < this.colors.length; i++) {
                r[k + '-' + this.colors[i].name] = { [l]: this.colors[i].hex }
              }
              break
            default:
              r[k] = { [l]: w }
              break
          }
        })

        return r
      },
      {}
    )
  }

  derive(style: string): Style<any> {
    return reduce(
      style.split(' '),
      (r: Style<any>, k: string) => {
        let v: any

        v = this.compiled[k]
        if (!v) return r

        forEach(v, (v: boolean | number | string, k: string) => {
          r[k] = v
        })

        return r
      },
      {}
    )
  }

  get duplicates(): string[] {
    return uniq(filter(Object.keys(this.source), (v, i, a: any) => a.indexOf(v) !== i))
  }
}

const CSS = new CSSConstructor()
export default CSS
