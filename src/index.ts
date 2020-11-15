import { filter, forEach, reduce, uniq } from 'lodash'
import { ScaledSize } from 'react-native'
import { Color, Style } from './definitions/types'
import Aspect from './styles/aspect'
import Backface from './styles/backface'
import Border from './styles/border'
import ColorStyle from './styles/color'
import Display from './styles/display'
import Flex from './styles/flex'
import Height from './styles/height'
import Margin from './styles/margin'
import Opacity from './styles/opacity'
import Overflow from './styles/overflow'
import Padding from './styles/padding'
import Position from './styles/position'
import Resize from './styles/resize'
import Shadow from './styles/shadow'
import Text from './styles/text'
import Width from './styles/width'
import ZIndex from './styles/z.index'

class CSS {
  private readonly colors: Color[]
  private readonly source: Style<any>
  private readonly window: ScaledSize

  private compiled: Style<any>

  constructor(colors: Color[], window: ScaledSize) {
    this.colors = colors
    this.compiled = {}
    this.source = {
      ...Aspect,
      ...Backface,
      ...Border,
      ...ColorStyle,
      ...Display,
      ...Flex,
      ...Height,
      ...Margin,
      ...Opacity,
      ...Overflow,
      ...Padding,
      ...Position,
      ...Resize,
      ...Shadow,
      ...Text,
      ...Width,
      ...ZIndex
    }
    this.window = window
  }

  compile(): Style<any> {
    reduce(
      this.source,
      (r: Style<any>, v: any, k: string) => {
        forEach(v, (w: boolean | number | string, l: string) => {
          switch (true) {
            case typeof w === 'number' && w === 0:
              for (let i = 0; i <= 100; i++) {
                r[k + i] = { [l]: i }
              }
              break
            case typeof w === 'number' && w === 1:
              for (let i = 0; i <= this.window.height; i++) {
                r[k + i] = { [l]: i }
              }
              break
            case typeof w === 'number' && w === 2:
              for (let i = 0; i <= this.window.width; i++) {
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
                r[k + (k ? '-' : '') + this.colors[i].name] = { [l]: this.colors[i].hex }
              }
              break
            default:
              r[k] = { [l]: w }
              break
          }
        })

        return r
      },
      this.compiled
    )

    return this.compiled
  }

  derive(style: string): Style<any> {
    let split: string[], value: any, keys: string[], values: any[], output: Style<any>

    split = style.split(' ')
    output = {}

    for (let i = 0; i < split.length; i++) {
      value = this.compiled[split[i]]
      if (!value) continue

      keys = Object.keys(value)
      values = Object.values(value)

      for (let j = 0; j < split.length; j++) {
        output[keys[j]] = values[j]
      }
    }

    return output
  }

  get duplicates(): string[] {
    return uniq(filter(Object.keys(this.source), (v, i, a: any) => a.indexOf(v) !== i))
  }
}

export default CSS
