'use strict'

module.exports = (x) => {
  return `https://ss.dt.in.th/api/screenshots/docs-${String(x).replace(/^\//, '').replace(/\//g, '__').replace(/\.html$/, '')}.png`
}
