"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visitor = void 0;

var _visitor = require("../../../library/visitor.cjs");

class Visitor extends _visitor.Visitor {
  constructor(babel) {
    super(babel);
  }

  get nodeType() {
    return ['Identifier'];
  }

  onEnterIdentifierNode(path, state) {
    path.node.name = path.node.name.split('').reverse().join('');
  }

}

exports.Visitor = Visitor;

//# sourceMappingURL=visitor.cjs.map