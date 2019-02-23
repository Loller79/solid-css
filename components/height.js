const Component = require('../libs/component')

const data = {
  normal: {
    'ha': '{ height: auto }'
  },
  int: {
    'h': '{ height: $INTpx }',
    'mnh': '{ min-height: $INTpx }',
    'mxh': '{ max-height: $INTpx }',
    'hp': '{ height: $INT% }',
    'mnhp': '{ min-height: $INT% }',
    'mxhp': '{ max-height: $INT% }',
    'hd': '{ height: calc(var(--vh) * $INT) }',
    'mnhd': '{ min-height: calc(var(--vh) * $INT) }',
    'mxhd': '{ max-height: calc(var(--vh) * $INT) }'
  }
}

const Height = new Component('height', data)

module.exports = Height
