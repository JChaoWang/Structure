(() => {
  // 函数类型
  // 定义人的接口
interface ISearchFunc{
  // 定义一个调用签名
  (source: string, subString:string):boolean
}
const searchString: ISearchFunc = function(source: string, subString:string):boolean {
  return source.search(subString) > -1
}
console.log(searchString('哈哈哈，我又变帅了', '帅'))
})()
