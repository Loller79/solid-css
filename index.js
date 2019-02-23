const Border = require('./components/border')
const Color = require('./components/color')
const Container = require('./components/container')
const Display = require('./components/display')
const Flex = require('./components/flex')
const Height = require('./components/height')
const Margin = require('./components/margin')
const Opacity = require('./components/opacity')
const Overflow = require('./components/overflow')
const Padding = require('./components/padding')
const Placeholder = require('./components/placeholder')
const Position = require('./components/position')
const Shadow = require('./components/shadow')
const Text = require('./components/text')
const Width = require('./components/width')
const ZIndex = require('./components/zindex')

class Solid {
  constructor (_colors) {
    this.border = Border(_colors)
    this.color = Color(_colors)
    this.container = Container
    this.display = Display
    this.flex = Flex
    this.height = Height
    this.margin = Margin
    this.opacity = Opacity
    this.overflow = Overflow
    this.padding = Padding
    this.placeholder = Placeholder(_colors)
    this.position = Position
    this.shadow = Shadow
    this.text = Text
    this.width = Width
    this.zindex = ZIndex
  }

  build () {
    this.border.build()
    this.color.build()
    this.container.build()
    this.display.build()
    this.flex.build()
    this.height.build()
    this.margin.build()
    this.opacity.build()
    this.overflow.build()
    this.padding.build()
    this.placeholder.build()
    this.position.build()
    this.shadow.build()
    this.text.build()
    this.width.build()
    this.zindex.build()
  }
}

module.exports = Solid
