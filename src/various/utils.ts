import fs from 'fs-extra'
import { forEach } from 'lodash'
import { resolve } from 'path'
import regex from '../libs/regex'

function getFiles(path: string): string[] {
  let items: string[], files: string[]

  items = fs.readdirSync(path)
  files = []

  items.forEach((item) => {
    if (fs.statSync(resolve(path, item)).isDirectory()) {
      files = files.concat(getFiles(resolve(path, item)))
    } else {
      files.push(resolve(path, item))
    }
  })

  return files
}

export function readFiles(path: string): string[] {
  let files: string | string[], readable: string[]

  files = getFiles(path)
  readable = []

  forEach(files, (file: string) => {
    if (file.match(regex.type)) {
      file = fs.readFileSync(file, 'utf8')
      readable.push(file)
    }
  })

  return readable
}

export function orderByQuery(a: string, b: string): number {
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
}

export function formatBytes(a: number, b?: number) {
  if (a === 0) return '0 Bytes'
  let c = 1024
  let d = b || 2
  let e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let f = Math.floor(Math.log(a) / Math.log(c))
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
}
