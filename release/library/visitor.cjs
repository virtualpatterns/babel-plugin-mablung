"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visitor = void 0;

class Visitor {
  constructor(babel) {
    this._babel = babel;
  }

  get nodeType() {
    return [
      /* 'Identifier' */
    ];
  }

  onBeforeNode()
  /* state */
  {} // onIdentifierNode( /* path, state, context */ ) {
  //   console.log('Visitor.onIdentifierNode(path, state, context)')
  // }


  onAfterNode()
  /* state */
  {}

}

exports.Visitor = Visitor;

//# sourceMappingURL=visitor.cjs.map