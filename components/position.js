const Component = require('../libs/component')

const data = {
  normal: {
    'fp': '{ "position": "fixed" }',
    'rp': '{ "position": "relative" }',
    'ap': '{ "position": "absolute" }',
    'sp': '{ "position": "sticky" }',
    'dp': '{ "position": "static" }'
  },
  int: {
    'at': '{ "top": $INT }',
    'ab': '{ "bottom": $INT }',
    'al': '{ "left": $INT }',
    'ar': '{ "right": $INT }',
    'atn': '{ "top": -$INT }',
    'abn': '{ "bottom": -$INT }',
    'aln': '{ "left": -$INT }',
    'arn': '{ "right": -$INT }',
    'apt': '{ "top": "$INT%" }',
    'apb': '{ "bottom": "$INT%" }',
    'apl': '{ "left": "$INT%" }',
    'apr': '{ "right": "$INT%" }',
    'aptn': '{ "top": "-$INT%" }',
    'apbn': '{ "bottom": "-$INT%" }',
    'apln': '{ "left": "-$INT%" }',
    'aprn': '{ "right": "-$INT%" }'
  }
}

const Position = new Component('position', data, false, 200)

module.exports = Position
