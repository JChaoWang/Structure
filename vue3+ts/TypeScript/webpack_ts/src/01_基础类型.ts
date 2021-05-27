// 基础类型
(() => {
  // 布尔类型
  let flag:boolean = true
  console.log(flag)
  let str: string = '1'
  let num: number = 2
  console.log(str + num)
  // 数组类型
  let arr1:number[] = [1,2,3]
  let arr2:Array<number> = [4,5,6]
  // 元组类型
  let arr3:[string, number, string] = ['l',2,'3']
  console.log(arr1, arr2, arr3)
  // 枚举类型
  enum Color {
    red,
    green,
    blue
  }
  let myColor:Color = Color.red
  console.log(myColor)
  // any类型
  let list: any[] = [2,3,'4',true]
  console.log(list)
  // void类型
  function showMsg():void {
    console.log('只要富婆把握住，连夜搬进大别墅')
  }
  console.log(showMsg())
  // object类型
  function getObj(obj:object):object {
    console.log(obj)
    return {
      name: 'wade',
      age: 27
    }
  }
  console.log(getObj({name: '22'}))
})()
