const Component = require('../libs/component')

const data = {
  normal: {
    'ha': '{ "height": "auto" }'
  },
  int: {
    'h': '{ "height": $INT }',
    'mnh': '{ "min-height": $INT }',
    'mxh': '{ "max-height": $INT }',
    'hp': '{ "height": "$INT%" }',
    'mnhp': '{ "min-height": "$INT%" }',
    'mxhp': '{ "max-height": "$INT%" }',
    'hd': '{ "height": $INTvh }',
    'mnhd': '{ "min-height": $INTvh }',
    'mxhd': '{ "max-height": $INTvh }'
  }
}

const Height = (screen) => new Component('height', data, false, 200, screen)

module.exports = Height
