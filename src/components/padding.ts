import Component from '../libs/component'

const data = {
  normal: {
    pa: '{ "padding": "auto" }',
    pha: '{ "padding-top": "auto", "padding-bottom": "auto" }',
    pva: '{ "padding-left": "auto", "padding-right": "auto" }',
    pta: '{ "padding-top": "auto" }',
    pba: '{ "padding-bottom": "auto" }',
    pla: '{ "padding-left": "auto" }',
    pra: '{ "padding-right": "auto" }'
  },
  int: {
    p: '{ "padding": $INTpx }',
    pv: '{ "padding-top": $INTpx, "padding-bottom": $INTpx }',
    ph: '{ "padding-left": $INTpx, "padding-right": $INTpx }',
    pt: '{ "padding-top": $INTpx }',
    pb: '{ "padding-bottom": $INTpx }',
    pl: '{ "padding-left": $INTpx }',
    pr: '{ "padding-right": $INTpx }',
    ptn: '{ "padding-top": -$INTpx }',
    pbn: '{ "padding-bottom": -$INTpx }',
    pln: '{ "padding-left": -$INTpx }',
    prn: '{ "padding-right": -$INTpx }'
  }
}

const Padding = () => new Component('padding', data, [])

export default Padding
