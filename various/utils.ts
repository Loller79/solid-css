import fs from 'fs-extra'
import { camelCase, forEach, isObject, mapKeys } from 'lodash'
import { resolve } from 'path'
import regex from '../libs/regex'

async function getFiles (path: string): Promise<string | Array<string>> {
  let folders: Array<string>, files: any, output

  folders = fs.readdirSync(path)

  files = await Promise.all(folders.map(async (folder: string) => {
    output = resolve(path, folder)
    return ( fs.statSync(output) ).isDirectory() ? getFiles(output) : output
  }))

  files = files.reduce((a: string, f: string) => a.concat(f), [])

  return files
}

export async function readFiles (path: string) {
  let files: string | Array<string>, readable: Array<string>

  files = await getFiles(path)
  readable = []

  forEach(files, (file: string) => {
    if (file.match(regex.type)) {
      file = fs.readFileSync(file, 'utf8')
      readable.push(file)
    }
  })

  return readable
}

export function toCamelCase (k: string, v: string | object) {
  return isObject(v) ? mapKeys(v, (_v: string, _k: string) => camelCase(_k)) : v
}

export function orderByQuery (a: string, b: string): number {
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

export function formatBytes (a: number, b?: number) { if (a === 0) return '0 Bytes'; let c = 1024; let d = b || 2; let e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']; let f = Math.floor(Math.log(a) / Math.log(c)); return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f] }
