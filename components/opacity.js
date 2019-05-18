const Component = require('../libs/component')

const data = {
  int: {
    'o': '{ "opacity": $INT }'
  }
}

const Opacity = new Component('opacity', data)

module.exports = Opacity
