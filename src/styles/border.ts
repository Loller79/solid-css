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
    borderRadius: 0
  },
  bblr: {
    borderBottomLeftRadius: 0
  },
  bbrr: {
    borderBottomRightRadius: 0
  },
  btrr: {
    borderTopRightRadius: 0
  },
  btlr: {
    borderTopLeftRadius: 0
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
