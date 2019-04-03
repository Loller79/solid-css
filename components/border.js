const Component = require('../libs/component')

const data = {
  int: {
    'br': '{ border-radius: calc(var(--intensity) * $INT) }',
    'brt': '{ border-top-left-radius: calc(var(--intensity) * $INT); border-top-right-radius: calc(var(--intensity) * $INT) }',
    'brb': '{ border-bottom-left-radius: calc(var(--intensity) * $INT); border-bottom-right-radius: calc(var(--intensity) * $INT) }',
    'brl': '{ border-top-left-radius: calc(var(--intensity) * $INT); border-bottom-left-radius: calc(var(--intensity) * $INT) }',
    'brr': '{ border-top-right-radius: calc(var(--intensity) * $INT); border-bottom-right-radius: calc(var(--intensity) * $INT) }',
    'brtl': '{ border-top-left-radius: calc(var(--intensity) * $INT) }',
    'brtr': '{ border-top-right-radius: calc(var(--intensity) * $INT) }',
    'brbl': '{ border-bottom-left-radius: calc(var(--intensity) * $INT) }',
    'brbr': '{ border-bottom-right-radius: calc(var(--intensity) * $INT) }',
    'brp': '{ border-radius: $INT% }',
    'brpt': '{ border-top-left-radius: $INT%; border-top-right-radius: $INT% }',
    'brpb': '{ border-bottom-left-radius: $INT%; border-bottom-right-radius: $INT% }',
    'brpl': '{ border-top-left-radius: $INT%; border-bottom-left-radius:$INT% }',
    'brpr': '{ border-top-right-radius: $INT%; border-bottom-right-radius: $INT% }',
    'brptl': '{ border-top-left-radius: $INT% }',
    'brptr': '{ border-top-right-radius: $INT% }',
    'brpbl': '{ border-bottom-left-radius: $INT% }',
    'brpbr': '{ border-bottom-right-radius: $INT% }',
    'brf': '{ border-radius: $INTpx }',
    'brft': '{ border-top-left-radius: $INTpx; border-top-right-radius: $INTpx }',
    'brfb': '{ border-bottom-left-radius: $INTpx; border-bottom-right-radius: $INTpx }',
    'brfl': '{ border-top-left-radius: $INTpx; border-bottom-left-radius: $INTpx }',
    'brfr': '{ border-top-right-radius: $INTpx; border-bottom-right-radius: $INTpx }',
    'brftl': '{ border-top-left-radius: $INTpx }',
    'brftr': '{ border-top-right-radius: $INTpx }',
    'brfbl': '{ border-bottom-left-radius: $INTpx }',
    'brfbr': '{ border-bottom-right-radius: $INTpx }',
    'bw': '{ border-width: $INTpx; border-style: solid }',
    'bwv': '{ border-top-width: $INTpx; border-top-style: solid; border-bottom-width: $INTpx; border-bottom-style: solid }',
    'bwh': '{ border-left-width: $INTpx; border-left-style: solid; border-right-width: $INTpx; border-right-style: solid }',
    'bwt': '{ border-top-width: $INTpx; border-top-style: solid }',
    'bwb': '{ border-bottom-width: $INTpx; border-bottom-style: solid }',
    'bwl': '{ border-left-width: $INTpx; border-left-style: solid }',
    'bwr': '{ border-right-width: $INTpx; border-right-style: solid }'
  },
  color: {
    'b-': '{ border-color: var(--$COLOR) }'
  }
}

const Border = (colors) => new Component('border', data, colors)

module.exports = Border
