const fs = require('fs-extra')
const resolve = require('path').resolve
const { forEach, mapKeys, camelCase, isObject } = require('lodash')
const regexType = require('./libs/regex').type

async function getFiles (_path) {
  let folders, files, output

  folders = fs.readdirSync(_path)

  files = await Promise.all(folders.map(async (folder) => {
    output = resolve(_path, folder)
    return (fs.statSync(output)).isDirectory() ? getFiles(output) : output
  }))

  files = files.reduce((a, f) => a.concat(f), [])

  return files
}

async function readFiles (_path) {
  let files, readable

  files = await getFiles(_path)
  readable = []

  forEach(files, (_file) => {
    let supported, file

    supported = _file.match(regexType)

    if (supported) {
      file = fs.readFileSync(_file, 'utf8')
      readable.push(file)
    }
  })

  return readable
}

function formatBytes (a, b) { if (a === 0) return '0 Bytes'; var c = 1024; var d = b || 2; var e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']; var f = Math.floor(Math.log(a) / Math.log(c)); return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f] }

function toCamelCase (k, v) {
  return isObject(v) ? mapKeys(v, (_v, _k) => camelCase(_k)) : v
}

module.exports = {
  getFiles: getFiles,
  readFiles: readFiles,
  formatBytes: formatBytes,
  toCamelCase
}
