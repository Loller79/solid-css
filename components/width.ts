import Component from '../libs/component'
import { ScaledSize } from 'react-native'

const data = {
  normal: {
    'wa': '{ "width": "auto" }'
  },
  int: {
    'w': '{ "width": $INT }',
    'mnw': '{ "min-width": $INT }',
    'mxw': '{ "max-width": $INT }',
    'wp': '{ "width": "$INT%" }',
    'mnwp': '{ "min-width": "$INT%" }',
    'mxwp': '{ "max-width": "$INT%" }',
    'wd': '{ "width": $INTvw }',
    'mnwd': '{ "min-width": $INTvw }',
    'mxwd': '{ "max-width": $INTvw }'
  }
}

const Width = (screen: ScaledSize) => new Component('width', data, [], 200, screen)

export default Width
