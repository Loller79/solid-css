import fs from 'fs-extra'
import { get, has, reduce } from 'lodash'
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
import WillChange from './components/willChange'
import ZIndex from './components/zindex'
import Component from './libs/component'
import Css from './libs/css'
import regex from './libs/regex'
import { Class, Components, Minify, NativeColor } from './various/interfaces'
import { formatBytes, orderByQuery, readFiles } from './various/utils'

class Solid extends Css {
  private readonly components: Components

  private classes: Class
  private regex: string[]

  /**
   * Create a new Solid Instance
   */
  constructor(colors: NativeColor[]) {
    super()
    this.components = {
      border: Border(colors),
      color: Color(colors),
      container: Container(),
      display: Display(),
      flex: Flex(),
      height: Height(),
      margin: Margin(),
      opacity: Opacity(),
      overflow: Overflow(),
      padding: Padding(),
      position: Position(),
      shadow: Shadow(colors),
      text: Text(),
      width: Width(),
      willChange: WillChange(),
      zindex: ZIndex()
    }
    this.classes = {}
    this.regex = []
  }

  /**
   * Minify css based on used classes
   */
  async minify(output: string, ...paths: string[]): Promise<Minify> {
    let build: string, search: string[], classes: Class, css: string, size: { final: string; spared: string }

    build = this.build()
    search = await this.search(paths)
    classes = this.getOrderedClassesFromSearch(search)
    css = this.toCSS(classes, true)
    size = {
      final: formatBytes(Buffer.from(css).length),
      spared: formatBytes(Buffer.from(build).length - Buffer.from(css).length)
    }

    fs.outputFileSync(output, css)

    return { css, size, output }
  }

  /**
   * Build the components
   */
  build(): string {
    return reduce(
      this.components,
      (r: string, v: Component) => {
        this.classes = { ...this.classes, ...v.parseAll() }
        this.regex = [...this.regex, ...v.getRegex()]
        return r + v.build()
      },
      ''
    )
  }

  /**
   * Search for class matches of the files inside the path
   */
  async search(paths: string[]): Promise<string[]> {
    return reduce(
      reduce(paths, (r: string[], v: string) => [...r, ...readFiles(v)], []),
      (r: string[], v: string) => [...r, ...(v.match(regex.query(this.regex.join('|'))) || [])],
      []
    )
  }

  /**
   * Get the ordered classes from the search
   */
  getOrderedClassesFromSearch(search: string[]): Class {
    let unordered: Class, ordered: Class

    unordered = reduce(
      search,
      (r: Class, v: string) => {
        if (!has(this.classes, Css.removeQuery(v))) {
          console.warn(`The class ${v} does not exist`)
          return r
        }
        r[v] = get(this.classes, Css.removeQuery(v))
        return r
      },
      {}
    )

    ordered = reduce(
      Object.keys(unordered).sort(orderByQuery),
      (r: Class, k: string) => {
        r[k] = unordered[k]
        return r
      },
      {}
    )

    return ordered
  }
}

export default Solid
