import { VisitorError } from '@virtualpatterns/babel-plugin-mablung'
import Test from 'ava'

Test('VisitorError', (test) => {
  test.throws(() => { throw new VisitorError() }, { 'instanceOf': VisitorError })
})
