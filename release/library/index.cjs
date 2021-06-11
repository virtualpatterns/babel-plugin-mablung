"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _plugin = require("./plugin.cjs");

var _visitor = require("./visitor.cjs");

var _default = _plugin.Plugin.createPlugin(_visitor.Visitor); // export default function({ 'types': type }) {
//   return {
//     visitor: {
//       Identifier(path) {
//         const name = path.node.name
//         // reverse the name: JavaScript -> tpircSavaJ
//         path.node.name = name
//           .split('')
//           .reverse()
//           .join('')
//       }
//     }
//   }
// }


exports.default = _default;

//# sourceMappingURL=index.cjs.map