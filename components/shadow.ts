import Component from '../libs/component'
import { NativeColor } from '../various/interfaces'

const data = {
  int: {
    's': '{ "elevation": $INT }'
  }
}

const Shadow = (colors: Array<NativeColor>) => new Component('shadow', data, colors)

export default Shadow
