// 1. parseInt 遇上 map
console.log(['1', '2', '3'].map(parseInt));
// [1, NaN, NaN]
// 因为parseInt函数只需两个参数parseInt(value, radix),而map的回调函数需要三个参数callback(currentValue, index, array)

// 2. 神奇的null
console.log([typeof null, null instanceof Object]);
// ["object", false]

// 3. 愤怒的reduce
// console.log([[3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)]);
// an error

// 4. 该死的优先级
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
// 实际上输出 "Something"，因为 + 的优先级比条件运算符 condition ? val1 : val2 的优先级高。

// 5. 神鬼莫测之变量提升
var name = 'World!';
(function () {
  if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye ' + name);
  } else {
    console.log('Hello ' + name);
  }
})();
// Goodbye Jack

// 6. 死循环陷阱
var END = Math.pow(2, 4);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
  count++;
}
console.log(count);
// 在JavaScript中，2^53 是最大的值，没有比这更大的值了。所以 2^53 + 1 == 2^53，所以这个循环无法终止。

// 7. 过滤器魔法
var ary = [0, 1, 2];
ary[10] = 10;
ary.filter(function (x) {
  return x === undefined;
});
// callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。

// 8. 字符串陷阱
function showCase(value) {
  switch (value) {
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Do not know!');
  }
}
showCase(new String('A'));
// 并且 new String("A") 返回的是一个对象，而 String("A") 则是直接返回字符串 "A"。

// 9. 并非都是奇偶
function isOdd(num) {
  return num % 2 == 1;
}
function isEven(num) {
  return num % 2 == 0;
}
function isSane(num) {
  return isEven(num) || isOdd(num);
}
var values = [7, 4, '13', -9, Infinity];
values.map(isSane);
// [true, true, true, false, false]

// 10. 一言难尽的强制转换
var a = [0];
if ([0]) {
  console.log(a == true);
} else {
  console.log('wut');
}
// false
