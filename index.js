const Border = require('./components/border')
const Color = require('./components/color')

class Solid {
 constructor (_colors) {
  this.border = Border(_colors)
  this.color = Color(_colors)
 }

 build () {
  this.border.build()
  this.color.build()
 }
}