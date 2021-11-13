import Test from 'ava'

Test.before(async (test) => {
  test.context.index = await import('@virtualpatterns/babel-plugin-mablung')
})

;[
  'CreatePlugin',
  'Visitor',
  'VisitorError'
].forEach((name) => {

  Test(name, async (test) => {
    test.truthy(test.context.index[name])
  })
  
})
