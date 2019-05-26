import Component from '../libs/component'

export interface NativeColor {
  name: string,
  hex: string
}

export interface Class {
  [index: string]: string
}

export interface Query {
  name: string,
  width: number
}

export interface Classes {
  normal?: Class,
  int?: Class,
  color?: Class,
  special?: Class
}

export interface Components {
  [index: string]: Component
}

export interface Minify {
  css: string,
  size: {
    final: string,
    spared: string
  },
  output: string
}
