'use strict'

module.exports = (x) => {
  const key = String(x).replace(/^\//, '').replace(/\//g, '__').replace(/\.html$/, '')
  return `https://ss.dt.in.th/api/screenshots/docs-${key}.png`
}
