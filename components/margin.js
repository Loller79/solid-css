const Component = require('../libs/component')

const data = {
  int: {
    'm': '{ margin: calc(var(--vh) * $INT) }',
    'mv': '{ margin-top: calc(var(--vh) * $INT); margin-bottom: calc(var(--vh) * $INT) }',
    'mh': '{ margin-left: calc(var(--vh) * $INT); margin-right: calc(var(--vh) * $INT) }',
    'mt': '{ margin-top: calc(var(--vh) * $INT) }',
    'mb': '{ margin-bottom: calc(var(--vh) * $INT) }',
    'ml': '{ margin-left: calc(var(--vh) * $INT) }',
    'mr': '{ margin-right: calc(var(--vh) * $INT) }',
    'mtn': '{ margin-top: -calc(var(--vh) * $INT) }',
    'mbn': '{ margin-bottom: -calc(var(--vh) * $INT) }',
    'mln': '{ margin-left: -calc(var(--vh) * $INT) }',
    'mrn': '{ margin-right: -calc(var(--vh) * $INT) }',
    'fm': '{ margin: $INTpx }',
    'fmv': '{ margin-top: $INTpx; margin-bottom: $INTpx }',
    'fmh': '{ margin-left: $INTpx; margin-right: $INTpx }',
    'fmt': '{ margin-top: $INTpx }',
    'fmb': '{ margin-bottom: $INTpx }',
    'fml': '{ margin-left: $INTpx }',
    'fmr': '{ margin-right: $INTpx }',
    'fmtn': '{ margin-top: -$INTpx }',
    'fmbn': '{ margin-bottom: -$INTpx }',
    'fmln': '{ margin-left: -$INTpx }',
    'fmrn': '{ margin-right: -$INTpx }'
  }
}

const Margin = new Component('margin', data)

module.exports = Margin
