const Component = require('../libs/component')

const data = {
  normal: {
    'ofa': '{ "overflow": "auto" }',
    'ofh': '{ "overflow": "hidden" }',
    'ofs': '{ "overflow": "scroll" }',
    'ofv': '{ "overflow": "visible" }',
    'ofxa': '{ "overflow-x": "auto" }',
    'ofxh': '{ "overflow-x": "hidden" }',
    'ofxs': '{ "overflow-x": "scroll" }',
    'ofxv': '{ "overflow-x": "visible" }',
    'ofya': '{ "overflow-y": "auto" }',
    'ofyh': '{ "overflow-y": "hidden" }',
    'ofys': '{ "overflow-y": "scroll" }',
    'ofyv': '{ "overflow-y": "visible" }'
  }
}

const Overflow = new Component('overflow', data)

module.exports = Overflow
