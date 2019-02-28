const fs = require('fs-extra')
const _ = require('lodash')
const regex = require('./regex')
const mediaQueries = require('../assets/media-queries.json')

class Component {
  constructor (_name, _classes, _colors, _length) {
    this.name = _name
    this.colors = _colors
    this.classes = _classes
    this.length = _length
  }

  getRegex () {
    let classes; let regex = ''

    classes = this.parse()
    classes = _.mapKeys(classes, (value, key) => `\\b${key}\\b`)
    regex = Object.keys(classes).join('|')

    return regex
  }

  getClasses (_selector) {
    let classes, filtered, ordered

    classes = this.parse()
    filtered = {}

    _.forEach(_selector, (_name) => {
      let name

      name = _name.replace(regex.media, '')

      if (_.has(classes, name)) filtered[_name] = classes[name]
    })

    ordered = {}

    Object.keys(filtered).sort((a, b) => {
      let priority = { a: -1, b: -1 }

      if (a.includes('sm-')) priority.a = 0
      if (a.includes('md-')) priority.a = 1
      if (a.includes('lg-')) priority.a = 2
      if (a.includes('xl-')) priority.a = 3

      if (b.includes('sm-')) priority.b = 0
      if (b.includes('md-')) priority.b = 1
      if (b.includes('lg-')) priority.b = 2
      if (b.includes('xl-')) priority.b = 3

      return priority.a - priority.b
    }).forEach(key => {
      ordered[key] = filtered[key]
    })

    return ordered
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
        for (let i = 0; i <= (100 || this.length); i++) {
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

    return { ...normal, ...int, ...color, ...special }
  }

  toCss (_classes) {
    let css = ''

    _.forEach(mediaQueries, (prefix, media) => {
      _.forEach(_classes, (property, name) => {
        css += `${prefix}.${media}${name} ${property} ${prefix && media ? '}' : ''}`
      })
    })

    return css
  }

  write (_css, _out) {
    if (!fs.existsSync(_out)) fs.mkdirSync(_out)
    fs.writeFileSync(`${_out}/${this.name}.css`, _css)
  }

  build (_out) {
    let classes, css

    classes = this.parse()
    css = this.toCss(classes)

    this.write(css, _out)
  }
}

module.exports = Component
