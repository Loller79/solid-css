import Component from '../libs/component'
import { NativeColor } from '../various/interfaces'

const data = {
  color: {
    '': '{ "color": "$COLOR" }',
    'bg-': '{ "background": "$COLOR" }'
  }
}

const Color = (colors: Array<NativeColor>) => new Component('color', data, colors)

export default Color
