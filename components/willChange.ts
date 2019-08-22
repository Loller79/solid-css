import Component from '../libs/component'

const data = {
  normal: {
    'wct': '{ "will-change": transform }',
    'wcc': '{ "will-change": color }',
    'wcbc': '{ "will-change": background-color }',
    'wcf': '{ "will-change": filter }',
  }
}

const WillChange = () => new Component('willChange', data, [])

export default WillChange
