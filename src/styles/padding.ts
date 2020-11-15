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
  pe: {
    paddingEnd: 0
  },
  pep: {
    paddingEnd: '%'
  },
  ph: {
    paddingHorizontal: 0
  },
  php: {
    paddingHorizontal: '%'
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
  ps: {
    paddingStart: 0
  },
  psp: {
    paddingStart: '%'
  },
  pt: {
    paddingTop: 0
  },
  ptp: {
    paddingTop: '%'
  },
  pv: {
    paddingVertical: 0
  },
  pvp: {
    paddingVertical: '%'
  }
}

export default Padding
