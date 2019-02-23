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
    'wd': '{ width: $INTvw }',
    'mnwd': '{ min-width: $INTvw }',
    'mxwd': '{ max-width: $INTvw }'
  }
}

const Width = new Component('width', data, false, 200)

module.exports = Width
