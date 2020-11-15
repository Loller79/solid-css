import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Padding: Style<FlexStyle> = {
  p: {
    padding: 0
  },
  pp: {
    padding: '%'
  },
  pb: {
    paddingBottom: 0
  },
  pbp: {
    paddingBottom: '%'
  },
  pl: {
    paddingLeft: 0
  },
  plp: {
    paddingLeft: '%'
  },
  pr: {
    paddingRight: 0
  },
  prp: {
    paddingRight: '%'
  },
  pt: {
    paddingTop: 0
  },
  ptp: {
    paddingTop: '%'
  },
  ph: {
    paddingHorizontal: 0
  },
  php: {
    paddingHorizontal: '%'
  },
  pv: {
    paddingVertical: 0
  },
  pvp: {
    paddingVertical: '%'
  }
}

export default Padding
