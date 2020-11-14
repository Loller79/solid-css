import Component from '../libs/component'

const data = {
  normal: {
    ha: '{ "height": "auto" }'
  },
  int: {
    h: '{ "height": $INTpx }',
    mnh: '{ "min-height": $INTpx }',
    mxh: '{ "max-height": $INTpx }',
    hp: '{ "height": "$INT%" }',
    mnhp: '{ "min-height": "$INT%" }',
    mxhp: '{ "max-height": "$INT%" }',
    hv: '{ "height": $INTvh }',
    mnhv: '{ "min-height": $INTvh }',
    mxhv: '{ "max-height": $INTvh }'
  }
}

const Height = () => new Component('height', data, [])

export default Height
