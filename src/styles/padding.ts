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
    paddingLeft: 0,
    paddingRight: 0
  },
  php: {
    paddingLeft: '%',
    paddingRight: '%'
  },
  pv: {
    paddingTop: 0,
    paddingBottom: 0
  },
  pvp: {
    paddingTop: '%',
    paddingBottom: '%'
  }
}

export default Padding
