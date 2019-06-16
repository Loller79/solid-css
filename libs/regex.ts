interface Regex {
  int: RegExp,
  color: RegExp,
  media: RegExp,
  type: RegExp,
  width: RegExp,
  height: RegExp,
  lineHeight: RegExp,
  percent: RegExp,
  zIndex: RegExp,
  query: Function
}

const regex: Regex = {
  int: new RegExp(/\$INT/, 'gm'),
  color: new RegExp(/\$COLOR/, 'gm'),
  media: new RegExp(/(sm-|md-|lg-|xl-)/, 'gm'),
  type: new RegExp(/\.(html|js|jsx|ts|tsx|vue)$/, 'gm'),
  width: new RegExp(/\$INTvw/, 'gm'),
  height: new RegExp(/\$INTvh/, 'gm'),
  lineHeight: new RegExp(/\$LINEHEIGHT/, 'gm'),
  percent: new RegExp(/\$INT%/, 'gm'),
  zIndex: new RegExp(/\$INTzi/, 'gm'),
  query: (r: string) => new RegExp(`(sm-|md-|lg-|xl-|)(${r})`, 'gm')
}


export default regex
