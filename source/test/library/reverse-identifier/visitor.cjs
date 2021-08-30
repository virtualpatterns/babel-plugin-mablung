import { Visitor as BaseVisitor } from '../../../library/visitor.cjs'

class Visitor extends BaseVisitor {

  constructor(babel) {
    super(babel)
  }

  get nodeType() {
    return [ 'Identifier' ]
  }

  onIdentifierNode(path/*, state */) {
    path.node.name = path.node.name.split('').reverse().join('')
  }

}

export { Visitor }
