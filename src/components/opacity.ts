import Component from '../libs/component'

const data = {
  int: {
    o: '{ "opacity": $OPACITY }'
  }
}

const Opacity = () => new Component('opacity', data, [])

export default Opacity
