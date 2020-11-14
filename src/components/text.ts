import Component from '../libs/component'

const data = {
  normal: {
    twl: '{ "font-weight": 300 }',
    twr: '{ "font-weight": 400 }',
    twm: '{ "font-weight": 500 }',
    twsb: '{ "font-weight": 600 }',
    twb: '{ "font-weight": 700 }',
    tal: '{ "text-align": "left" }',
    tac: '{ "text-align": "center" }',
    tar: '{ "text-align": "right" }',
    toe: '{ "text-overflow": "ellipsis", "overflow": "hidden", "white-space": "nowrap", "max-width": "100%" }',
    tdu: '{ "text-decoration": "underline" }'
  },
  int: {
    ts: '{ "font-size": $INTpx, "line-height": $LINE_HEIGHT }'
  }
}

const Text = () => new Component('text', data, [])

export default Text
