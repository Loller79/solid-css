import Component from '../libs/component'

const data = {
  normal: {
    ha: '{ "height": "auto" }'
  },
  int: {
    h: '{ "height": $INT }',
    mnh: '{ "min-height": $INT }',
    mxh: '{ "max-height": $INT }',
    hp: '{ "height": "$INT%" }',
    mnhp: '{ "min-height": "$INT%" }',
    mxhp: '{ "max-height": "$INT%" }',
    hd: '{ "height": $INTvh }',
    mnhd: '{ "min-height": $INTvh }',
    mxhd: '{ "max-height": $INTvh }'
  }
}

const Height = () => new Component('height', data, [])

export default Height
