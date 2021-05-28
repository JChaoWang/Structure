(() => {
  // 接口类型
  // TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。
  // 定义人的接口
interface IPerson {
  readonly id: number
  name: string
  age: number
  sex?: string
}
const person1: IPerson = {
  id: 1,
  name: 'tom',
  age: 20,
  // sex: '男'
}
console.log(person1)
})()
