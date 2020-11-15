import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Height: Style<FlexStyle> = {
  h: {
    height: 1
  },
  hp: {
    height: '%'
  },
  hv: {
    height: 'WINDOW_HEIGHT'
  },
  mnh: {
    minHeight: 1
  },
  mnhp: {
    minHeight: '%'
  },
  mnhv: {
    minHeight: 'WINDOW_HEIGHT'
  },
  mxh: {
    maxHeight: 1
  },
  mxhp: {
    maxHeight: '%'
  },
  mxhv: {
    maxHeight: 'WINDOW_HEIGHT'
  }
}

export default Height
