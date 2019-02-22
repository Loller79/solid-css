const Component = require('../libs/component')

const data = {
  color: {
    '': '{ color: $COLOR }',
    'bg-': '{ background-color: $COLOR }'
  }
}

const Color = (colors) => new Component('color', data, colors)

module.exports = Color
