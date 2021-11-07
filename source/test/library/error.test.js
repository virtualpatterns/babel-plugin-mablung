import { VisitorError } from '@virtualpatterns/babel-plugin-mablung/index'
import Test from 'ava'

Test('VisitorError', (test) => {
  test.throws(() => { throw new VisitorError() }, { 'instanceOf': VisitorError })
})
