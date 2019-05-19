interface Regex {
  [index: string]: RegExp
}

const regex: Regex = {
  int: new RegExp(/\$INT/, 'gm'),
  color: new RegExp(/\$COLOR/, 'gm'),
  media: new RegExp(/(sm-|md-|lg-|xl-)/, 'gm'),
  type: new RegExp(/\.(html|js|jsx|ts)$/, 'gm'),
  width: new RegExp(/\$INTvw/, 'gm'),
  height: new RegExp(/\$INTvh/, 'gm'),
  lineHeight: new RegExp(/\$LINEHEIGHT/, 'gm')
}

export default regex
