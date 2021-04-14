import { createRequire as CreateRequire } from 'module';
import Babel from '@babel/core';
import Test from 'ava';

const Require = CreateRequire(import.meta.url);

Test('plugins: [ reverse-identifier ]', async test => {

  let codeIn = 'console.log(\'Hello, world!\')';
  let option = {
    'plugins': [
    Require.resolve('./reverse-identifier/index.cjs')] };



  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option);
  let expectedCodeOut = 'elosnoc.gol(\'Hello, world!\');';

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut);

});

Test('plugins: [ reverse-identifier-on-enter ]', async test => {

  let codeIn = 'console.log(\'Hello, world!\')';
  let option = {
    'plugins': [
    Require.resolve('./reverse-identifier-on-enter/index.cjs')] };



  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option);
  let expectedCodeOut = 'elosnoc.gol(\'Hello, world!\');';

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut);

});

Test('plugins: [ reverse-identifier-on-exit ]', async test => {

  let codeIn = 'console.log(\'Hello, world!\')';
  let option = {
    'plugins': [
    Require.resolve('./reverse-identifier-on-exit/index.cjs')] };



  let { code: actualCodeOut } = await Babel.transformAsync(codeIn, option);
  let expectedCodeOut = 'elosnoc.gol(\'Hello, world!\');';

  // test.log(actualCodeOut)
  test.is(actualCodeOut, expectedCodeOut);

});
//# sourceMappingURL=visitor.test.js.map