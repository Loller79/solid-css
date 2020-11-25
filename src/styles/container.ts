import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Container: Style<FlexStyle> = {
  hw: {
    height: 3,
    width: 3
  },
  hwp: {
    height: '%',
    width: '%'
  },
  hwv: {
    height: 'WINDOW_HEIGHT',
    width: 'WINDOW_WIDTH'
  },
  mnhw: {
    minHeight: 3,
    minWidth: 3
  },
  mnhwp: {
    minHeight: '%',
    minWidth: '%'
  },
  mnhwv: {
    minHeight: 'WINDOW_HEIGHT',
    minWidth: 'WINDOW_WIDTH'
  },
  mxhw: {
    maxHeight: 3,
    maxWidth: 3
  },
  mxhwp: {
    maxHeight: '%',
    maxWidth: '%'
  },
  mxhwv: {
    maxHeight: 'WINDOW_HEIGHT',
    maxWidth: 'WINDOW_WIDTH'
  }
}

export default Container
