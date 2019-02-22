const Component = require('../libs/component')

const data = {
  normal: {
    'cna': '{ width: auto; height: auto }'
  },
  int: {
    'cn': '{ width: $INTpx; height: $INTpx',
    'mncn': '{ min-width: $INTpx; min-height: $INTpx',
    'mxcn': '{ max-width: $INTpx; max-height: $INTpx',
    'cnp': '{ width: $INT%; height: $INT%',
    'mncnp': '{ min-width: $INT%; min-height: $INT%',
    'mxcnp': '{ max-width: $INT%; max-height: $INT%',
    'cnd': '{ width: calc(var(--vh) * $INT); height: calc(var(--vh) * $INT)',
    'mncnd': '{ min-width: calc(var(--vh) * $INT); min-height: calc(var(--vh) * $INT)',
    'mxcnd': '{ max-width: calc(var(--vh) * $INT); max-height: calc(var(--vh) * $INT)'
  }
}

const Container = new Component('container', data)

module.exports = Container
