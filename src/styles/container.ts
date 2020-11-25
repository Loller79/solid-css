import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Container: Style<FlexStyle> = {
  cn: {
    height: 3,
    width: 3
  },
  cnp: {
    height: '%',
    width: '%'
  },
  cnv: {
    height: 'WINDOW_HEIGHT',
    width: 'WINDOW_WIDTH'
  },
  mncn: {
    minHeight: 3,
    minWidth: 3
  },
  mncnp: {
    minHeight: '%',
    minWidth: '%'
  },
  mncnv: {
    minHeight: 'WINDOW_HEIGHT',
    minWidth: 'WINDOW_WIDTH'
  },
  mxcn: {
    maxHeight: 3,
    maxWidth: 3
  },
  mxcnp: {
    maxHeight: '%',
    maxWidth: '%'
  },
  mxcnv: {
    maxHeight: 'WINDOW_HEIGHT',
    maxWidth: 'WINDOW_WIDTH'
  }
}

export default Container
