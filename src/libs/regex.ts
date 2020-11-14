const Regex = {
  int: /\$INT/gm,
  color: /\$COLOR/gm,
  media: /(sm-|md-|lg-|xl-)/gm,
  type: /\.(html|js|jsx|ts|tsx|vue)$/gm,
  width: /\$INTvw/gm,
  height: /\$INTvh/gm,
  lineHeight: /\$LINEHEIGHT/gm,
  percent: /\$INT%/gm,
  zIndex: /\$INTzi/gm,
  opacity: /\$INTop/gm,
  query: (r: string) => new RegExp(`(sm-|md-|lg-|xl-|)(${r})`, 'gm')
}

export default Regex
