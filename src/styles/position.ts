import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Position: Style<FlexStyle> = {
  psa: {
    position: 'absolute'
  },
  psf: {
    position: 'fixed' as any
  },
  psr: {
    position: 'relative'
  },
  pss: {
    position: 'sticky' as any
  },
  b: {
    bottom: 3
  },
  bp: {
    bottom: '%'
  },
  l: {
    left: 3
  },
  lp: {
    left: '%'
  },
  r: {
    right: 3
  },
  rp: {
    right: '%'
  },
  t: {
    top: 3
  },
  tp: {
    top: '%'
  }
}

export default Position
