// import Test from 'ava'

// Test.before(async (test) => {
//   test.context.index = await import('../index.cjs')
// })

// ;[
//   'default'
// ].forEach((name) => {

//   Test(name, async (test) => {
//     test.truthy(test.context.index[name])
//   })
  
// })

import { createRequire as CreateRequire } from 'module'
import Babel from '@babel/core'
import Test from 'ava'

const Require = CreateRequire(import.meta.url)

Test('plugins: [ ]', async (test) => {

  let codeIn = 'console.log(\'Hello, world!\')'
  let option = {
    'plugins': [
      Require.resolve('../index.cjs')
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = 'console.log(\'Hello, world!\');'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})
