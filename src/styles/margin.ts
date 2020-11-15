import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Margin: Style<FlexStyle> = {
  m: {
    margin: 0
  },
  mp: {
    margin: '%'
  },
  mb: {
    marginBottom: 0
  },
  mbp: {
    marginBottom: '%'
  },
  me: {
    marginEnd: 0
  },
  mep: {
    marginEnd: '%'
  },
  mh: {
    marginHorizontal: 0
  },
  mhp: {
    marginHorizontal: '%'
  },
  ml: {
    marginLeft: 0
  },
  mlp: {
    marginLeft: '%'
  },
  mr: {
    marginRight: 0
  },
  mrp: {
    marginRight: '%'
  },
  ms: {
    marginStart: 0
  },
  msp: {
    marginStart: '%'
  },
  mt: {
    marginTop: 0
  },
  mtp: {
    marginTop: '%'
  },
  mv: {
    marginVertical: 0
  },
  mvp: {
    marginVertical: '%'
  }
}

export default Margin
