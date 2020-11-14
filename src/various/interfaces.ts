import Component from '../libs/component'

export type NativeColor = {
  name: string
  hex: string
}

export type Class = {
  [index: string]: string
}

export type Query = {
  name: string
  width: number
}

export type Classes = {
  normal?: Class
  int?: Class
  color?: Class
  special?: Class
}

export type Components = {
  [index: string]: Component
}

export type Minify = {
  css: string
  size: {
    final: string
    spared: string
  }
  output: string
}
