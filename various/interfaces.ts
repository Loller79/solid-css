import Component from '../libs/component'

export interface NativeColor {
  name: string,
  hex: string
}

export interface Class {
  [index: string]: string
}

export interface Classes {
  normal?: Class,
  int?: Class,
  color?: Class
}

export interface Components {
  [index: string]: Component
}

export interface Build {
  [index: string]: object
}

