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
  mt: {
    marginTop: 0
  },
  mtp: {
    marginTop: '%'
  },
  mh: {
    marginHorizontal: 0
  },
  mhp: {
    marginHorizontal: '%'
  },
  mv: {
    marginVertical: 0
  },
  mvp: {
    marginVertical: '%'
  }
}

export default Margin
