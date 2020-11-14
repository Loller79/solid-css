import Component from '../libs/component'

const data = {
  normal: {
    f1: '{ "flex": 1 }',
    fw: '{ "flex-wrap": "wrap" }',
    fdr: '{ "flex-direction": "row" }',
    fdrr: '{ "flex-direction": "row-reverse" }',
    fdc: '{ "flex-direction": "column" }',
    fdcr: '{ "flex-direction": "column-reverse" }',
    jcfs: '{ "justify-content": "flex-start" }',
    jcfe: '{ "justify-content": "flex-end" }',
    jcc: '{ "justify-content": "center" }',
    jcsb: '{ "justify-content": "space-between" }',
    jcsa: '{ "justify-content": "space-around" }',
    aifs: '{ "align-items": "flex-start" }',
    aife: '{ "align-items": "flex-end" }',
    aic: '{ "align-items": "center" }',
    ais: '{ "align-items": "stretch" }',
    asfs: '{ "align-self": "flex-start" }',
    asfe: '{ "align-self": "flex-end" }',
    asc: '{ "align-self": "center" }'
  }
}

const Flex = () => new Component('flex', data, [])

export default Flex
