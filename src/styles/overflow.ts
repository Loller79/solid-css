import { ViewStyle } from 'react-native'
import { Style } from '../definitions/types'

const Overflow: Style<ViewStyle> = {
  ofv: {
    overflow: 'visible'
  },
  ofh: {
    overflow: 'hidden'
  },
  ofs: {
    overflow: 'scroll'
  }
}

export default Overflow
