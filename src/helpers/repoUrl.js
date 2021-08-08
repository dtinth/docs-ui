'use strict'

module.exports = (page) => {
  const x = page && (page.editUrl || page.fileUrl)
  const m = x && x.match(/^https?:\/\/[^/]+\/[^/]+\/[^/]+/i)
  return m ? m[0] : 'https://github.com/dtinth/docs'
}
