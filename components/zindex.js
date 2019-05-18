const Component = require('../libs/component')

const data = {
  int: {
    'zi': '{ "z-index": $INT }'
  }
}

const ZIndex = new Component('zindex', data)

module.exports = ZIndex
