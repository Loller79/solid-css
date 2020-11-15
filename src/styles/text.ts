import { TextStyle } from 'react-native'
import { Style } from '../definitions/types'

const Text: Style<TextStyle> = {
  // COLOR
  c: {
    color: 'COLOR'
  },
  // FONT SIZE
  fs: {
    fontSize: 0
  },
  // FONT STYLE
  fstn: {
    fontStyle: 'normal'
  },
  fsti: {
    fontStyle: 'italic'
  },
  // FONT WEIGHT
  fw100: {
    fontWeight: '100'
  },
  fw200: {
    fontWeight: '200'
  },
  fw300: {
    fontWeight: '300'
  },
  fw400: {
    fontWeight: '400'
  },
  fw500: {
    fontWeight: '500'
  },
  fw600: {
    fontWeight: '600'
  },
  fw700: {
    fontWeight: '700'
  },
  fw800: {
    fontWeight: '800'
  },
  fw900: {
    fontWeight: '900'
  },
  // INCLUDE FONT PADDING
  ifpf: {
    includeFontPadding: false
  },
  ifpt: {
    includeFontPadding: true
  },
  // LETTER SPACING
  ls: {
    letterSpacing: 0
  },
  lh: {
    lineHeight: 0
  },
  // TEXT ALIGN
  taa: {
    textAlign: 'auto'
  },
  tat: {
    textAlign: 'left'
  },
  tar: {
    textAlign: 'right'
  },
  tac: {
    textAlign: 'center'
  },
  taj: {
    textAlign: 'justify'
  },
  // TEXT ALIGN VERTICAL
  tava: {
    textAlignVertical: 'auto'
  },
  tavt: {
    textAlignVertical: 'top'
  },
  tavb: {
    textAlignVertical: 'bottom'
  },
  tavc: {
    textAlignVertical: 'center'
  },
  // TEXT DECORATION LINE
  tdln: {
    textDecorationLine: 'none'
  },
  tdlu: {
    textDecorationLine: 'underline'
  },
  tdllt: {
    textDecorationLine: 'line-through'
  },
  tdlult: {
    textDecorationLine: 'underline line-through'
  },
  // TEXT DECORATION STYLE
  tdss: {
    textDecorationStyle: 'solid'
  },
  tdsdb: {
    textDecorationStyle: 'double'
  },
  tdsdt: {
    textDecorationStyle: 'dotted'
  },
  tdsds: {
    textDecorationStyle: 'dashed'
  },
  tdc: {
    textDecorationColor: 'COLOR'
  },
  // TEXT SHADOW
  tsc: {
    textShadowColor: 'COLOR'
  },
  tsr: {
    textShadowRadius: 0
  },
  // TEXT TRANSFORM
  ttn: {
    textTransform: 'none'
  },
  ttc: {
    textTransform: 'capitalize'
  },
  ttu: {
    textTransform: 'uppercase'
  },
  ttl: {
    textTransform: 'lowercase'
  },
  // WRITING DIRECTION
  wda: {
    writingDirection: 'auto'
  },
  wdltr: {
    writingDirection: 'ltr'
  },
  wdrtl: {
    writingDirection: 'rtl'
  }
}

export default Text
