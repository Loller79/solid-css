import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Padding: Style<FlexStyle> = {
  p: {
    padding: 3
  },
  pp: {
    padding: '%'
  },
  pb: {
    paddingBottom: 3
  },
  pbp: {
    paddingBottom: '%'
  },
  pl: {
    paddingLeft: 3
  },
  plp: {
    paddingLeft: '%'
  },
  pr: {
    paddingRight: 3
  },
  prp: {
    paddingRight: '%'
  },
  pt: {
    paddingTop: 3
  },
  ptp: {
    paddingTop: '%'
  },
  ph: {
    paddingLeft: 3,
    paddingRight: 3
  },
  php: {
    paddingLeft: '%',
    paddingRight: '%'
  },
  pv: {
    paddingTop: 3,
    paddingBottom: 3
  },
  pvp: {
    paddingTop: '%',
    paddingBottom: '%'
  }
}

export default Padding
