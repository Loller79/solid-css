const Component = require('../libs/component')

const data = {
  color: {
    '': '{ color: var(--$COLOR) }',
    'bg-': '{ background: var(--$COLOR) }'
  }
}

const Color = (colors) => new Component('color', data, colors)

module.exports = Color
