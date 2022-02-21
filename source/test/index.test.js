import Test from 'ava'

;[
  'CreatePlugin',
  'Visitor',
  'VisitorError'
].forEach((name) => {

  Test(name, async (test) => {
    test.truthy(await import('@virtualpatterns/babel-plugin-mablung').then((module) => module[name]))
  })
  
})
