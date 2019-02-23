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
    'hd': '{ height: $INTvh }',
    'mnhd': '{ min-height: $INTvh }',
    'mxhd': '{ max-height: $INTvh }'
  }
}

const Height = new Component('height', data, false, 200)

module.exports = Height
