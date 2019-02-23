const Component = require('../libs/component')

const data = {
  normal: {
    'fp': '{ position: fixed }',
    'rp': '{ position: relative }',
    'ap': '{ position: absolute }',
    'sp': '{ position: sticky }',
    'sd': '{ position: static }'
  },
  int: {
    'at': '{ top: $INTpx }',
    'ab': '{ bottom: $INTpx }',
    'al': '{ left: $INTpx }',
    'ar': '{ right: $INTpx }',
    'atn': '{ top: -$INTpx }',
    'abn': '{ bottom: -$INTpx }',
    'aln': '{ left: -$INTpx }',
    'arn': '{ right: -$INTpx }',
    'apt': '{ top: $INT% }',
    'apb': '{ bottom: $INT% }',
    'apl': '{ left: $INT% }',
    'apr': '{ right: $INT% }',
    'aptn': '{ top: -$INT% }',
    'apbn': '{ bottom: -$INT% }',
    'apln': '{ left: -$INT% }',
    'aprn': '{ right: -$INT% }',
    'adt': '{ top: calc(var(--vh) * $INT) }',
    'adb': '{ bottom: calc(var(--vh) * $INT) }',
    'adl': '{ left: calc(var(--vh) * $INT) }',
    'adr': '{ right: calc(var(--vh) * $INT) }',
    'adtn': '{ top: -calc(var(--vh) * $INT) }',
    'adbn': '{ bottom: -calc(var(--vh) * $INT) }',
    'adln': '{ left: -calc(var(--vh) * $INT) }',
    'adrn': '{ right: -calc(var(--vh) * $INT) }'
  }
}

const Position = new Component('position', data)

module.exports = Position
