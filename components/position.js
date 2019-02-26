const Component = require('../libs/component')

const data = {
  normal: {
    'fp': '{ position: fixed }',
    'rp': '{ position: relative }',
    'ap': '{ position: absolute }',
    'sp': '{ position: sticky }',
    'dp': '{ position: static }'
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
    'adt': '{ top: calc(var(--intensity) * $INT) }',
    'adb': '{ bottom: calc(var(--intensity) * $INT) }',
    'adl': '{ left: calc(var(--intensity) * $INT) }',
    'adr': '{ right: calc(var(--intensity) * $INT) }',
    'adtn': '{ top: -calc(var(--intensity) * $INT) }',
    'adbn': '{ bottom: -calc(var(--intensity) * $INT) }',
    'adln': '{ left: -calc(var(--intensity) * $INT) }',
    'adrn': '{ right: -calc(var(--intensity) * $INT) }'
  }
}

const Position = new Component('position', data)

module.exports = Position
