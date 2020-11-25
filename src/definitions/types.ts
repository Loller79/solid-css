export type Style<T> = { [key: string]: T }

export type Color = {
  hex: string
  name: string
}

export type Compiled = {
  regex: RegExp
  style: Style<any>
}
