const { CreatePlugin } = require('./library/create-plugin.cjs')
const { Visitor } = require('./library/visitor.cjs')

module.exports = CreatePlugin(Visitor)
