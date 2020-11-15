import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Width: Style<FlexStyle> = {
  w: {
    width: 2
  },
  wp: {
    width: '%'
  },
  wv: {
    width: 'WINDOW_WIDTH'
  },
  mnw: {
    minWidth: 2
  },
  mnwp: {
    minWidth: '%'
  },
  mnwv: {
    minWidth: 'WINDOW_WIDTH'
  },
  mxw: {
    maxWidth: 2
  },
  mxwp: {
    maxWidth: '%'
  },
  mxwv: {
    maxWidth: 'WINDOW_WIDTH'
  }
}

export default Width
