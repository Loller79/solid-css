import { Style } from '../definitions/types'

type DisplayStyle = {
  display: 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex' | 'none'
}

const Display: Style<DisplayStyle> = {
  db: {
    display: 'block'
  },
  df: {
    display: 'flex'
  },
  di: {
    display: 'inline'
  },
  dib: {
    display: 'inline-block'
  },
  dif: {
    display: 'inline-flex'
  },
  dn: {
    display: 'none'
  }
}

export default Display
