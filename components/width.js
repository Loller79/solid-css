const Component = require('../libs/component')

const data = {
  normal: {
    'wa': '{ "width": "auto" }'
  },
  int: {
    'w': '{ "width": $INT }',
    'mnw': '{ "min-width": $INT }',
    'mxw': '{ "max-width": $INT }',
    'wp': '{ "width": "$INT%" }',
    'mnwp': '{ "min-width": "$INT%" }',
    'mxwp': '{ "max-width": "$INT%" }',
    'wd': '{ "width": $INTvw }',
    'mnwd': '{ "min-width": $INTvw }',
    'mxwd': '{ "max-width": $INTvw }'
  }
}

const Width = (screen) => new Component('width', data, false, 200, screen)

module.exports = Width
