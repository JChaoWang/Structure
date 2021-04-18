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

- [Vue的响应式系统](https://segmentfault.com/a/1190000019700618)

### computed与watch的区别

- computed只有当页面数据变化时才会计算，当数据没有变化时，它会读取缓存。而watch每次都需要执行函数，methods也是每次都需要执行
- 数据变化时执行异步操作，这个时候使用watch是合适的

### Vue的路由实现：hash模式和history模式

- hash模式背后的原理是onhashchange事件
- history api可以分为两大部分，切换和修改，参考MDN，切换历史状态包括back、forward、go 三个方法，对应浏览器的前进，后退，跳转操作。两个方法,这两个方法接收三个参数:stateObj,title,url。通过pushstate把页面的状态保存在state对象中，当页面的url再变回这个url时，可以通过event.state取到这个state对象，从而可以对页面状态进行还原，这里的页面状态就是页面字体颜色，其实滚动条的位置，阅读进度，组件的开关的这些页面状态都可以存储到state的里面。

### Vue路由的钩子函数

#### 全局钩子

- 主要包括beforeEach和aftrEach

#### 单个路由里面的钩子

- 主要用于写某个指定路由跳转时需要执行的逻辑

#### 组件路由

- 主要包括 beforeRouteEnter和beforeRouteUpdate ,beforeRouteLeave,这几个钩子都是写在组件里面也可以传三个参数(to,from,next),作用与前面类似.

## 浏览器

### 浏览器下事件循环(Event Loop)

- [事件循环](https://zhuanlan.zhihu.com/p/145383822)

### 从输入 url 到展示的过程

- [流程](https://blog.csdn.net/qq_32657025/article/details/79672419)

### V8垃圾回收机制

- [垃圾回收机制](https://blog.csdn.net/wu_xianqiang/article/details/90736087)

### HTTPS和HTTP的区别

- [HTTPS和HTTP的区别](https://blog.csdn.net/qq_35642036/article/details/82788421)

### 浏览器缓存

- [浏览器缓存](https://www.jianshu.com/p/54cc04190252)

### 如何解决跨域

- [如何解决跨域](https://segmentfault.com/a/1190000011145364)

# 终极面试笔记

## HTML、CSS重点问题

### HTML5语义化的好处

- 易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
- 有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
- 方便其他设备解析，如盲人阅读器根据语义渲染网页。
- 有利于开发和维护，语义化更具可读性，代码更好维护，与CSS3关系更和谐。

### viewport

- Viewport ：字面意思为视图窗口，在移动web开发中使用。表示将设备浏览器宽度虚拟成一个特定的值（或计算得出），这样利于移动web站点跨设备显示效果基本一致。移动版的 Safari 浏览器最新引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放，其他手机浏览器也基本支持。

### viewport属性值

- width 设置layout,viewport的宽度，为一个正整数，或字符串"width-device"
- initial-scale 设置页面的初始缩放值，为一个数字，可以带小数
- minimum-scale 允许用户的最小缩放值，为一个数字，可以带小数
- maximum-scale 允许用户的最大缩放值，为一个数字，可以带小数
- height 设置layout,viewport的高度，这个属性对我们并不重要，很少使用
- user-scalable 是否允许用户进行缩放，值为"no"或"yes"

### Reflow(回流)和Repaint(重绘)

#### Reflow

- 当涉及到DOM节点的布局属性发生变化时，就会重新计算该属性，浏览器会重新描绘相应的元素，此过程叫Reflow（回流或重排）。

#### Repaint

- 当影响DOM元素可见性的属性发生变化 (如 color) 时,浏览器会重新描绘相应的元素,此过程称为Repaint（重绘）。因此重排必然会引起重绘。

### 浏览器的渲染过程

1. 解析HTML生成DOM树
2. 解析CSS生成CSSOM规则树
3. 将DOM树与CSSOM规则树合并在一起生成渲染树
4. 遍历渲染树开始布局，计算每个节点的位置大小信息
5. 将渲染树每个节点绘制到屏幕

### 浏览器的渲染过程

#### 行内元素

- 一个行内元素只占据它对应标签的边框所包含的空间一般情况下，行内元素只能包含数据和其他行内元素

> b, big, i, small, tt, abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var, a, bdo, br, img, map, object, q, script, span, sub, sup, button, input, label, select, textarea

#### 块级元素

- 占据一整行，高度、行高、内边距和外边距都可以改变，可以容纳块级标签和其他行内标签

> header,form,ul,ol,table,article,div,hr,aside,figure,canvas,video,audio,footer

### iframe框架有那些优缺点

#### 优点

- iframe能够原封不动的把嵌入的网页展现出来
- 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷
- 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用
- 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决

#### 缺点

- 搜索引擎的爬虫程序无法解读这种页面
- 框架结构中出现各种滚动条
- 使用框架结构时，保证设置正确的导航链接
- iframe页面会增加服务器的http请求

### 块格式化上下文（Block Formatting Context）

###### 块格式上下文（BFC）是Web页面的可视化CSS渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域

- float的值不是none
- position的值不是static或relative
- display的值是table-cell、table-caption、inline-block、flex、或inline-flex
- overflow的值不是visible

### 使用 CSS 预处理的优缺点分别是什么？

#### 优点

- 提高 CSS 可维护性
- 易于编写嵌套选择器
- 引入变量，增添主题功能。可以在不同的项目中共享主题文件
- 通过混合（Mixins）生成重复的 CSS
- 将代码分割成多个文件。不进行预处理的 CSS，虽然也可以分割成多个文件，但需要建立多个 HTTP 请求加载这些文件

#### 优点

- 需要预处理工具
- 重新编译的时间可能会很慢

### 水平垂直居中的方式

#### flex

```
// 父容器
position: relative;

// 子容器
position:absolute;
margin:auto;
top:0;
bottom:0;
left:0;
right:0;
```

#### position+transform

```
// 父容器
position: relative;

// 子容器
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
```

#### table-cell

```
<div class="box">
    <div class="content">
        <div class="inner"></div>
    </div>
</div>

html, body {
    height: 100%;
    width: 100%;
    margin: 0;
}
.box {
    display: table;
    height: 100%;
    width: 100%;
}
.content {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
.inner {
    background-color: #000;
    display: inline-block;
    width: 200px;
    height: 200px;
}
```

## Javascript重点问题

### 同源策略

> 同源策略可防止 JavaScript 发起跨域请求。源被定义为 URI、主机名和端口号的组合。此策略可防止页面上的恶意脚本通过该页面的文档对象模型，访问另一个网页上的敏感数据。

### 事件委托

> 事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。所有用到按钮的事件（多数鼠标事件和键盘事件）都适合采用事件委托技术， 使用事件委托可以节省内存。

```
<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>凤梨</li>
</ul>

// good
document.querySelector('ul').onclick = (event) => {
  let target = event.target
  if (target.nodeName === 'LI') {
    console.log(target.innerHTML)
  }
}

// bad
document.querySelectorAll('li').forEach((e) => {
  e.onclick = function() {
    console.log(this.innerHTML)
  }
})
```

### 数据类型

1. Undefined
2. Null
3. Boolean
4. Number
5. String
6. Object
7. symbol(ES6新增)

### new一个对象经历了什么

```
function Test(){}
const test = new Test()
```

1. 创建一个新对象

```
const obj = {}
```

2. 设置新对象的constructor属性为构造函数的名称，设置新对象的proto属性指向构造函数的prototype对象

```
obj.constructor = Test
obj.__proto__ = Test.prototype
```

3. 使用新对象调用函数，函数中的this被指向新实例对象

```
Test.call(obj)
```

4. 将初始化完毕的新对象地址，保存到等号左边的变量中

### 请简述JavaScript中的this

1. 在调用函数时使用new关键字，函数内的this是一个全新的对象。
2. 如果apply、call或bind方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。
3. 当函数作为对象里的方法被调用时，函数内的this是调用该函数的对象。比如当obj.method()被调用时，函数内的 this 将绑定到obj对象。
4. 如果调用函数不符合上述规则，那么this的值指向全局对象（global object）。浏览器环境下this的值指向window对象，但是在严格模式下('use strict')，this的值为undefined。
5. 如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定this的值。
6. 如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，this被设置为它被创建时的上下文。

### 什么是mvvm

> MVVM最早由微软提出来，它借鉴了桌面应用程序的MVC思想，在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离 把Model和View关联起来的就是ViewModel。
ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model
View 和 Model 之间的同步工作完全是自动的，无需人为干涉（由viewModel完成，在这里指VUE）
因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理

### 什么是mvvm

- 父组件通过prop向子组件传值
- 子组件通过事件向父组件传值
- 子组件与子组件之间不能直接传值，需要通过父组件来做间接传值，在这种情况下推荐使用vuex

### vue数据绑定原理

- Vue的数据双向绑定都是依据Object.defineProperty()这一方法来做的Object.defineProperty到底有什么作用呢？

```
Object.defineProperty(obj, prop, descriptor)
obj
要在其上定义属性的对象。
prop
要定义或修改的属性的名称。
descriptor
将被定义或修改的属性描述符。
```

- 我们需要用到的就是描述符当中的getter和setter

```
const obj = {a:1}
obj.a // 1

obj.a = 2
```

- 像上面代码中的两个操作 读取和赋值 就是在访问obj.a的getter和setter
当我们输入obj.a时 就是在访问obj对象a属性的getter 当输入obj.a = 2 时就是在访问obj对象a属性的setter

```
Object.defineProperty(obj, 'a', {
  get : function(){
    return val
  },
  set : function(newValue){
    val = newValue
  },
  enumerable : true,
  configurable : true
})
```

- getter和setter都是一个函数 我们还可以这样做 例如

```
get: function() {
  // 每次访问obj.a时都会执行这段代码
  console.log('hello, 你在读取a的值')
  return val
}
set: function(newValue) {
  val = newValue
  // 每次给obj.a赋值时都会执行这段代码
  console.log('你设置了a的值')
}
```

- Vue的双向数据绑定就是根据上面的原理来实现的 只要在读取值时收集观察者 在赋值时触发观察者更新函数 就可以实现数据变更 从而实现DOM重新渲染
- 说到这可能还不是很明白 不要急 慢慢来 先看一下这段代码 复制放到HTML文件里自己运行一下 然后打开网页 在控制台里输入data.user.name看看 会有惊喜

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>动态数据绑定（一）</title>
</head>
<body>
 <script>
    var data = {
        user: {
            name: 'xiaoming',
            age: 18,
            occupation: 'frontend'
        },
        address: {
            city: 'shaoguan'
        }
    };
    function Observer(data) {
        this.data = data;
        this.walk(data);
    }
    Observer.prototype = {
        walk: function(obj) {
            var value,
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    value = obj[key];
                    if (typeof value === 'object') {
                        new Observer(value);
                    }
                    this.convert(key, value);
                }
            }
        },
        convert: function(key, value) {
            Object.defineProperty(this.data, key, {
                get : function(){
                    console.log("你访问了" + key);
                    return value;
                },
                set : function(newValue){
                    value = newValue;
                    console.log('你设置了' + key + '=' + value);
                }
            });
        }
    }
    var example = new Observer(data);
 </script>
</body>
</html>
```

### vue-router原理

> 说简单点，vue-router的原理就是通过对URL地址变化的监听，继而对不同的组件进行渲染。
每当URL地址改变时，就对相应的组件进行渲染。原理是很简单，实现方式可能有点复杂，主要有hash模式和history模式。

### vuex原理

> vuex的原理其实非常简单，它为什么能实现所有的组件共享同一份数据？
因为vuex生成了一个store实例，并且把这个实例挂在了所有的组件上，所有的组件引用的都是同一个store实例。
store实例上有数据，有方法，方法改变的都是store实例上的数据。由于其他组件引用的是同样的实例，所以一个组件改变了store上的数据， 导致另一个组件上的数据也会改变，就像是一个对象的引用。
如果对vuex的实现有兴趣，可以看看我自己造的一个vue轮子对应的vuex插件。它实现了除vuex模块外的所有功能。

### keep-alive有什么作用

> 当其依赖的属性的值发生变化的时，计算属性会重新计算。反之则使用缓存中的属性值。
计算属性和vue中的其它数据一样，都是响应式的，只不过它必须依赖某一个数据实现，并且只有它依赖的数据的值改变了，它才会更新。

### watch的作用是什么

> watch 主要作用是监听某个数据值的变化。和计算属性相比除了没有缓存，作用是一样的。
> 借助 watch 还可以做一些特别的事情，例如监听页面路由，当页面跳转时，我们可以做相应的权限控制，拒绝没有权限的用户访问页面。

### 写 React/Vue 项目时为什么要在组件中写 key，其作用是什么？

> key 的作用是为了在 diff 算法执行时更快的找到对应的节点，提高 diff 速度。

> vue 和 react 都是采用 diff 算法来对比新旧虚拟节点，从而更新节点。在 vue 的 diff 函数中。可以先了解一下 diff 算法。

> 在交叉对比的时候，当新节点跟旧节点头尾交叉对比没有结果的时候，会根据新节点的 key 去对比旧节点数组中的 key，从而找到相应旧节点（这里对应的是一个 key => index 的 map 映射）。如果没找到就认为是一个新增节点。而如果没有 key，那么就会采用一种遍历查找的方式去找到对应的旧节点。一种一个 map 映射，另一种是遍历查找。相比而言。map 映射的速度更快。

```
// vue 项目 src/core/vdom/patch.js -488 行
// oldCh 是一个旧虚拟节点数组，
 if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
 idxInOld = isDef(newStartVnode.key)
 ? oldKeyToIdx[newStartVnode.key]
 : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
```

```
function createKeyToOldIdx (children, beginIdx, endIdx) {
  let i, key
  const map = {}
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key
    if (isDef(key)) map[key] = i
  }
  return map
}
```

```
// sameVnode 是对比新旧节点是否相同的函数
 function findIdxInOld (node, oldCh, start, end) {
  for (let i = start; i < end; i++) {
    const c = oldCh[i]
    if (isDef(c) && sameVnode(node, c)) return i
    }
  }
}
```

### 移动端触摸事件

> ①touchstart：当手指触碰到屏幕的时候触发 ②touchmove：当手指在屏幕上滑动的时候触发 ③touchend：当手指离开屏幕的时候时候触发 ④touchcancel事件：当系统停止跟踪触摸的时候触发(这个事件很少会用，一般不做深入研究)。 电话接入或者弹出信息等其他事件切入 event：
> touches：表示当前跟踪的触摸操作的touch对象的数组。
> targetTouches：特定于事件目标的Touch对象的数组。
> changeTouches：表示自上次触摸以来发生了什么改变的Touch对象的数组。
> 每个touch对象包含的属性
> clientX：触摸目标在视口中的x坐标。
> clientY：触摸目标在视口中的y坐标。
> identifier：标识触摸的唯一ID。
> pageX：触摸目标在页面中的x坐标。
> pageY：触摸目标在页面中的y坐标。
> screenX：触摸目标在屏幕中的x坐标。
> screenY：触摸目标在屏幕中的y坐标。
> target：触目的DOM节点目标。

### 各种排序实现

```
// 冒泡排序: 比较两个相邻的项，如果第一个大于第二个则交换他们的位置,元素项向上移动至正确的顺序，就好像气泡往上冒一样
冒泡demo:
function bubbleSort(arr) {
 let len = arr.length;
 for (let i = 0; i < len; i++) {
 for (let j = 0; j < len - 1 - i; j++) {
 if (arr[j] > arr[j+1]) { //相邻元素两两对比
 [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
 }
 }
 }
 return arr;
}
// 1) 首先，在数组中选择一个中间项作为主元
// 2) 创建两个指针，左边的指向数组第一个项，右边的指向最后一个项，移动左指针，直到找到一个比主元大的项，接着，移动右边的指针，直到找到一个比主元小的项，然后交换它们。重复这个过程，直到
// 左侧的指针超过了右侧的指针。这个使比主元小的都在左侧，比主元大的都在右侧。这一步叫划分操作
// 3) 接着，算法对划分后的小数组（较主元小的值组成的的小数组， 以及较主元大的值组成的小数组）重复之前的两个步骤，直到排序完成
快排demo:
function quickSort(arr, left, right) {
 let len = arr.length;
 let partitionIndex;
 left = typeof left !== 'number' ? 0 : left;
 right = typeof right !== 'number' ? len - 1 : right;
 if (left < right) {
 partitionIndex = partition(arr, left, right);
 quickSort(arr, left, partitionIndex - 1);
 quickSort(arr, partitionIndex + 1, right);
 }
 return arr;
}
function partition(arr, left, right) { //分区操作
 let pivot = left; //设定基准值（pivot）
 let index = pivot + 1;
 for (let i = index; i <= right; i++) {
 if (arr[i] < arr[pivot]) {
 [arr[i], arr[index]] = [arr[index], arr[i]];
 index++;
 }
 }
 [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
 return index - 1;
}
// 选择排序：大概思路是找到最小的放在第一位，找到第二小的放在第二位，以此类推 算法复杂度O(n^2)
选择demo:
function selectionSort(arr) {
 let len = arr.length;
 let minIndex;
 for (let i = 0; i < len - 1; i++) {
  minIndex = i;
  for (let j = i + 1; j < len; j++) {
   if (arr[j] < arr[minIndex]) { //寻找最小的数
    minIndex = j; //将最小数的索引保存
   }
  }
  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
 }
return arr;
}
// 插入排序：每次排一个数组项，假设数组的第一项已经排序，接着，把第二项与第一项进行对比，第二项是该插入到第一项之前还是之后，第三项是该插入到第一项之前还是第一项之后还是第三项
插入demo:
function insertionSort(arr) {
 let len = arr.length;
 let preIndex, current;
 for (let i = 1; i < len; i++) {
  preIndex = i - 1;
  current = arr[i];
  while (preIndex >= 0 && arr[preIndex] > current) {
   arr[preIndex + 1] = arr[preIndex];
   preIndex--;
  }
  arr[preIndex + 1] = current;
 }
 return arr;
}
// 归并排序：Mozilla Firefox 使用归并排序作为Array.prototype.sort的实现，而chrome使用快速排序的一个变体实现的,前面三种算法性能不好，但归并排序性能不错 算法复杂度O(nlog^n)
// 归并排序是一种分治算法。本质上就是把一个原始数组切分成较小的数组，直到每个小数组只有一个位置，接着把小数组归并成较大的数组，在归并过程中也会完成排序，直到最后只有一个排序完毕的大数组
归并demo:
function mergeSort(arr) { //采用自上而下的递归方法
 let len = arr.length;
 if(len < 2) {
 return arr;
 }
 let middle = Math.floor(len / 2),
 left = arr.slice(0, middle),
 right = arr.slice(middle);
 return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
 let result = [];
 while (left.length && right.length) {
 if (left[0] <= right[0]) {
 result.push(left.shift());
 } else {
 result.push(right.shift());
 }
 }
 result.push(...left);
 result.push(...right);
 return result;
}
//堆排序：堆排序把数组当中二叉树来排序而得名。
// 1）索引0是树的根节点；2）除根节点为，任意节点N的父节点是N/2；3）节点L的左子节点是2*L；4）节点R的右子节点为2*R + 1
// 本质上就是先构建二叉树，然后把根节点与最后一个进行交换，然后对剩下对元素进行二叉树构建，进行交换，直到剩下最后一个
堆demo:
var len; //因为声明的多个函数都需要数据长度，所以把len设置成为全局变量
function buildMaxHeap(arr) { //建立大顶堆
 len = arr.length;
 for (let i = Math.floor(len / 2); i >= 0; i--) {
 heapify(arr, i);
 }
}
function heapify(arr, i) { //堆调整
 let left = 2 * i + 1;
 let right = 2 * i + 2;
 let largest = i;
 if (left < len && arr[left] > arr[largest]) {
 largest = left;
 }
 if (right < len && arr[right] > arr[largest]) {
 largest = right;
 }
 if (largest !== i) {
 [arr[i], arr[largest]] = [arr[largest], arr[i]];
 heapify(arr, largest);
 }
}
function heapSort(arr) {
 buildMaxHeap(arr);
 for (let i = arr.length - 1; i > 0; i--) {
 [arr[0],arr[i]]=[arr[i],arr[0]];
 len--;
 heapify(arr, 0);
 }
 return arr;
}
```

### 二分查找

> 思路 （1）首先，从有序数组的中间的元素开始搜索，如果该元素正好是目标元素（即要查找的元素），则搜索过程结束，否则进行下一步。 （2）如果目标元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作。 （3）如果某一步数组为空，则表示找不到目标元素。

```
// 非递归算法
function binary_search(arr, key) {
 let low = 0;
 let high = arr.length - 1;
 while(low <= high){
 let mid = parseInt((high + low) / 2);
 if(key === arr[mid]){
 return mid;
 }else if(key > arr[mid]){
 low = mid + 1;
 }else if(key < arr[mid]){
 high = mid -1;
 }else{
 return -1;
 }
 }
}
 
// 递归算法
function binary_search(arr,low, high, key) {
 if (low > high){
 return -1;
 }
 let mid = parseInt((high + low) / 2);
 if(arr[mid] === key){
 return mid;
 }else if (arr[mid] > key){
 high = mid - 1;
 return binary_search(arr, low, high, key);
 }else if (arr[mid] < key){
 low = mid + 1;
 return binary_search(arr, low, high, key);
 }
};
```

### 二叉树相关

```
创建
function Node(data,left,right){
 this.data = data;//数值
 this.left = left;//左节点
 this.right = right;//右节点
};
插入二叉树
function insert(node,data){
 //创建一个新的节点
 let newNode = new Node(data,null,null);
 //判断是否存在根节点，没有将新节点存入
 if(node == null){
  node = newNode;
 }else{
  //获取根节点
  let current = node;
  let parent;
  while(true){
   //将当前节点保存为父节点
   parent = current;
   //将小的数据放在左节点
   if(data < current.data){
    //获取当前节点的左节点
    //判断当前节点下的左节点是否有数据
    current = current.left;
    if(current == null){
     //如果没有数据将新节点存入当前节点下的左节点
     parent.left = newNode;
     break;
    }
   }else{
    current = current.right;
    if(current == null){
     parent.right = newNode;
     break;
    }
   }
  } 
 }
}
翻转二叉树
function invertTree(node) {
 if (node !== null) {
  node.left, node.right = node.left, node.right;
  invertTree(node.left);
  invertTree(node.right);
 }
 return node;
}
复制代码
查找链表中倒数第k个结点
2个思路
1：先遍历出长度，然后查找长度-k+1的值
2：2个指针，一个指针先走k-1，然后两个一起走到底部，后者就是结果
```
