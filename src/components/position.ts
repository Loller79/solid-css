import Component from '../libs/component'

const data = {
  normal: {
    pof: '{ "position": "fixed" }',
    por: '{ "position": "relative" }',
    poa: '{ "position": "absolute" }',
    posy: '{ "position": "sticky" }',
    posc: '{ "position": "static" }'
  },
  int: {
    at: '{ "top": $INTpx }',
    ab: '{ "bottom": $INTpx }',
    al: '{ "left": $INTpx }',
    ar: '{ "right": $INTpx }',
    atn: '{ "top": -$INTpx }',
    abn: '{ "bottom": -$INTpx }',
    aln: '{ "left": -$INTpx }',
    arn: '{ "right": -$INTpx }',
    apt: '{ "top": "$INT%" }',
    apb: '{ "bottom": "$INT%" }',
    apl: '{ "left": "$INT%" }',
    apr: '{ "right": "$INT%" }',
    aptn: '{ "top": "-$INT%" }',
    apbn: '{ "bottom": "-$INT%" }',
    apln: '{ "left": "-$INT%" }',
    aprn: '{ "right": "-$INT%" }'
  }
}

const Position = () => new Component('position', data, [])

export default Position
