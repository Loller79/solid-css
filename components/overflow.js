const Component = require('../libs/component')

const data = {
  normal: {
    'ofa': '{ overflow: auto }',
    'ofh': '{ overflow: hidden }',
    'ofs': '{ overflow: scroll }',
    'ofv': '{ overflow: visible }',
    'ofxa': '{ overflow: auto }',
    'ofxh': '{ overflow: hidden }',
    'ofxs': '{ overflow: scroll }',
    'ofxv': '{ overflow: visible }',
    'ofya': '{ overflow: auto }',
    'ofyh': '{ overflow: hidden }',
    'ofys': '{ overflow: scroll }',
    'ofyv': '{ overflow: visible }'
  }
}

const Overflow = new Component('overflow', data)

module.exports = Overflow
