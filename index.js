const _ = require('lodash')
const fs = require('fs-extra')
const { getFiles, formatBytes } = require('./utils')
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
  constructor (_colors, _verbose) {
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
      shadow: Shadow,
      text: Text,
      width: Width,
      zindex: ZIndex
    }
    this.verbose = _verbose
  }

  build () {
    if (!_.isEmpty(this.components)) {
      _.forEach(this.components, (component, name) => {
        component.build()
        if (this.verbose) console.log(`The ${name} component has been built`)
      })
    }
  }

  async minify (_path) {
    let regex, files, search, classes, css, size

    if (!_.isEmpty(this.components)) {
      regex = ''
      _.forEach(this.components, (component, name) => {
        regex += component.getRegex()
      })
    }

    regex = new RegExp(`(sm-|md-|lg-|xl-|)(${regex})`, 'gm')
    files = await getFiles(_path)
    search = []

    _.forEach(files, (_file) => {
      let file

      file = fs.readFileSync(_file, 'utf8')

      search = [...search, ...file.match(regex)]
    })

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
    }

    if (!fs.existsSync('./dist')) fs.mkdirSync('./dist')
    fs.writeFileSync('./dist/solid.min.css', css)

    size = formatBytes(fs.statSync('./dist/solid.min.css').size)

    if (this.verbose) console.log(`The minified css file weighs ${size}`)
  }
}

module.exports = Solid
