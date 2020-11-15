import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Height: Style<FlexStyle> = {
  h: {
    height: 0
  },
  hp: {
    height: '%'
  },
  hv: {
    height: 'WINDOW_HEIGHT'
  },
  mxh: {
    maxHeight: 0
  },
  mxhp: {
    maxHeight: '%'
  },
  mxhv: {
    maxHeight: 'WINDOW_HEIGHT'
  },
  mnh: {
    minHeight: 0
  },
  mnhp: {
    minHeight: '%'
  },
  mnhv: {
    minHeight: 'WINDOW_HEIGHT'
  }
}

export default Height
