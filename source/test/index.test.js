import { createRequire as CreateRequire } from 'module'
import Babel from '@babel/core'
import Path from 'path'
import Test from 'ava'
import URL from 'url'

const Require = CreateRequire(import.meta.url)
const SourceFilePath = URL.fileURLToPath(import.meta.url).replace('release/', 'source/')
const SourceFolderPath = Path.dirname(SourceFilePath).replace('release/', 'source/')

Test('plugins: [ index.cjs ]', async (test) => {

  let codeIn = 'console.log(\'Hello, world!\')'
  let option = {
    'root': SourceFolderPath,
    'plugins': [
      Require.resolve('../index.cjs')
    ]
  }

  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option)
  let expectedCodeOut = 'console.log(\'Hello, world!\');'

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut)

})
