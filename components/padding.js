const Component = require('../libs/component')

const data = {
  int: {
    'p': '{ padding: calc(var(--vh) * $INT) }',
    'pv': '{ padding-top: calc(var(--vh) * $INT); padding-bottom: calc(var(--vh) * $INT) }',
    'ph': '{ padding-left: calc(var(--vh) * $INT); padding-right: calc(var(--vh) * $INT) }',
    'pt': '{ padding-top: calc(var(--vh) * $INT) }',
    'pb': '{ padding-bottom: calc(var(--vh) * $INT) }',
    'pl': '{ padding-left: calc(var(--vh) * $INT) }',
    'pr': '{ padding-right: calc(var(--vh) * $INT) }',
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
