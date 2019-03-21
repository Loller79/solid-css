const Component = require('../libs/component')

const data = {
  int: {
    's': '{ box-shadow: 0 0 $INTpx 0 var(--shadow) }'
  },
  special: {
    's$INT-$COLOR': '{ box-shadow: 0 0 $INTpx 0 var(--$COLOR) }'
  }
}

const Shadow = (colors) => new Component('shadow', data, colors)

module.exports = Shadow
