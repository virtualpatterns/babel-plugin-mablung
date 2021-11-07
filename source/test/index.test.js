import { createRequire as CreateRequire } from 'module'
import Babel from '@babel/core'
import Path from 'path'
import Test from 'ava'
import URL from 'url'

const Require = CreateRequire(import.meta.url)
const SourceFilePath = URL.fileURLToPath(import.meta.url).replace('release/', 'source/')
const SourceFolderPath = Path.dirname(SourceFilePath).replace('release/', 'source/')

Test('plugins: [ @virtualpatterns/babel-plugin-mablung ]', async (test) => {

  let codeIn = 'console.log(\'Hello, world!\')'
  let option = {
    'root': SourceFolderPath,
    'plugins': [
      Require.resolve('@virtualpatterns/babel-plugin-mablung')
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = 'console.log(\'Hello, world!\');'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})

Test('@virtualpatterns/babel-plugin-mablung/index', async (test) => {

  let index = await import('@virtualpatterns/babel-plugin-mablung/index')

  test.truthy(index.CreatePlugin)
  test.truthy(index.Visitor)
  test.truthy(index.VisitorError)

})

// Test('@virtualpatterns/babel-plugin-mablung/create-plugin', async (test) => {
//   test.truthy((await import(test.title)).CreatePlugin)
// })

// Test('@virtualpatterns/babel-plugin-mablung/visitor', async (test) => {
//   test.truthy((await import(test.title)).Visitor)
// })

// Test('@virtualpatterns/babel-plugin-mablung/visitor-error', async (test) => {
//   test.truthy((await import(test.title)).VisitorError)
// })
