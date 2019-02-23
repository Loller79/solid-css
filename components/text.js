const Component = require('../libs/component')

const data = {
  normal: {
    'tfl': '{ font-weight: 300 }',
    'tfr': '{ font-weight: 400 }',
    'tfm': '{ font-weight: 500 }'
    'tfsb': '{ font-weight: 600 }',
    'tfb': '{ font-weight: 700 }',
    'tal': '{ text-align: left }',
    'tac': '{ text-align: center }',
    'tar': '{ text-align: right }',
    'toe': '{ text-overflow: ellipsis; overflow: hidden; white-space: nowrap; max-width: 100% }',
    'tdu': '{ text-decoration: underline }'
  },
  int: {
    'ts': '{ font-size: calc(($INTpx * 2) + 6); line-height: calc((($INTpx * 2) + 6)) + ((($INTpx * 2) + 6))) / 4) }'
  }
}

const Text = new Component('text', data)

module.exports = Text
