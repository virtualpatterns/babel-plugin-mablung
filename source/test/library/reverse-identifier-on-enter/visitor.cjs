import { Visitor as BaseVisitor } from '@virtualpatterns/babel-plugin-mablung'

class Visitor extends BaseVisitor {

  constructor(babel) {
    super(babel)
  }

  get nodeType() {
    return [ 'Identifier' ]
  }

  onEnterIdentifierNode(path/*, state */) {
    path.node.name = path.node.name.split('').reverse().join('')
  }

}

export { Visitor }
