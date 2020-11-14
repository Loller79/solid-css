import Component from '../libs/component'

const data = {
  normal: {
    ma: '{ "margin": "auto" }',
    mha: '{ "margin-top": "auto", "margin-bottom": "auto" }',
    mva: '{ "margin-left": "auto", "margin-right": "auto" }',
    mta: '{ "margin-top": "auto" }',
    mba: '{ "margin-bottom": "auto" }',
    mla: '{ "margin-left": "auto" }',
    mra: '{ "margin-right": "auto" }'
  },
  int: {
    m: '{ "margin": $INTpx }',
    mv: '{ "margin-top": $INTpx, "margin-bottom": $INTpx }',
    mh: '{ "margin-left": $INTpx, "margin-right": $INTpx }',
    mt: '{ "margin-top": $INTpx }',
    mb: '{ "margin-bottom": $INTpx }',
    ml: '{ "margin-left": $INTpx }',
    mr: '{ "margin-right": $INTpx }',
    mtn: '{ "margin-top": -$INTpx }',
    mbn: '{ "margin-bottom": -$INTpx }',
    mln: '{ "margin-left": -$INTpx }',
    mrn: '{ "margin-right": -$INTpx }'
  }
}

const Margin = () => new Component('margin', data, [])

export default Margin
