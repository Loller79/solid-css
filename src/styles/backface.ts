import { ViewStyle } from 'react-native'
import { Style } from '../definitions/types'

const Backface: Style<ViewStyle> = {
  bfvv: {
    backfaceVisibility: 'visible'
  },
  bfvh: {
    backfaceVisibility: 'hidden'
  }
}

export default Backface
