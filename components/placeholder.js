const Component = require('../libs/component')

const data = {
  special: {
    'ph-$COLOR::placeholder': '{ color: var(--$COLOR) }'
  }
}

const Placeholder = (colors) => new Component('placeholder', data, colors)

module.exports = Placeholder
