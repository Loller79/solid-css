import { ViewStyle } from 'react-native'
import { Style } from '../definitions/types'

const Shadow: Style<ViewStyle> = {
  el: {
    elevation: 0
  },
  sc: {
    shadowColor: 'COLOR'
  },
  so: {
    shadowOpacity: 0
  },
  sr: {
    shadowRadius: 0
  }
}

export default Shadow
