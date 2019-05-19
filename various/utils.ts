const { mapKeys, camelCase, isObject } = require('lodash')

export function toCamelCase (k: string, v: string) {
  return isObject(v) ? mapKeys(v, (_v: string, _k: string) => camelCase(_k)) : v
}

