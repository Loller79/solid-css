const fs = require('fs-extra')
const { has, forEach, set } = require('lodash')
const regex = require('./regex')
const mediaQueries = require('../assets/media-queries.json')

class Component {
  constructor (_name, _classes, _colors, _length) {
    this.name = _name
    this.colors = _colors
    this.classes = _classes
    this.length = _length || 100
  }

  getRegex () {
    let result, push

    result = []
    push = (name) => result.push(`\\b${name}\\b`)

    if (has(this.classes, 'normal')) {
      forEach(this.classes.normal, (_property, _name) => {
        push(_name)
      })
    }
    if (has(this.classes, 'int')) {
      forEach(this.classes.int, (_property, _name) => {
        push(`${_name}\\d+`)
      })
    }
    if (has(this.classes, 'color')) {
      forEach(this.classes.color, (_property, _name) => {
        forEach(this.colors, (_color) => {
          push(`${_name}${_color}`)
        })
      })
    }
    if (has(this.classes, 'special')) {
      forEach(this.classes.special, (_property, _name) => {
        let name

        if (_name.includes('::placeholder')) name = _name.replace('::placeholder', '')
        else name = _name

        if (_name.includes('$INT') && (_name.includes('$COLOR'))) {
          forEach(this.colors, (_color) => {
            push(`${name.replace(regex.int, '\\d+').replace(regex.color, _color)}`)
          })
        } else if (_name.includes('$INT')) {
          push(`${name.replace(regex.int, '\\d+')}`)
        } else if (_name.includes('$COLOR')) {
          forEach(this.colors, (_color) => {
            push(`${name.replace(regex.color, _color)}`)
          })
        }
      })
    }

    return result
  }

  getClasses (_selector) {
    let classes, filtered, ordered

    classes = this.parse()
    filtered = {}

    forEach(_selector, (_name) => {
      let name

      name = _name.replace(regex.media, '')

      if (has(classes, name)) filtered[_name] = classes[name]
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

    if (has(this.classes, 'normal')) {
      classes = this.classes.normal
    }

    return classes
  }

  parseInt (_classes, _override) {
    let classes = {}

    if (has(_classes, 'int')) {
      forEach(_classes.int, (_property, _name) => {
        for (let i = 0; i <= this.length; i++) {
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

    if (has(_classes, 'color')) {
      forEach(_classes.color, (_property, _name) => {
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
    let inject = {}; let int = {}; let color = {}; let both = {}

    if (has(_classes, 'special')) {
      forEach(_classes.special, (_property, _name) => {
        if (_name.includes('$INT') && _name.includes('$COLOR')) {
          for (let i = 0; i <= this.length; i++) {
            this.colors.forEach((color) => {
              let name, property

              name = _name.replace(regex.color, color).replace(regex.int, i)
              property = _property.replace(regex.color, color).replace(regex.int, i)

              both[name] = property
            })
          }
        } else if (_name.includes('$INT')) {
          set(inject, `int.${_name}`, _property)

          int = { ...int, ...this.parseInt(inject, true) }
        } else if (_name.includes('$COLOR')) {
          set(inject, `color.${_name}`, _property)

          color = { ...color, ...this.parseColor(inject, true) }
        }

        inject = {}
      })
    }

    return { ...int, ...color, ...both }
  }

  parse (_classes) {
    let classes, normal, int, color, special

    classes = _classes || this.classes

    normal = this.parseNormal(classes)
    int = this.parseInt(classes)
    color = this.parseColor(classes)
    special = this.parseSpecial(classes)

    return { ...normal, ...int, ...color, ...special }
  }

  toCss (_classes) {
    let css = ''

    forEach(mediaQueries, (prefix, media) => {
      forEach(_classes, (property, name) => {
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
