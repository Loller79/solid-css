import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Width: Style<FlexStyle> = {
  mxw: {
    maxWidth: 0
  },
  mxwp: {
    maxWidth: '%'
  },
  mxwv: {
    maxWidth: 'WINDOW_WIDTH'
  },
  mnw: {
    minWidth: 0
  },
  mnwp: {
    minWidth: '%'
  },
  mnwv: {
    minWidth: 'WINDOW_WIDTH'
  },
  w: {
    width: 0
  },
  wp: {
    width: '%'
  },
  wv: {
    width: 'WINDOW_WIDTH'
  }
}

export default Width
