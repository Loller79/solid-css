import { ImageStyle, TextStyle } from 'react-native'
import { Style } from '../definitions/types'

const Color: Style<ImageStyle & TextStyle> = {
  '': {
    color: 'COLOR'
  },
  bg: {
    backgroundColor: 'COLOR'
  }
}

export default Color
