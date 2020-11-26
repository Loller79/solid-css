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
  bv: {
    bottom: 'WINDOW_HEIGHT'
  },
  l: {
    left: 3
  },
  lp: {
    left: '%'
  },
  lv: {
    left: 'WINDOW_WIDTH'
  },
  r: {
    right: 3
  },
  rp: {
    right: '%'
  },
  rv: {
    right: 'WINDOW_WIDTH'
  },
  t: {
    top: 3
  },
  tp: {
    top: '%'
  },
  tv: {
    top: 'WINDOW_HEIGHT'
  }
}

export default Position
