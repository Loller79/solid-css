import { Style } from '../definitions/types'

type WillChangeStyle = {
  willChange: 'opacity' | 'transform' | 'opacity, transform'
}

const WillChange: Style<WillChangeStyle> = {
  wco: {
    willChange: 'opacity'
  },
  wct: {
    willChange: 'transform'
  },
  wcot: {
    willChange: 'opacity, transform'
  }
}

export default WillChange
