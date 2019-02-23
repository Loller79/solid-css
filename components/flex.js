const Component = require('../libs/component')

const data = {
  normal: {
    'frr': '{ flex-direction: row-reverse }',
    'fr': '{ flex-direction: row }',
    'fcr': '{ flex-direction: column-reverse }',
    'fc': '{ flex-direction: column }',
    'fw': '{ flex-wrap: wrap }',
    'ffr': '{ flex: initial }',
    'ff': '{ flex: 1 }',
    'jcfs': '{ justify-content: flex-start }',
    'jcfe': '{ justify-content: flex-end }',
    'jcc': '{ justify-content: center }',
    'jcsb': '{ justify-content: space-between }',
    'jcsa': '{ justify-content: space-around }',
    'aifs': '{ align-items: flex-start }',
    'aife': '{ align-items: flex-end }',
    'aic': '{ align-items: center }',
    'ais': '{ align-items: stretch }',
    'asfs': '{ align-self: flex-start }',
    'asfe': '{ align-self: flex-end }',
    'asc': '{ align-self: center }'
  }
}

const Flex = new Component('flex', data)

module.exports = Flex
