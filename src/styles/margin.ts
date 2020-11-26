import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Margin: Style<FlexStyle> = {
  m: {
    margin: 3
  },
  mp: {
    margin: '%'
  },
  mb: {
    marginBottom: 3
  },
  mbp: {
    marginBottom: '%'
  },
  ml: {
    marginLeft: 3
  },
  mlp: {
    marginLeft: '%'
  },
  mr: {
    marginRight: 3
  },
  mrp: {
    marginRight: '%'
  },
  mt: {
    marginTop: 3
  },
  mtp: {
    marginTop: '%'
  },
  mh: {
    marginLeft: 3,
    marginRight: 3
  },
  mhp: {
    marginLeft: '%',
    marginRight: '%'
  },
  mv: {
    marginTop: 3,
    marginBottom: 3
  },
  mvp: {
    marginTop: '%',
    marginBottom: '%'
  }
}

export default Margin
