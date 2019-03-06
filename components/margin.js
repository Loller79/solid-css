const Component = require('../libs/component')

const data = {
  int: {
    'm': '{ margin: calc(var(--intensity) * $INT) }',
    'mv': '{ margin-top: calc(var(--intensity) * $INT); margin-bottom: calc(var(--intensity) * $INT) }',
    'mh': '{ margin-left: calc(var(--intensity) * $INT); margin-right: calc(var(--intensity) * $INT) }',
    'mt': '{ margin-top: calc(var(--intensity) * $INT) }',
    'mb': '{ margin-bottom: calc(var(--intensity) * $INT) }',
    'ml': '{ margin-left: calc(var(--intensity) * $INT) }',
    'mr': '{ margin-right: calc(var(--intensity) * $INT) }',
    'mtn': '{ margin-top: calc(var(--intensity) * -$INT) }',
    'mbn': '{ margin-bottom: calc(var(--intensity) * -$INT) }',
    'mln': '{ margin-left: calc(var(--intensity) * -$INT) }',
    'mrn': '{ margin-right: calc(var(--intensity) * -$INT) }',
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
