(() => {
  // 类类型
  interface IFly{
    fly()
  }
  class Person implements IFly{
    fly(){
      console.log('4444')
    }
  }
  const person = new Person()
  person.fly()
})()
