import { ViewStyle } from 'react-native'
import { Style } from '../definitions/types'

const Overflow: Style<ViewStyle> = {
  ofh: {
    overflow: 'hidden'
  },
  ofs: {
    overflow: 'scroll'
  },
  ofv: {
    overflow: 'visible'
  }
}

export default Overflow
