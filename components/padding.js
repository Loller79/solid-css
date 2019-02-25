const Component = require('../libs/component')

const data = {
  int: {
    'p': '{ padding: calc(var(--intensity) * $INT) }',
    'pv': '{ padding-top: calc(var(--intensity) * $INT); padding-bottom: calc(var(--intensity) * $INT) }',
    'ph': '{ padding-left: calc(var(--intensity) * $INT); padding-right: calc(var(--intensity) * $INT) }',
    'pt': '{ padding-top: calc(var(--intensity) * $INT) }',
    'pb': '{ padding-bottom: calc(var(--intensity) * $INT) }',
    'pl': '{ padding-left: calc(var(--intensity) * $INT) }',
    'pr': '{ padding-right: calc(var(--intensity) * $INT) }',
    'fp': '{ padding: $INTpx }',
    'fpv': '{ padding-top: $INTpx; padding-bottom: $INTpx }',
    'fph': '{ padding-left: $INTpx; padding-right: $INTpx }',
    'fpt': '{ padding-top: $INTpx }',
    'fpb': '{ padding-bottom: $INTpx }',
    'fpl': '{ padding-left: $INTpx }',
    'fpr': '{ padding-right: $INTpx }'
  }
}

const Padding = new Component('padding', data)

module.exports = Padding
