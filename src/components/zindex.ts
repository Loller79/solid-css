import Component from '../libs/component'

const data = {
  int: {
    zi: '{ "z-index": $INT }'
  }
}

const ZIndex = () => new Component('zindex', data, [])

export default ZIndex
