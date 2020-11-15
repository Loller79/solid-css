import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Position: Style<FlexStyle> = {
  b: {
    bottom: 0
  },
  bp: {
    bottom: '%'
  },
  e: {
    end: 0
  },
  ep: {
    end: '%'
  },
  l: {
    left: 0
  },
  lp: {
    left: '%'
  },
  posa: {
    position: 'absolute'
  },
  posr: {
    position: 'relative'
  },
  r: {
    right: 0
  },
  rp: {
    right: '%'
  },
  s: {
    start: 0
  },
  sp: {
    start: '%'
  },
  t: {
    top: 0
  },
  tp: {
    top: '%'
  }
}

export default Position
