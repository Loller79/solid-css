const fs = require('fs-extra')
const resolve = require('path').resolve
const _ = require('lodash')

async function getFiles (_path) {
  let folders, files, output, readable

  folders = fs.readdirSync(_path)

  files = await Promise.all(folders.map(async (folder) => {
    output = resolve(_path, folder)
    return (fs.statSync(output)).isDirectory() ? getFiles(output) : output
  }))

  files = files.reduce((a, f) => a.concat(f), [])
  readable = []

  _.forEach(files, (file) => {
    readable.push(fs.readFileSync(file, 'utf8'))
  })

  return readable
}

function formatBytes (a, b) { if (a === 0) return '0 Bytes'; var c = 1024; var d = b || 2; var e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']; var f = Math.floor(Math.log(a) / Math.log(c)); return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f] }

module.exports = {
  getFiles: getFiles,
  formatBytes: formatBytes
}
