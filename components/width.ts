import Component from '../libs/component'

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

const Width = () => new Component('width', data, [])

export default Width
