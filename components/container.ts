import Component from '../libs/component'
import { ScaledSize } from 'react-native'

const data = {
  normal: {
    'cna': '{ "width": "auto", "height": "auto" }'
  },
  int: {
    'cn': '{ "width": $INT, "height": $INT }',
    'mncn': '{ "min-width": $INT, "min-height": $INT }',
    'mxcn': '{ "max-width": $INT, "max-height": $INT }',
    'cnp': '{ "width": "$INT%", "height": "$INT%" }',
    'mncnp': '{ "min-width": "$INT%", "min-height": "$INT%" }',
    'mxcnp': '{ "max-width": "$INT%", "max-height": "$INT%" }',
    'cnd': '{ "width": $INTvw, "height": $INTvh }',
    'mncnd': '{ "min-width": $INTvw, "min-height": $INTvh }',
    'mxcnd': '{ "max-width": $INTvw, "max-height": $INTvh }'
  }
}

const Container = (screen: ScaledSize) => new Component('container', data, [], 200, screen)

export default Container
