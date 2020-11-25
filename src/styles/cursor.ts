import { Style } from '../definitions/types'

type CursorStyle = {
  cursor: 'default' | 'none' | 'pointer' | 'wait'
}

const Cursor: Style<CursorStyle> = {
  cd: {
    cursor: 'default'
  },
  cn: {
    cursor: 'none'
  },
  cp: {
    cursor: 'pointer'
  },
  cw: {
    cursor: 'wait'
  }
}

export default Cursor
