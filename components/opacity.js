const Component = require('../libs/component')

const data = {
  int: {
    'o': '{ opacity: calc($INT / 100) }'
  }
}

const Opacity = new Component('opacity', data)

module.exports = Opacity
