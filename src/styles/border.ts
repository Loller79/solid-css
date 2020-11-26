import { ViewStyle } from 'react-native'
import { Style } from '../definitions/types'

const Border: Style<ViewStyle> = {
  bc: {
    borderColor: 'COLOR'
  },
  bbc: {
    borderBottomColor: 'COLOR'
  },
  blc: {
    borderLeftColor: 'COLOR'
  },
  brc: {
    borderRightColor: 'COLOR'
  },
  btc: {
    borderTopColor: 'COLOR'
  },
  br: {
    borderRadius: 3
  },
  bblr: {
    borderBottomLeftRadius: 3
  },
  bbrr: {
    borderBottomRightRadius: 3
  },
  btrr: {
    borderTopRightRadius: 3
  },
  btlr: {
    borderTopLeftRadius: 3
  },
  bsds: {
    borderStyle: 'dashed'
  },
  bsdt: {
    borderStyle: 'dotted'
  },
  bss: {
    borderStyle: 'solid'
  },
  bw: {
    borderWidth: 0
  },
  bbw: {
    borderBottomWidth: 0
  },
  blw: {
    borderLeftWidth: 0
  },
  brw: {
    borderRightWidth: 0
  },
  btw: {
    borderTopWidth: 0
  }
}

export default Border
