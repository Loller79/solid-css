const _ = require('lodash')
const fs = require('fs-extra')
const { readFiles, formatBytes } = require('./utils')
const regexMedia = require('./libs/regex').media
const mediaQueries = require('./assets/media-queries.json')
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
  constructor (_colors, _out, _custom, _verbose) {
    this.components = {
      border: Border(_colors),
      color: Color(_colors),
      container: Container,
      display: Display,
      flex: Flex,
      height: Height,
      margin: Margin,
      opacity: Opacity,
      overflow: Overflow,
      padding: Padding,
      placeholder: Placeholder(_colors),
      position: Position,
      shadow: Shadow(_colors),
      text: Text,
      width: Width,
      zindex: ZIndex
    }
    this.verbose = _verbose
    this.out = _out || './dist'
    this.custom = _custom && _custom(_colors)
  }

  build () {
    let css

    if (!_.isEmpty(this.components)) {
      css = ''

      _.forEach(this.components, (component, name) => {
        component.build(this.out)
        css += `@import url('./${name}.css');\n`
        if (this.verbose) console.log(`The ${name} component has been built`)
      })

      fs.writeFileSync(`${this.out}/solid.css`, css)
    }
  }

  async minify (_path, _custom) {
    let regex, files, search, match, classes, css, size

    if (!_.isEmpty(this.components)) {
      regex = []
      _.forEach(this.components, (component, name) => {
        regex = [...regex, ...component.getRegex()]
      })
      regex = regex.join('|')
    }

    regex = new RegExp(`(sm-|md-|lg-|xl-|)(${regex})`, 'gm')
    files = await readFiles(_path)
    search = []

    _.forEach(files, (file) => {
      match = file.match(regex) || []
      search = [...search, ...match]
    })

    search = _.uniq(search)

    if (search) {
      css = ''
      _.forEach(this.components, (component, name) => {
        classes = component.getClasses(search)
        _.forEach(classes, (property, name) => {
          let media, prefix, result

          media = name.match(regexMedia) || ''
          prefix = mediaQueries[media]

          result = `${prefix}.${name} ${property} ${media ? '}' : ''}`

          if (media) css += result; else css = result + css
        })
      })
      if (this.custom) {
        classes = this.custom.parse()
        _.forEach(classes, (property, name) => {
          css = `.${name} ${property}` + css
        })
      }
    }

    if (!fs.existsSync(this.out)) fs.mkdirSync(this.out)
    fs.writeFileSync(`${this.out}/solid.min.css`, css)

    size = formatBytes(fs.statSync(`${this.out}/solid.min.css`).size)

    if (this.verbose) console.log(`The minified css file weighs ${size}`)
  }
}

module.exports = Solid
