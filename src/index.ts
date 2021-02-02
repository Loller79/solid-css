import fs, { Dirent, FSWatcher } from 'fs'
import { filter, uniq } from 'lodash'
import watch from 'node-watch'
import { Color, Compiled, Style } from './definitions/types'
import Compile from './modules/compile'
import Convert from './modules/convert'
import Sort from './modules/sort'
import Backface from './styles/backface'
import Border from './styles/border'
import ColorStyle from './styles/color'
import Container from './styles/container'
import Cursor from './styles/cursor'
import Display from './styles/display'
import Flex from './styles/flex'
import Height from './styles/height'
import Margin from './styles/margin'
import Opacity from './styles/opacity'
import Overflow from './styles/overflow'
import Padding from './styles/padding'
import Position from './styles/position'
import Text from './styles/text'
import Width from './styles/width'
import WillChange from './styles/will.change'
import ZIndex from './styles/z.index'

class CSS {
  readonly colors: Color[]
  readonly extensions: RegExp
  readonly source: Style<any>

  style: Style<any>
  regex: RegExp

  constructor(colors: Color[]) {
    this.colors = colors
    this.extensions = new RegExp(/\.(html|jsx?|tsx?)$/)
    this.regex = new RegExp('')
    this.source = {
      ...Backface,
      ...Border,
      ...ColorStyle,
      ...Container,
      ...Cursor,
      ...Display,
      ...Flex,
      ...Height,
      ...Margin,
      ...Opacity,
      ...Overflow,
      ...Padding,
      ...Position,
      ...Text,
      ...Width,
      ...WillChange,
      ...ZIndex
    }
    this.style = {}
  }

  compile(): void {
    let compiled: Compiled

    compiled = Compile.all(this.source, this.colors)

    this.regex = compiled.regex
    this.style = compiled.style
  }

  extrapolate(path: string, classes: string[] = []): string[] {
    let entries: Dirent[], entry: Dirent, content: string, matches: RegExpMatchArray, match: string

    path = path.replace(/\/$/, '') + '/'
    entries = fs.readdirSync(path, { withFileTypes: true })

    for (let i = 0; i < entries.length; i++) {
      entry = entries[i]

      if (entry.isDirectory()) {
        classes = this.extrapolate(path + entry.name, classes)
        continue
      }
      if (!this.extensions.test(entry.name)) continue

      content = fs.readFileSync(path + entry.name, 'utf8')
      matches = content.match(this.regex) || []

      for (let j = 0; j < matches.length; j++) {
        match = matches[j]
        if (!classes.includes(match)) classes.push(match)
      }
    }

    return classes
  }

  write(path: string, destination: string): void {
    let css: string[], classes: string[], v: string

    css = []
    classes = this.extrapolate(path).sort(Sort.byQuery)

    for (let i = 0; i < classes.length; i++) {
      v = classes[i]

      switch (true) {
        case v.includes('sm-'):
          css.push(`@media (min-width: 568px) { .${v.replace('!', '')} { ${Convert.toCSS(this.style[v.replace(/(sm-|!)/g, '')], v.includes('!'))} } }`)
          break
        case v.includes('md-'):
          css.push(`@media (min-width: 768px) { .${v.replace('!', '')} { ${Convert.toCSS(this.style[v.replace(/(md-|!)/g, '')], v.includes('!'))} } }`)
          break
        case v.includes('lg-'):
          css.push(`@media (min-width: 1024px) { .${v.replace('!', '')} { ${Convert.toCSS(this.style[v.replace(/(lg-|!)/g, '')], v.includes('!'))} } }`)
          break
        case v.includes('xl-'):
          css.push(`@media (min-width: 1280px) { .${v.replace('!', '')} { ${Convert.toCSS(this.style[v.replace(/(xl-|!)/g, '')], v.includes('!'))} } }`)
          break
        default:
          css.push(`.${v.replace('!', '')} { ${Convert.toCSS(this.style[v.replace('!', '')], v.includes('!'))} }`)
          break
      }
    }

    return fs.writeFileSync(destination, css.join('\n'), 'utf8')
  }

  watch(path: string, destination: string): FSWatcher {
    let watcher: FSWatcher

    watcher = watch(path, { filter: this.extensions, recursive: true })
    watcher.on('change', () => this.write(path, destination))

    return watcher
  }

  get duplicates(): string[] {
    return uniq(
      filter(
        [
          ...Object.keys(Backface),
          ...Object.keys(Border),
          ...Object.keys(ColorStyle),
          ...Object.keys(Container),
          ...Object.keys(Cursor),
          ...Object.keys(Display),
          ...Object.keys(Flex),
          ...Object.keys(Height),
          ...Object.keys(Margin),
          ...Object.keys(Opacity),
          ...Object.keys(Overflow),
          ...Object.keys(Padding),
          ...Object.keys(Position),
          ...Object.keys(Text),
          ...Object.keys(Width),
          ...Object.keys(WillChange),
          ...Object.keys(ZIndex)
        ],
        (v, i, a: any) => a.indexOf(v) !== i
      )
    )
  }
}

export default CSS
