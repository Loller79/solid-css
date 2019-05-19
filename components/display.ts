import Component from '../libs/component'

const data = {
  normal: {
    'df': '{ "display": "flex" }',
    'dn': '{ "display": "none" }',
    'db': '{ "display": "block" }',
    'di': '{ "display": "inline" }',
    'dib': '{ "display": "inline-block" }',
    'pen': '{ "pointer-events": "none" }',
    'pea': '{ "pointer-events": "all" }',
    'cp': '{ "cursor": "pointer" }'
  }
}

const Display = new Component('display', data)

export default Display
