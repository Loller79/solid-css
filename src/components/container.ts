import Component from '../libs/component'

const data = {
  normal: {
    cna: '{ "width": "auto", "height": "auto" }'
  },
  int: {
    cn: '{ "width": $INTpx, "height": $INTpx }',
    mncn: '{ "min-width": $INTpx, "min-height": $INTpx }',
    mxcn: '{ "max-width": $INTpx, "max-height": $INTpx }',
    cnp: '{ "width": "$INT%", "height": "$INT%" }',
    mncnp: '{ "min-width": "$INT%", "min-height": "$INT%" }',
    mxcnp: '{ "max-width": "$INT%", "max-height": "$INT%" }',
    cnd: '{ "width": $INTvw, "height": $INTvh }',
    mncnv: '{ "min-width": $INTvw, "min-height": $INTvh }',
    mxcnv: '{ "max-width": $INTvw, "max-height": $INTvh }'
  }
}

const Container = () => new Component('container', data, [])

export default Container
