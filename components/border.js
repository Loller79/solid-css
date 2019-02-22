const Component = require('../libs/component')

const data = {
  int: {
    'br': '{ border-radius: calc(var(--vh) * $INT) }',
    'brt': '{ border-radius: calc(var(--vh) * $INT) calc(var(--vh) * $INT) 0 0 }',
    'brb': '{ border-radius: 0 0 calc(var(--vh) * $INT) calc(var(--vh) * $INT) }',
    'brl': '{ border-radius: calc(var(--vh) * $INT) 0 0 calc(var(--vh) * $INT) }',
    'brr': '{ border-radius: 0 calc(var(--vh) * $INT) calc(var(--vh) * $INT) 0 }',
    'brtl': '{ border-top-left-radius: calc(var(--vh) * $INT) }',
    'brtr': '{ border-top-right-radius: calc(var(--vh) * $INT) }',
    'brbl': '{ border-bottom-left-radius: calc(var(--vh) * $INT) }',
    'brbr': '{ border-bottom-right-radius: calc(var(--vh) * $INT) }',
    'brp': '{ border-radius: $INT% }',
    'brpt': '{ border-radius: $INT% $INT% 0 0 }',
    'brpb': '{ border-radius: 0 0 $INT% $INT% }',
    'brpl': '{ border-radius: $INT% 0 0 $INT% }',
    'brpr': '{ border-radius: 0 $INT% $INT% 0 }',
    'brptl': '{ border-top-left-radius: $INT% }',
    'brptr': '{ border-top-right-radius: $INT% }',
    'brpbl': '{ border-bottom-left-radius: $INT% }',
    'brpbr': '{ border-bottom-right-radius: $INT% }',
    'brf': '{ border-radius: $INTpx }',
    'brft': '{ border-radius: $INTpx $INTpx 0 0 }',
    'brfb': '{ border-radius: 0 0 $INTpx $INTpx }',
    'brfl': '{ border-radius: $INTpx 0 0 $INTpx }',
    'brfr': '{ border-radius: 0 $INTpx $INTpx 0 }',
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
