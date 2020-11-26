import { ImageStyle, TextStyle } from 'react-native'
import { Style } from '../definitions/types'

type SVGStyle = {
  fill?: string
}

const Color: Style<ImageStyle & TextStyle & SVGStyle> = {
  '': {
    color: 'COLOR'
  },
  bg: {
    backgroundColor: 'COLOR'
  },
  fl: {
    fill: 'COLOR'
  }
}

export default Color
