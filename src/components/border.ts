import Component from '../libs/component'
import { NativeColor } from '../various/interfaces'

const data = {
  int: {
    br: '{ "border-radius": $INTpx }',
    btr: '{ "border-top-left-radius": $INTpx, "border-top-right-radius": $INTpx }',
    bbr: '{ "border-bottom-left-radius": $INTpx, "border-bottom-right-radius": $INTpx }',
    blr: '{ "border-top-left-radius": $INTpx, "border-bottom-left-radius": $INTpx }',
    brr: '{ "border-top-right-radius": $INTpx, "border-bottom-right-radius": $INTpx }',
    btlr: '{ "border-top-left-radius": $INTpx }',
    btrr: '{ "border-top-right-radius": $INTpx }',
    bblr: '{ "border-bottom-left-radius": $INTpx }',
    bbrr: '{ "border-bottom-right-radius": $INTpx }',
    brp: '{ "border-radius": "$INT%" }',
    btrp: '{ "border-top-left-radius": "$INT%", "border-top-right-radius": "$INT%" }',
    bbrp: '{ "border-bottom-left-radius": "$INT%", "border-bottom-right-radius": "$INT%" }',
    blrp: '{ "border-top-left-radius": "$INT%", "border-bottom-left-radius":"$INT%" }',
    brrp: '{ "border-top-right-radius": "$INT%", "border-bottom-right-radius": "$INT%" }',
    btlrp: '{ "border-top-left-radius": "$INT%" }',
    btrrp: '{ "border-top-right-radius": "$INT%" }',
    bblrp: '{ "border-bottom-left-radius": "$INT%" }',
    bbrrp: '{ "border-bottom-right-radius": "$INT%" }',
    bw: '{ "border-width": $INTpx, "border-style": "solid" }',
    btw: '{ "border-top-width": $INTpx, "border-top-style": "solid" }',
    bbw: '{ "border-bottom-width": $INTpx, "border-bottom-style": "solid" }',
    blw: '{ "border-left-width": $INTpx, "border-left-style": "solid" }',
    brw: '{ "border-right-width": $INTpx, "border-right-style": "solid" }'
  },
  color: {
    'b-': '{ "border-color": "$COLOR" }'
  }
}

const Border = (colors: NativeColor[]) => new Component('border', data, colors)

export default Border
