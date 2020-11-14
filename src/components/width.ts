import Component from '../libs/component'

const data = {
  normal: {
    wa: '{ "width": "auto" }'
  },
  int: {
    w: '{ "width": $INTpx }',
    mnw: '{ "min-width": $INTpx }',
    mxw: '{ "max-width": $INTpx }',
    wp: '{ "width": "$INT%" }',
    mnwp: '{ "min-width": "$INT%" }',
    mxwp: '{ "max-width": "$INT%" }',
    wd: '{ "width": $INTvw }',
    mnwv: '{ "min-width": $INTvw }',
    mxwv: '{ "max-width": $INTvw }'
  }
}

const Width = () => new Component('width', data, [])

export default Width
