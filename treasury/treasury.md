# 面试宝典

## 1.html & js & css

- AMD和CMD是什么？它们的区别有哪些？

> AMD和CMD是二种模块定义规范。现在都使用模块化编程，AMD，异步模块定义；CMD，通用模块定义。AMD依赖前置，CMD依赖就近。CMD的API职责单一，没有全局require，AMD的一个API可以多用。

- web开发常见的漏洞

> XSS（跨站脚本攻击）：其原理是攻击者向有XSS漏洞的网站中输入(传入)恶意的HTML代码，当其它用户浏览该网站时，这段HTML代码会自动执行，从而达到攻击的目的。如，盗取用户Cookie、破坏页面结构、重定向到其它网站等。（防御策略：http响应头设置x-xss-protection为1（打开））

> SQL注入：用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，这就是所谓的SQL Injection，即SQL注入。

> CSRF（跨站请求伪造）：其原理是由第三方网站向后端发起请求，带着原有网站的登录cookie，从而达到篡改数据的目的。（禁止第三方网站携带本网站的cookie信息：设置same-site属性，same-site属性有两个值，Strict（所有的第三方请求都不能携带本网站的cookie）和Lax（链接可以，但是form表单提交和ajax请求不行））

> 点击劫持：其原理是第三方网站通过iframe内嵌某一个网站，并且将iframe设置为透明不可见，将其覆盖在其他经过伪装的DOM上，伪装的可点击DOM（按钮等）与实际内嵌网站的可点击DOM位置相同，当用户点击伪装的DOM时，实际上点击的是iframe中内嵌的网页的DOM从而触发请求操作（前端判断是否有iframe的存在，或者设置响应头X-Frame-Options：有三个值 DENY（禁止内嵌） SAMEORIGIN（只允许同域名页面内嵌） ALLOW-FROM（指定可以内嵌的地址））。

- MVC BFC

> mvc是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范使用MVC的目的是将M和V的实现代码分离，从而使同一个程序可以使用不同的表现形式。MVC对应Html，CSS，js。

> mvc是模型(model)－视图(view)－控制器(controller)的缩写，一种软件设计典范使用MVC的目的是将M和V的实现代码分离，从而使同一个程序可以使用不同的表现形式。MVC对应Html，CSS，js。

> BFC全称”Block Formatting Context”, 中文为“块级格式化上下文”。流体特性：块状水平元素，如div元素（下同），在默认情况下（非浮动、绝对定位等），水平方向会自动填满外部的容器；BFC元素特性表现原则就是，内部子元素不会影响外部的元素。

> BFC触发条件：1.float: left / right 2. position: absolute / fixed 3.overflow: auto / scroll / hidden 4.<html> 根元素 5.display: inline-block / table-caption / table-cell

- HTTP状态码

> 1.消息 2.成功 3.重定向 4.请求错误 5.服务器错误 304：响应禁止包含消息体，如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。 301：（永久移动） 请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。 302：（临时移动） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。305：被请求的资源必须通过指定的代理才能被访问。307：（临时重定向） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。 400：语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求，或者请求参数有误。 403：服务器已经理解请求，但是拒绝执行它。 404：请求失败，请求所希望得到的资源未被在服务器上发现。 500：服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。一般来说，这个问题都会在服务器端的源代码出现错误时出现。

- 动态节点绑定事件

> delegate()和live（）作用类似，附加的事件处理程序适用于匹配选择器的当前及未来的元素（比如由脚本创建的新元素）。但二者参数不一样。bind（）可以向元素添加的一个或多个事件处理程序，以及当事件发生时运行的函数。

- Position的四个属性详解

> Position的四个属性：static，fixed，absolute，relative.首先，static，是position属性的默认值，也就是无特殊定位，遵循html定位规则。然后，fixed，是相对于浏览器窗口进行定位，不随页面的上下翻动而移动，比如固定在页面末端的二维码等。下来，就是absolute，它是相对于它的第一个父元素进行定位，如果你想让这个div#demo里的一个子div#sub相对于#demo定位在右上角的某个地方，应该给#demo相对定位，#sub绝对定位。 此时，它的第一个父元素就是id=demo的div；否则它的父元素就是body，这样它的位置在页面中保持不变，但是随着页面移动会发生变化（区别fixed）。最后，relative，relative是相对于自己来定位的，相对于其正常位置进行定位。例如：#demo{position:relative;top:-50px;},这时#demo会在相对于它原来的位置上移50px。P.S:采用左列left浮动，右列不浮动，采用margin-left定位的方式。

- 一个简单的AJAX 的请求

```
  function loadXMLDoc(){
  var xmlhttp;
  if (window.XMLHttpRequest){
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }else{
  // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200){ document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
  }
  }
  xmlhttp.open("GET","/ajax/demo_get.asp",true);
  xmlhttp.send();
  }
```

- 事件监听机制（冒泡和捕获）

> 事件捕获：事件从最上一级标签开始往下查找，直到捕获到事件目标(target)。

> 事件冒泡：事件从事件目标(target)开始，往上冒泡直到页面的最上一级标签。

> IE只支持事件冒泡，其他主流浏览器两种都支持。

> 程序员可以自己选择绑定事件时采用事件捕获还是事件冒泡，方法就是绑定事件时通过addEventListener函数，它有三个参数，第三个参数若是true，则表示采用事件捕获，若是false，则表示采用事件冒泡。

- DNS的工作原理（递归和迭代）

> 1.客户机提出域名解析请求，并将该请求发送给本地的域名服务器。

> 2.当本地的域名服务器收到请求后，就先查询本地的缓存，如果有该纪录项，则本地的域名服务器就直接把查询的结果返回。

> 3.如果本地的缓存中没有该纪录，则本地域名服务器就直接把请求发给根域名服务器，然后根域名服务器再返回给本地域名服务器一个所查询域(根的子域) 的主域名服务器的地址。

> 4.本地服务器再向上一步返回的域名服务器发送请求，然后接受请求的服务器查询自己的缓存，如果没有该纪录，则返回相关的下级的域名服务器的地址。

> 5.重复第四步，直到找到正确的纪录。

> 6.本地域名服务器把返回的结果保存到缓存，以备下一次使用，同时还将结果返回给客户机。

- TCP的三次握手与四次挥手理解

> 三次握手

>> 第一次握手：建立连接时，客户端发送syn包（syn=x）到服务器，并进入SYN_SENT状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。

>> 第二次握手：服务器收到syn包，必须确认客户的SYN（ack=x+1），同时自己也发送一个SYN包（syn=y），即SYN+ACK包，此时服务器进入SYN_RECV状态；

>> 第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=y+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。

> 四次挥手

>> 1.客户端进程发出连接释放报文，并且停止发送数据。释放数据报文首部，FIN=1，其序列号为seq=u（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，客户端进入FIN-WAIT-1（终止等待1）状态。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。

>> 2.服务器收到连接释放报文，发出确认报文，ACK=1，ack=u+1，并且带上自己的序列号seq=v，此时，服务端就进入了CLOSE-WAIT（关闭等待）状态。TCP服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个CLOSE-WAIT状态持续的时间。

>> 3.客户端收到服务器的确认请求后，此时，客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最后的数据）。

>> 4.客户端收到服务器的确认请求后，此时，客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最后的数据）。

>> 5.客户端收到服务器的连接释放报文后，必须发出确认，ACK=1，ack=w+1，而自己的序列号是seq=u+1，此时，客户端就进入了TIME-WAIT（时间等待）状态。注意此时TCP连接还没有释放，必须经过2∗∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的TCB后，才进入CLOSED状态。

>> 6.服务器只要收到了客户端发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，服务器结束TCP连接的时间要比客户端早一些。

- 前端性能优化

> 1.减少HTTP请求数量

> 2.CSS Sprites

> 3.合并 CSS 和 JS 文件

> 4.采用 lazyLoad

> 5.控制资源文件加载优先级

> 6.利用浏览器缓存

> 7.减少重排（Reflow）

> 8.减少 DOM 操作

> 9.图标使用 IconFont 替换

- JSONP的优缺点（跨域问题）

> JSONP是一种非正式传输协议，人们把它称作JSONP，该协议的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。

> 优点

>> 1.它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制，JSONP可以跨越同源策略；

>> 2.它的兼容性更好，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支持；

>> 3.在请求完毕后可以通过调用callback的方式回传结果。将回调方法的权限给了调用方。这个就相当于将controller层和view层终于分开了。我提供的jsonp服务只提供纯服务的数据，至于提供服务以 后的页面渲染和后续view操作都由调用者来自己定义就好了。如果有两个页面需要渲染同一份数据，你们只需要有不同的渲染逻辑就可以了，逻辑都可以使用同 一个jsonp服务；

> 缺点

>> 1.它只支持GET请求而不支持POST等其它类型的HTTP请求；

>> 2.它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题；

>> 3.jsonp在调用失败的时候不会返回各种HTTP状态码；

>> 4.安全性；

- 从输入 URL 到页面加载完的过程中都发生了什么事情

> [全过程](https://www.cnblogs.com/xiaohuochai/p/9193083.html)

- 防抖与节流

> 防抖 (debounce): 将多次高频操作优化为只在最后一次执行，通常使用的场景是：用户输入，只需再输入完成后做一次输入校验即可。

```
function debounce(fn, wait, immediate) {
  let timer = null
  return function() {
    let args = arguments
    let context = this
    if (immediate && !timer) {
      fn.apply(context, args)
    }
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
```

> 节流(throttle): 每隔一段时间后执行一次，也就是降低频率，将高频操作优化成低频操作，通常使用场景: 滚动条事件 或者 resize 事件，通常每隔 100~500 ms执行一次即可。

```
function throttle(fn, wait, immediate) {
 let timer = null
 let callNow = immediate
 return function() {
  let context = this,
  args = arguments
  if (callNow) {
    fn.apply(context, args)
    callNow = false
  }
  if (!timer) {
    timer = setTimeout(() => {
    fn.apply(context, args)
    timer = null
    }, wait)
  }
 }
}
```

- ES6

> 声明 let/const

> 解构赋值

> class / extend: 类声明与继承

> Set / Map: 新的数据结构

> ES6异步解决方式

>> 1.Promise

>> 2.Generator是一个迭代器生成函数，其返回值是一个迭代器（Iterator），可用于异步调用。

>> 3.await / async: 是generator的语法糖， babel中是基于promise实现。

- iframe有那些缺点

> 1.iframe会阻塞主页面的Onload事件；

> 2.iframe和主页面共享链接池，而浏览器对相同城的链接有限制，所以会影响页面的并行加载；

> 3.使用iframe之前需要考虑这两个缺点，如果需要使用iframe，最好是通过JavaScript；

> 4.动态给iframe添加src属性值，这样可以可以绕开以上两个问题

> 5.不利于seo

> 6.代码复杂，无法一下被搜索引擎索引到

> 7.iframe框架页面会增加服务器的http请求，对于大型网站不可取

> 8.很多的移动设备无法完全显示框架，设备兼容性差

- 如何实现浏览器内多个标签页之间的通信? (阿里)

> 1.调用localStorage(监听storage)

> 2.调用cookie+setInterval()

- css优化

> [地址](https://m.html.cn/qa/css3/13266.html)

- Javascript如何实现继承(6种)

> 原型链

```
function Parent() {
  this.name = 'aa';
  this.prototype.getName = () => {
    console.log(this.name);
  };
};
function Child() {};
Child.prototype = new Parent();
var child = new Child();
console.log(child.getName()); // aa
```

>> 特点：

>> 1.非常纯粹的继承方式，实例是子类的实例，也是父类的实例

>> 2.父类新增原型方法/属性，子类都能访问

>> 3.简单，易于实现

>> 缺点：

>> 1.要想为子类新增属性和方法，必须要在new Child()这样的语句之后执行，不能放到构造器中

>> 2.无法实现多继承

>> 3.来自原型对象的引用属性被所有实例共享

>> 4.创建子类实例时，无法向父类构造函数传参

> 构造函数继承

```
function a2() {this.clor=[1,2,3,4]};
function b2() {a2.call(this)};
var instance2 = new b2();
instance2.color.push(5);
console.log(instance2.color);// [1,2,3,4,5]
```

>> 特点：

>> 1.解决了原型链继承中，子类实例共享父类引用属性的问题

>> 2.创建子类实例时，可以向父类传递参数

>> 3.可以实现多继承（call多个父类对象）

>> 缺点：

>> 1.实例并不是父类的实例，只是子类的实例

>> 2.只能继承父类的实例属性和方法，不能继承原型属性/方法

>> 3.无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

> 组合继承

```
function a4(name) {this.name=name;this.color=[1,2,3,4];  }
a4.prototype.sayName=function(){console.log(this.name);}
function b4(name,age) { a4.call(this,name);this.age=age; }
b4.prototype=new a4();
b4.prototype.constructor=b4;
b4.prototype.sayAge=function(){console.log(this.age);}
var instance5=new b4("aa",12);
instance5.color.push(5);
console.log(instance5.color);//[1, 2, 3, 4, 5]
instance5.sayAge();//12
instance5.sayName();//aa
```

>> 特点：

>> 1.弥补了构造继承的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法

>> 2.既是子类的实例，也是父类的实例

>> 3.不存在引用属性共享问题

>> 4.可传参

>> 5.函数可复用

>> 缺点：

>> 1.调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）

> 原型式继承

```
function object(o) {
  function F(){}
  F.prototype = o
  return new F()
}
var person={name:"wwwwwww",age:[1,2,3]};
var anp = object(person)
anp.name = "er"
anp.age.push(99)
console.log(person.age);//[1, 2, 3, 99]
```

>> 缺点：

>> 1.缺点也是来自原型对象的引用属性被所有实例共享

> 寄生式继承

```
function createAnother(original) {
  var clone=object(original)
  clone.sayHi=function(){  //扩充了方法
    console.log("hi")
  }
}
var per={name:"loud",age:[1,2,3]};
var pp=createAnother(per)
pp.sayHi()
```

>> 缺点：

>> 1.缺点和构造函数继承一样，都是每次创建对象都会创建一遍方法，内存占用大

> 寄生组合式继承

- js创建对象的几种方式

> 1.工厂模式

> 2.构造函数模式

> 3.组合使用构造函数模式和原型模式

- call、apply、bind的区别

> call('this指向的对象', {属性对象})

> apply('this指向的对象', ["属性数组"])

> bind('this指向的对象', {属性对象})

- Webpack热更新实现原理

> [Webpack热更新实现原理](https://www.cnblogs.com/magicg/p/13679273.html)
