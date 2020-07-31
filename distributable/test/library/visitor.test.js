import { createRequire as CreateRequire } from 'module';
import DefaultBabel, * as ModuleBabel from '@babel/core';
import Test from 'ava';

const Babel = DefaultBabel || ModuleBabel;
const Require = CreateRequire(import.meta.url);

Test.beforeEach(test => {

  test.context.codeIn = 'console.log(\'Hello, world!\')';
  test.context.option = {
    'plugins': [
    [
    Require.resolve('../../index.cjs'),
    {}]] };




});

Test('...', async test => {

  let { code: actualCodeOut } = await Babel.transformAsync(test.context.codeIn, test.context.option);
  let expectedCodeOut = `${test.context.codeIn};`;

  test.log(actualCodeOut);
  test.is(actualCodeOut, expectedCodeOut);

});
//# sourceMappingURL=visitor.test.js.map