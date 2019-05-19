import Border from './components/border'
import Color from './components/color'
import Container from './components/container'
import Display from './components/display'
import Flex from './components/flex'
import Height from './components/height'
import Margin from './components/margin'
import Opacity from './components/opacity'
import Overflow from './components/overflow'
import Padding from './components/padding'
import Position from './components/position'
import Shadow from './components/shadow'
import Text from './components/text'
import Width from './components/width'
import ZIndex from './components/zindex'
import { reduce } from 'lodash'
import { ScaledSize } from 'react-native'
import { Build, Components, NativeColor } from './various/interfaces'
import Component from './libs/component'

class Solid {
  private readonly components: Components

  /**
   * Create a new Solid Instance
   *
   * @param {Array<NativeColor>} colors
   * @param {ScaledSize} screen
   */
  constructor (colors: Array<NativeColor>, screen: ScaledSize) {
    this.components = {
      border: Border(colors),
      color: Color(colors),
      container: Container(screen),
      display: Display,
      flex: Flex,
      height: Height(screen),
      margin: Margin,
      opacity: Opacity,
      overflow: Overflow,
      padding: Padding,
      position: Position,
      shadow: Shadow(colors),
      text: Text,
      width: Width(screen),
      zindex: ZIndex
    }
  }

  /**
   * Build the components
   *
   * @returns {Build}
   */
  build (): Build {
    return reduce(this.components, (r: object, v: Component) => { return {...r, ...v.build()} }, {})
  }
}

export default Solid
