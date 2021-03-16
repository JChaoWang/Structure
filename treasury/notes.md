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
