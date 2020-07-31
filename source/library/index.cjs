
import { Plugin } from './plugin.cjs'
import { Visitor } from './visitor.cjs'

export default Plugin.createPlugin(Visitor)

// export default function({ 'types': type }) {
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
