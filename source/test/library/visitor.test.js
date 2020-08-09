import { createRequire as CreateRequire } from 'module'
import Babel from '@babel/core'
import Test from 'ava'

const Require = CreateRequire(import.meta.url)

Test('plugins: [ reverse-identifier ]', async (test) => {

  let codeIn = 'console.log(\'Hello, world!\')'
  let option = { 
    'plugins': [ 
      Require.resolve('./reverse-identifier/index.cjs')
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = 'elosnoc.gol(\'Hello, world!\');'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})
