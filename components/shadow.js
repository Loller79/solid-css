const Component = require('../libs/component')

const data = {
  int: {
    's': '{ box-shadow: 0 0 $INTpx 0 rgba(0,0,0,0.2) }'
  },
  special: {
    's$INT-$COLOR': '{ box-shadow: 0 0 $INTpx 0 var(--$COLOR) }'
  }
}

const Shadow = (colors) => new Component('shadow', data, colors)

module.exports = Shadow
