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

  parseNormal (_classes) {
    let classes = {}

    if (_.has(this.classes, 'normal')) {
      classes = this.classes.normal
    }

    return classes
  }

  parseInt (_classes, _override) {
    let classes = {}

    if (_.has(_classes, 'int')) {
      _.forEach(_classes.int, (_property, _name) => {
        for (let i = 0; i <= 100 || this.length; i++) {
          let name, property

          name = _override ? _name.replace(regex.int, i) : (_name + i)
          property = _property.replace(regex.int, i)

          classes[name] = property
        }
      })
    }

    return classes
  }

  parseColor (_classes, _override) {
    let classes = {}

    if (_.has(_classes, 'color')) {
      _.forEach(_classes.color, (_property, _name) => {
        this.colors.forEach((color) => {
          let name, property

          name = _override ? _name.replace(regex.color, color) : (_name + color)
          property = _property.replace(regex.color, color)

          classes[name] = property
        })
      })
    }

    return classes
  }

  parseSpecial (_classes) {
    let inject = {}; let int = {}; let color = {}

    if (_.has(_classes, 'special')) {
      _.forEach(_classes.special, (_property, _name) => {
        if (_name.includes('$INT')) {
          _.set(inject, `int.${_name}`, _property)

          int = { ...int, ...this.parseInt(inject, true) }
        }
        if (_name.includes('$COLOR')) {
          _.set(inject, `color.${_name}`, _property)

          color = { ...int, ...this.parseColor(inject, true) }
        }

        inject = {}
      })
    }

    return { ...int, ...color }
  }

  parse () {
    let normal, int, color, special

    normal = this.parseNormal(this.classes)
    int = this.parseInt(this.classes)
    color = this.parseColor(this.classes)
    special = this.parseSpecial(this.classes)

    this.classes = { ...normal, ...int, ...color, ...special }
  }

  toCss () {
    let css = ''

    _.forEach(mediaQueries, (prefix, media) => {
      _.forEach(this.classes, (property, name) => {
        css += `${prefix}.${media}${name} ${property} ${prefix && media ? '}' : ''}`
      })
    })

    this.css = css
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
