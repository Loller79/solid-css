import Component from '../libs/component'
import { NativeColor } from '../various/interfaces'

const data = {
  special: {
    's$INT-$COLOR': '{ "box-shadow": "0 0 $INTpx 0 $COLOR" }'
  }
}

const Shadow = (colors: Array<NativeColor>) => new Component('shadow', data, colors)

export default Shadow
