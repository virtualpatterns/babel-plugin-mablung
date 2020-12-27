import * as ChangeCase from 'change-case'

const { pascalCase: PascalCase } = ChangeCase

class Plugin {

  static createPlugin(visitorClass) {
    // console.log(`Plugin.createPlugin(${visitorClass.name})`)

    return function(babel) {
      // console.log(`Plugin.createPlugin(${visitorClass.name})(babel)`)

      let visitorInstance = new visitorClass(babel)

      let pluginObject = {}

      // pluginObject.manipulateOptions = function(option, parserOption) {
      //   console.dir(parserOption)
      // }

      pluginObject.pre = function(state) { visitorInstance.onBeforeNode(state) }
      pluginObject.post = function(state) { visitorInstance.onAfterNode(state) }

      let nodeType = visitorInstance.nodeType
      let visitorObject = {}

      nodeType.forEach((nodeType) => {

        let onNodeName = `on${PascalCase(nodeType)}Node`

        if (onNodeName in visitorInstance) {
          visitorObject[nodeType] = function(path, state) { visitorInstance[onNodeName](path, state, this) }
        }

        let onEnterNodeName = `onEnter${PascalCase(nodeType)}Node`
        let onExitNodeName = `onExit${PascalCase(nodeType)}Node`

        if (onEnterNodeName in visitorInstance ||
            onExitNodeName in visitorInstance) {

          visitorObject[nodeType] = { 

            enter(path, state) {
              if (onEnterNodeName in visitorInstance) {
                visitorInstance[onEnterNodeName](path, state, this)
              }
            }, 

            exit(path, state) {
              if (onExitNodeName in visitorInstance) {
                visitorInstance[onExitNodeName](path, state, this)
              }
            } 

          }

        }

      })

      pluginObject.visitor = visitorObject

      return pluginObject

    }

  }

}

export { Plugin }
