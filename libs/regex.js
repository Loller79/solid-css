module.exports = {
  int: new RegExp(/\$INT/, 'gm'),
  color: new RegExp(/\$COLOR/, 'gm'),
  media: new RegExp(/(sm-|md-|lg-|xl-)/, 'gm'),
  type: new RegExp(/\.(html|js|jsx|ts)$/, 'gm')
}
