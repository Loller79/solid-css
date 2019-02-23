const Component = require('../libs/component')

const data = {
  int: {
    's': '{ box-shadow: 0 0 $INTpx 0 rgba(0,0,0,0.2) }'
  }
}

const Shadow = new Component('shadow', data)

module.exports = Shadow
