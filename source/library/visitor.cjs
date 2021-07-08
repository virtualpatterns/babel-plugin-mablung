class Visitor {

  constructor(babel) {
    this._babel = babel
  }

  /* c8 ignore next 3 */
  get nodeType() {
    return [ /* 'Identifier' */ ]
  }
  
  onBeforeNode( /* state */ ) {}

  // onIdentifierNode( /* path, state, context */ ) {
  //   console.log('Visitor.onIdentifierNode(path, state, context)')
  // }
  
  onAfterNode( /* state */ ) {}

}

export { Visitor }