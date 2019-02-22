const fs = require('fs-extra')
const _ = require('lodash')
const regex = require('./regex')
const mediaQueries = require('../assets/media-queries.json')

class Component {
  constructor (_name, _classes, _colors) {
    this.name = _name
    this.colors = _colors
    this.classes = _classes
  }

  parse () {
    let classes = {}

    if (_.has(this.classes, 'normal')) {
      classes = this.classes.normal
    }

    if (_.has(this.classes, 'int')) {
      _.forEach(this.classes.int, (_property, _name) => {
        for (let i = 0; i <= 100; i++) {
          let name, property

          name = _name + i
          property = _property.replace(regex.int, i)

          classes[name] = property
        }
      })
    }

    if (_.has(this.classes, 'color')) {
      _.forEach(this.classes.color, (_property, _name) => {
        this.colors.forEach((color) => {
          let name, property

          name = _name + color
          property = _property.replace(regex.color, color)

          classes[name] = property
        })
      })
    }

    this.classes = classes
  }

  toCss () {
    let css = ''

    _.forEach(mediaQueries, (prefix, media) => {
      _.forEach(this.classes, (property, name) => {
        css += `${prefix}.${media}${name} ${property} ${prefix && media ? '}' : ''}`
      })
    })

    this.css = css.replace(/\s/gm, '')
  }

  write () {
    if (!fs.existsSync('./dist')) fs.mkdirSync('./dist')
    fs.writeFileSync(`./dist/${this.name}.css`, this.css)
  }

  build () {
    this.parse()
    this.toCss()
    this.write()
  }
}

module.exports = Component
