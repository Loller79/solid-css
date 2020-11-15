import { TextStyle } from 'react-native'
import { Style } from '../definitions/types'

const Text: Style<TextStyle> = {
  fs: {
    fontSize: 0
  },
  fstn: {
    fontStyle: 'normal'
  },
  fsti: {
    fontStyle: 'italic'
  },
  fvln: {
    fontVariant: ['lining-nums']
  },
  fvosn: {
    fontVariant: ['oldstyle-nums']
  },
  fvpn: {
    fontVariant: ['proportional-nums']
  },
  fvsc: {
    fontVariant: ['small-caps']
  },
  fvtn: {
    fontVariant: ['tabular-nums']
  },
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
  ifpf: {
    includeFontPadding: false
  },
  ifpt: {
    includeFontPadding: true
  },
  lh: {
    lineHeight: 0
  },
  ls: {
    letterSpacing: 0
  },
  taa: {
    textAlign: 'auto'
  },
  tac: {
    textAlign: 'center'
  },
  taj: {
    textAlign: 'justify'
  },
  tal: {
    textAlign: 'left'
  },
  tar: {
    textAlign: 'right'
  },
  tava: {
    textAlignVertical: 'auto'
  },
  tavb: {
    textAlignVertical: 'bottom'
  },
  tavc: {
    textAlignVertical: 'center'
  },
  tavt: {
    textAlignVertical: 'top'
  },
  tdc: {
    textDecorationColor: 'COLOR'
  },
  tdllt: {
    textDecorationLine: 'line-through'
  },
  tdln: {
    textDecorationLine: 'none'
  },
  tdlu: {
    textDecorationLine: 'underline'
  },
  tdlult: {
    textDecorationLine: 'underline line-through'
  },
  tdsds: {
    textDecorationStyle: 'dashed'
  },
  tdsdt: {
    textDecorationStyle: 'dotted'
  },
  tdsdb: {
    textDecorationStyle: 'double'
  },
  tdss: {
    textDecorationStyle: 'solid'
  },
  tsc: {
    textShadowColor: 'COLOR'
  },
  tsr: {
    textShadowRadius: 0
  },
  ttc: {
    textTransform: 'capitalize'
  },
  ttl: {
    textTransform: 'lowercase'
  },
  ttn: {
    textTransform: 'none'
  },
  ttu: {
    textTransform: 'uppercase'
  }
}

export default Text
