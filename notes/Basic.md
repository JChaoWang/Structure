# HTML、CSS、JavaScript

## HTML

### 浏览器页面有哪三层构成？分别是什么？作用是什么？

- 构成：结构层、表示层、行为层
- 分别是：HTML、CSS、JavaScript
- 作用：HTML实现页面结构、CSS完成页面的表现与风格、JavaScript实现客户端的一些功能和业务

### HTML5的优点与缺点？

#### 优点

- 网络标准统一，HTML5本身是由W3C推荐的
- 多设备，跨平台
- 即时更新
- 提高可用性和改进用户的友好体验

#### 缺点

- 安全：像之前Firefox4的web socket和透明代理的实现存在严重的安全问题，同时web storage，web socket这样的功能很容易被黑客利用，来盗取用户的信息和资料。
- 完善性：许多特性各浏览器的支持程度也不一样。
- 技术门槛：HTML5简化开发者工作的同时代表了有许多新的属性和API需要开发者学习，像web worker，web socket，web storage等新特性，后台甚至浏览器原理的知识，机遇的同时也是巨大的挑战
- 性能：某些平台上的引擎问题导致HTML5性能低下。
- 浏览器兼容性：最大缺点，IE9以下浏览器几乎全军覆没。

### HTML5有哪些新特性、移除了哪些元素？

#### 新增

- HTML5现在已经不是SGML的子集，主要是关于图像、位置、存储、多任务等功能的增加
- 拖拽释放(Drag and drop) API
- 语义化更好的内容标签（header,nav,footer,aside,article,section）
- 音频、视频API(audio,video)
- 画布(Canvas) API
- 地理(Geolocation) API
- 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失
- sessionStorage 的数据在页面会话结束时会被清除
- 表单控件，calendar、date、time、email、url、search
- 新的技术webworker, websocket等

#### 移除

- 纯表现的元素：basefont，big，center, s，strike，tt，u
- 对可用性产生负面影响的元素：frame，frameset，noframes

### iframe框架有那些优缺点

#### 优点

- iframe能够原封不动的把嵌入的网页展现出来
- 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷
- 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用
- 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决

#### 缺点

- iframe会阻塞主页面的onload事件
- iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
- iframe框架结构很迷惑，如果嵌套多个iframe页面的货出现多个滚动条，用户体验差；
- 代码复杂，不容易被搜索引擎搜索到，所以iframe不利于搜索引擎优化，很多搜索引擎爬虫还不能很好的处理iframe的内容；
- 很多移动设备无法完全显示框架，设备兼容性差；
- iframe框架页面会增加服务器的http请求，对于大型网站是不可取的

### 如何实现浏览器内多个标签页之间的通信?

- 调用localStorage

> 在一个标签页里面使用 localStorage.setItem(key,value)添加（修改、删除）内容；
在另一个标签页里面监听 storage 事件。即可得到 localstorge 存储的值，实现不同标签页之间的通信。

- 调用cookie+setInterval()

> 将要传递的信息存储在cookie中，每隔一定时间读取cookie信息，即可随时获取要传递的信息。

## JavaScript

### 异步加载js的方法

- Script Dom Element
- onload时的异步加载
- $(document).ready()
- script标签的async="async"属性
- script标签的defer="defer"属性

### js的防抖与节流

#### 防抖

```
debounce(fn,wait) {
  let timeout = null;
  return function() {
    if(timeout !== null) clearTimeout(timeout)
    timeout = setTimeout(fn,wait);
  }
}
```

#### 节流

```
throttle(fn, delay) {
  var prev = Date.now()
  return function() {
    var now = Date.now()
    if (now - prev > delay) {
      fn()
      prev = Date.now()
    }
  }
}
```

### 说一下闭包

- 当嵌套的内部函数引用了其外部函数的变量（函数）时，形成了闭包。
- 延长局部变量的生命周期；
- 在函数外部可以访问到函数内部的变量；
- 缺点：由于闭包使得局部变量的生命周期延长，而未及时释放其所占的内存，积累多了就会引起内存泄露问题。

### 说说你对作用域链的理解

- 简单的说，作用域是变量与函数的可访问范围。在ES6之前，只有全局作用域和函数作用域，ES6中新增的块级作用域，即两个大括号包裹的内部。作用域可以嵌套，在使用变量、函数时，对变量和函数的查找，会现在当前的作用域中进行，如果找不到的话会继续在包裹当前作用域的上级作用域中查找，依次往上直到全局作用域。这个查找过程不能反过来。

### JavaScript原型，原型链 ? 有什么特点？

- 每个对象都会在其内部初始化一个属性，就是 prototype（原型），当我们访问一个对象属性石，如果这个对象内部不存在这个属性，那么他就会去prototype 里找这个属性，这个 prototype 又会有自己的 prototype。于是就这样一直找下去，也就是我们常说的原型链的概念。
- 关系：instance.constructor.prototype = instance.__proto__
- 特点：JavaScript 对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型是，与之相关的对象也会继承这一改变。当我们需要一个属性时，JavaScript 引擎会先看当前对象中是否有这个属性，如果没有的话，就会查找它的 prototype 对象是否有这个属性，如此递推下去，一直检索到有 object 内建对象。

### 请解释什么是事件委托/事件代理

- 事件委托（事件代理）是基于Js冒泡原理，把本来加在子元素身上的事件，加在了其父级身上。通过event对象里记录的“事件源”，查找发生事件的真正子元素获取事件源的方法存在兼容性问题，老IE浏览器是 window.event.srcElement，其他浏览器是 event.target
- 可以大量节省内存占用，减少事件注册
- 可以方便地动态添加和修改元素，不需要因为元素的改动而修改事件绑定

### Javascript如何实现继承？

#### 原型链继承

- 利用原型让一个引用类型继承另外一个引用类型的属性和方法。

```
function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function() {
  return this.property;
}
function subType() {
  this.property = false;
}
//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
  return this.property;
}
var instance = new SubType();
console.log(instance.getSuperValue());//true
```

#### 借用构造函数

- 在子类型构造函数的内部调用超类构造函数，通过使用call()和apply()方法可以在新创建的对象上执行构造函数。

```
function SuperType() {
  this.colors = ["red","blue","green"];
}
function SubType() {
  SuperType.call(this);//继承了SuperType
}
var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);//"red","blue","green","black"
var instance2 = new SubType();
console.log(instance2.colors);//"red","blue","green"
```

#### 组合继承

- 将原型链和借用构造函数的技术组合在一块，从而发挥两者之长的一种继承模式。

```
function SuperType(name) {
  this.name = name;
  this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function() {
  console.log(this.name);
}
function SubType(name, age) {
  SuperType.call(this,name);//继承属性
  this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
Subtype.prototype.constructor = Subtype;
Subtype.prototype.sayAge = function() {
console.log(this.age);
}
var instance1 = new SubType("EvanChen",18);
instance1.colors.push("black");
consol.log(instance1.colors);//"red","blue","green","black"
instance1.sayName();//"EvanChen"
instance1.sayAge();//18
var instance2 = new SubType("EvanChen666",20);
console.log(instance2.colors);//"red","blue","green"
instance2.sayName();//"EvanChen666"
instance2.sayAge();//20
```

#### 原型式继承

- 借助原型可以基于已有的对象创建新对象，同时还不必须因此创建自定义的类型。

```
function object(o) {
  function F(){}
  F.prototype = o;
  return new F();
}
```

#### 寄生式继承

- 创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真正是它做了所有工作一样返回对象。

```
function createAnother(original) {
  var clone = object(original);
  clone.sayHi = function () {
    alert("hi");
  };
  return clone;
}
var person = {
  name:"EvanChen",
  friends:["Shelby","Court","Van"];
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();///"hi"
```

#### 寄生组合式继承

- 通过借用函数来继承属性，通过原型链的混成形式来继承方法

```
function inheritProperty(subType, superType) {
  var prototype = object(superType.prototype);//创建对象
  prototype.constructor = subType;//增强对象
  subType.prototype = prototype;//指定对象
}
```

### 函数执行改变this

- 普通函数调用，此时this指向window
- 构造函数调用， 此时 this 指向 实例对象
- 对象方法调用， 此时 this 指向 该方法所属的对象
- 通过事件绑定的方法， 此时 this 指向 绑定事件的对象
- 定时器函数， 此时 this 指向 window
- call()方法
- apply()方法（不同之处在于提供参数的方式，apply（）使用参数数组，而不是参数列表）
- bind()方法（bind()创建的是一个新的函数（称为绑定函数），与被调用函数有相同的函数体，当目标函数被调用时this的值绑定到 bind()的第一个参数上）

### JS函数柯里化

- 柯里化，英语：Currying(果然是满满的英译中的既视感)，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

### js的new操作符做了哪些事情

1. 新建一个空对象obj
2. 将 obj 作为 this 通过 apply 方法调用 sup 函数
3. 将 obj 的原型指向 sup 函数。
4. 如果构造函数返回值为对象或者函数，则返回该对象或者函数，否则返回新创建的 obj 对象

> obj.__proto__ = sup.prototype；或者使用 ES6 语法 Object.setPrototypeOf(obj,sup.prototype)

## Vue

### Vue中key值的作用

- 用于 管理可复用的元素。因为Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做使 Vue 变得非常快，但是这样也不总是符合实际需求。

### Vue 组件中 data 为什么必须是函数？

- 当data选项是一个函数的时候，每个实例可以维护一份被返回对象的独立的拷贝，这样各个实例中的data不会相互影响，是独立的。

### vuex的特性是？

- state：就是一个仓库，数据源的存放处。
- getter：可以对state进行操作，相当于state数据的计算属性。
- mutation：同步执行。修改state数据的唯一途径。直接变更state状态。
- action：可以包含异步操作。不能直接操作state，需要通过提交mutation来修改state数据。
- module：模块化。

### 介绍一下Vue的响应式系统
