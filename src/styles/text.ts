import { TextStyle } from 'react-native'
import { Style } from '../definitions/types'

const Text: Style<TextStyle> = {
  fs: {
    fontSize: 0,
    lineHeight: 0
  },
  fstn: {
    fontStyle: 'normal'
  },
  fsti: {
    fontStyle: 'italic'
  },
  fvsc: {
    fontVariant: ['small-caps']
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
  lh: {
    lineHeight: 0
  },
  ls: {
    letterSpacing: 0
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
