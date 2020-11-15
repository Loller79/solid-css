import { ImageStyle } from 'react-native'
import { Style } from '../definitions/types'

const Resize: Style<ImageStyle> = {
  rmc: {
    resizeMode: 'center'
  },
  rmcn: {
    resizeMode: 'contain'
  },
  rmcv: {
    resizeMode: 'cover'
  },
  rmr: {
    resizeMode: 'repeat'
  },
  rms: {
    resizeMode: 'stretch'
  }
}

export default Resize
