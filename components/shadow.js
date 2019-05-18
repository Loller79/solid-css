const Component = require('../libs/component')

const data = {
  int: {
    's': '{ "elevation": $INT }'
  },
  special: {
    's$INT-$COLOR': '{ "elevation": $INT }'
  }
}

const Shadow = (colors) => new Component('shadow', data, colors)

module.exports = Shadow
