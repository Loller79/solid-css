const Component = require('../libs/component')

const data = {
  normal: {
    'df': '{ display: flex }',
    'dn': '{ display: none }',
    'pen': '{ pointer-events: none }',
    'pea': '{ pointer-events: all }'
  }
}

const Display = new Component('display', data)

module.exports = Display
