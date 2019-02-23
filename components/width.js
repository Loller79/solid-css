const Component = require('../libs/component')

const data = {
  normal: {
    'wa': '{ width: auto }'
  },
  int: {
    'w': '{ width: $INTpx }',
    'mnw': '{ min-width: $INTpx }',
    'mxw': '{ max-width: $INTpx }',
    'wp': '{ width: $INT% }',
    'mnwp': '{ min-width: $INT% }',
    'mxwp': '{ max-width: $INT% }',
    'wd': '{ width: calc(var(--vh) * $INT) }',
    'mnwd': '{ min-width: calc(var(--vh) * $INT) }',
    'mxwd': '{ max-width: calc(var(--vh) * $INT) }'
  }
}

const Width = new Component('width', data)

module.exports = Width
