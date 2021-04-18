# 知识体系

## HTML面试知识点

### 标准模式和兼容模式的区别

> 标准模式的渲染方式和JS引擎的解析方式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以狂送的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。

### HTML5各种元素的定义

> HTML5中，元素被分成两大类:inline（内联元素）与block（块级元素）。一个行内元素只占据它对应的标签的边框所包含的空间。

> 行内元素：a b span img strong sub sup button input label select

> 块级元素：div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p

> 空元素：br hr img input link meta

> link标签定义文档和外部资源的关系。link元素是空元素，它仅包含属性。此元素只能存在于head部分，不过它可出现任何次数。link标签中的rel属性定义了当前文档和被链接文档之间的关系。常见的stylesheet指的是定义一个外部加载的样式表。

> 行内元素与块级元素的区别：

> 1、格式上，默认情况下，行内元素不会以新行开始，而块级元素会新起一行。

> 2、内容上，默认情况下，行内元素只能包含文本和其他行内元素，而块级元素可以包含行内元素和其他块级元素。

> 3、行内元素和元素属性的不同，主要是盒模型属性上：行内元素设置width无效，height无效（可以设置line-height），设置margin和padding的上下不会对其他元素产生影响。

### 页面导入样式时，使用link和@import的区别

> 1、从属关系区别。@import是css提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载css文件，还可以定义RSS、rel连接属性、引入网站图标等。

> 2、加载顺序区别。加载页面时，link标签引入的css被同时加载；@import引入的css将在页面加载完毕后被加载。

> 3、兼容性区别。@import是CSS2.1才有的语法，故只可在IE5+才能识别；link标签作为HTML元素，不存在兼容性问题。

> 4、DOM可控性区别。可以通过JS操作DOM，插入link标签来改变样式；由于DOM方法是基于文档的，无法使用@import的方式插入样式。

### 浏览器的渲染原理

> 1、首先解析收到的文档，根据文档定义构建一棵DOM树，DOM树是由DOM元素以及属性节点组成的。

> 2、然后对CSS进行解析，生成CSSOM规则树。

> 3、根据DOM树和CSSOM规则树构建渲染树。渲染树的节点被称为渲染对象，渲染对象是一个包含有颜色和大小等属性的矩形，渲染对象和DOM元素相对应，但这种对应关系不是一对一的，不可见的DOM元素不会插入渲染树。还有一些DOM元素对应几个可见对象，它们一般是一些具有复杂结构的元素，无法用一个矩形来描述。

> 4、当渲染对象被创建并添加到树中，他们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流）。这一阶段浏览器要做的事情就要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。

> 5、布局阶段结束后是绘制阶段，遍历渲染树并调用渲染对象的paint方法将它们的内容显示在屏幕上，绘制使用UI基础组件。值得注意的是，这个过程是逐步完成的，为了更好的用户体验，渲染引擎将会尽可能的早的将内容呈现到屏幕上，并不会等到所有的html都解析完成之后再去构建和布局render树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。

### 渲染过程中遇到JS文件怎么处理，以及async和defer的作用和区别

> JavaScript的加载、解析与执行会阻塞文档的解析，也就是说，在构建DOM时，HTML解析器若遇到了JavaScript，那么它会暂停文档的解析，将控制权移交给JavaScript引擎，等JavaScript引擎运行完毕，浏览器再从中的地方恢复继续解析文档。

> 也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载JS文件，这也就是都建议将script标签放在body标签底部的原因。当然在当下，并不是说script标签必须放在底部，因为你可以给script标签添加defer或者async属性。

> async和defer的作用和区别:

> 1、脚本没有defer或async，浏览器会立即加载并执行指定的脚本，也就是说不等待后续载入的文档元素，读到就加载并执行。

> 2、defer属性表示延迟执行引入的JavaScript，即这段JavaScript加载时HTML并未停止解析，这两个过程是并行的。当整个document解析完毕后再执行脚本文件，再DOMContentLoaded事件触发之前发成。多个脚本按顺序执行。

> 3、async属性表示异步执行引入的JavaScript，与defer的区别在于，如果已经加载好，就会开始执行，也就是说它的执行仍然会阻塞文档的解析，只是它的加载过程不会阻塞。多个脚本的执行顺序无法保证。

### 什么是重绘和回流，如何减少回流

> 重绘：当渲染树中的一些元素需要更新属性，而这些属性只是影响元素的外观、风格，而不会影响布局的操作，比如background-color。

> 回流：当渲染树中的一部分（或全部）因为元素的规模尺寸、布局、隐藏等改变而需要重新构建的操作，会影响到布局的操作。

> 常见引起回流属性和方法：

> 1、添加或者删除可见的DOM元素；

> 2、元素尺寸该改变--边距、填充、边框、宽度和高度；

> 3、内容变化，比如用户在input框中输入文字；

> 4、浏览器窗口尺寸改变--resize事件发生时；

> 5、计算offsetWidth和offsetHeight属性；

> 6、设置style属性的值；

> 7、当你修改网页的默认字体时；

> 如何减少回流：

> 1、使用transform替代top；

> 2、不要把节点的属性值放在一个循环里当成变量；

> 3、不要是用table布局，可能很小的一个小改动会造成整个table的重新布局；

> 4、把DOM离线后修改；

> 5、不要一条一条地修改DOM的样式；

### HTML5新增哪些特性、移除了哪些

> 新增的有：

> 绘画canvas；

> 用于媒介回放的video和audio元素；

> 本地离线存储localStorage长期存储数据，浏览器关闭后数据不丢失；sessionStorage的数据在浏览器关闭后自动删除；

> 语义化更好的内容元素，比如article、footer、header、nav、section

> 表单控件，calendar、date、time、Email、url、search

> 新的技术webworker，websocket

> 新的文档属性 document.visibilityState

> 移除的元素有：

> 纯表现的元素：basefont，big，center，font，s，strike，tt，u；

> 对可用性产生负面影响的元素：frame，frameset，noframes；

### iframe的缺点

> 1、iframe会阻塞主页面的onload事件。window的onload事件需要在所有iframe加载完毕后（包含里面的元素）才会触发。在Safari和Chrome里，通过JavaScript动态设置iframe的src可以避免这种阻塞情况。

> 2、搜索引擎的检索程序无法解读这种页面，不利于网页的SEO。

> 3、iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

> 4、浏览器的后退按钮失效。

> 5、小型的移动设备无法完全显示框架。

### 如何实现浏览器内多个标签页之间的通信

> 1、使用WebSocket，通信的标签页连接同一个服务器，发送消息到服务器后，服务器推送消息给所有连接的客户端。

> 2、使用 SharedWorker （只在 chrome 浏览器实现了），两个页面共享同一个线程，通过向线程发送数据和接收数据来实现标签页之间的双向通行。

> 3、如果我们能够获得对应标签页的引用，通过 postMessage 方法也是可以实现多个标
签页通信的。

### 常用的 meta 标签

> meta元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。

> meta标签位于文档的头部，不包含任何内容。meta标签的属性定义了与文档相关联的名称/值对。

```
<!DOCTYPE html> H5 标准声明，使用 HTML5 doctype，不区分大小写
<head lang=”en”> 标准的 lang 属性写法
<meta charset=’utf-8′> 声明文档使用的字符编码
<meta http-equiv=”X-UA-Compatible” content=”IE=edge,chrome=1″/> 优先使用 IE 最新版
本和 Chrome
<meta name=”description” content=”不超过 150 个字符”/> 页面描述
<meta name=”keywords” content=””/> 页面关键词者
<meta name=”author” content=”name, email@gmail.com”/> 网页作
<meta name=”robots” content=”index,follow”/> 搜索引擎抓取
<meta name=”viewport” content=”initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no”> 为移动设备添加 viewport
<meta name=”apple-mobile-web-app-title” content=”标题”> iOS 设备 begin
<meta name=”apple-mobile-web-app-capable” content=”yes”/> 添加到主屏后的标题（iOS 6
新增）
是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏
<meta name=”apple-itunes-app” content=”app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL”>
添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）
<meta name=”apple-mobile-web-app-status-bar-style” content=”black”/>
<meta name=”format-detection” content=”telphone=no, email=no”/> 设置苹果工具栏颜色
<meta name=”renderer” content=”webkit”> 启用 360 浏览器的极速模式(webkit)
<meta http-equiv=”X-UA-Compatible” content=”IE=edge”> 避免 IE 使用兼容模式
<meta http-equiv=”Cache-Control” content=”no-siteapp” /> 不让百度转码
<meta name=”HandheldFriendly” content=”true”> 针对手持设备优化，主要是针对一些
老的不识别 viewport 的浏览器，比如黑莓
<meta name=”MobileOptimized” content=”320″> 微软的老式浏览器
<meta name=”screen-orientation” content=”portrait”> uc 强制竖屏
<meta name=”x5-orientation” content=”portrait”> QQ 强制竖屏
<meta name=”full-screen” content=”yes”> UC 强制全屏
<meta name=”x5-fullscreen” content=”true”> QQ 强制全屏
<meta name=”browsermode” content=”application”> UC 应用模式
<meta name=”x5-page-mode” content=”app”> QQ 应用模式
<meta name=”msapplication-tap-highlight” content=”no”> windows phone 点击无高光
设置页面不缓存<meta http-equiv=”pragma” content=”no-cache”>
<meta http-equiv=”cache-control” content=”no-cache”>
<meta http-equiv=”expires” content=”0″>
```

### 前端性能优化

#### 1、页面内容方面

> 1、通过文件合并、css雪碧图、使用base64等方式来减少HTTP请求数，避免过多的请求造成的等待的情况

> 2、通过DNS缓存等机制来减少DNS的查询次数

> 3、通过设置缓存策略，对常用不败你的资源进行缓存

> 4、使用延迟加载的方式，来减少页面首屏加载时需要请求的资源。延迟加载的资源当用户需要要访问时，再去请求加载

> 5、通过用户行为，对某些资源使用预加载的方式，来提高用需要访问资源时的响应速度

#### 2、服务器方面

> 1、把样式表放在页面的head标签中，减少页面的首次渲染时间

> 2、避免使用@import标签

> 3、尽量把js脚本放在页面底部或者使用defer或async属性，避免脚本的加载和执行阻塞页面的渲染

> 4、通过对JavaScript和CSS的文件进行压缩，来减少文件的体积

## CSS面试知识点

### CSS选择符有哪些

> id选择器

> 类选择器

> 标签选择器

> 后代选择器

> 相邻后代选择器

> 兄弟选择器

> 相邻兄弟选择器

> 属性选择器

> 伪类选择器

> 伪元素选择器

> 通配符选择器

### position有哪些值

> absolute 生成绝对定位的元素，相对于值不为static的第一个父元素的paddingbox进行定位，也可以理解为离自己这一级元素最近的以及position设置为absolute或者relative的父元素的paddingbox的左上角为原点的。

> fixed（老IE不支持）生成绝对定位的元素，相对于浏览器窗口进行定位。

> relative生成相对定位的元素，相对于其元素本身所在正常位置进行定位。

> static默认值。没有定位，元素出现在正常的流中。

> inherit 规定从父元素继承position属性的值。

### 对BFC规范（块级格式化上下文）的理解

> BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品排放，并且不会影响其他环境中的物品。

> 创建BFC

> 1、根元素或包含根元素的元素

> 2、浮动元素float

> 3、绝对定位元素position=absolute或fixed

> 4、display＝inline-block|flex|inline-flex|table-cell 或 table-caption

> 5、overflow＝hidden|auto 或 scroll(≠visible)

### 使用 rem 布局的优缺点

> 优点：在屏幕分辨率千差万别的时代，只要将rem与屏幕分辨率关联起来就可以实现页面的整体缩放；

> 缺点：

> 1、在奇葩的dpr设备上表现效果不太好

> 2、使用iframe引起也会出现问题

> 3、rem在多屏尺寸适配上与当前两大平台的设计哲学不一致

## JavaScript面试知识点

### JavaScript 有几种类型的值？你能画一下他们的内存图

> 栈：原始数据类型（Undefined、Null、Boolean、Number、String）

> 堆：引用数据类型（对象、数组和函数）

### null和undefined的区别

> Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，
就是 undefined 和 null。undefined 代表的含义是未定义，null 代表的含义是空对象

### JavaScript 的基本规范

> 一个函数作用域中所有的变量声明应该尽量提到函数首部

> 代码中出现地址、时间等字符串时需要使用常量代替

> 在进行比较的时候吧，尽量使用'===', '!=='代替'==', '!='。

> switch 语句必须带有 default 分支。

> 不要在内置对象的原型上添加方法，如 Array, Date。

> for循环必须使用大括号

> if语句必须使用大括号

### JavaScript 原型，原型链？ 有什么特点

> 在 js 中我们是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype属性值，这个属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当我们使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。一般来说我们是不应该能够获取到这个值的，但是现在浏览器中都实现__proto__ 属性来让我们访问这个属性，但是我们最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个Object.getPrototypeOf() 方法，我们可以通过这个方法来获取对象的原型。当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以这就是我们新建的对象为什么能够使用 toString()等方法的原因。

### JavaScript创建对象的几种方式

> 1、工厂模式，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。

> 2、构造函数模式，js 中每一个函数都可以作为构造函数，只要一个函数是通过 new
来调用的，那么我们就可以把它称为构造函数。执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此我们可以使用 this 给对象赋值。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此我们可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次我们都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。

> 3、原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此我们可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数
对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

### JavaScript继承的几种实现方式

> 1、原型链继承

> 2、构造函数继承

> 3、组合继承

> 4、原型式继承

> 5、寄生式继承

> 6、寄生式组合继承

### Javascript 的作用域链

> 作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。

### This 对象的理解

> this时执行上下文的一个属性，它指向最后依次调用这个方法的对象。在实际开发中，this的指向可以通过四种调用模式来判断。

> 1、函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this指向全局对象。

> 2、方法调用模式，如果一个函数作为一个对象的方法来调用时，this指向这个对象。

> 3、构造器调用模式，如果一个函数用new调用时，函数执行前会创建一个对象，this指向这个新创建的对象。

> 4、apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指
向除了使用 new 时会被改变，其他情况下都不会改变。

### 什么是闭包，为什么要用它

> 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。闭包有两个常用的用途。闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，我们可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。函数的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。其实闭包的本质就是作用域链的一个特殊的应用，只要了解了作用域链的创建过程，就能够理解闭包的实现原理。

### 如何创建一个Ajax

> 1、创建一个XMLHttpRequest对象，也就是创建一个异步调用对象

> 2、创建一个新的HTTP请求，并指定该HTTP请求的方法、URL及验证信息

> 3、设置响应HTTP请求状态变化的函数

> 4、发送HTTP请求

> 5、获取异步调用返回的数据

> 6、使用JavaScript和DOM实现局部刷新

### 浏览器的缓存机制

> 浏览器的缓存机制指的是通过一段时间内保留已接收的web资源的一个副本，如果在资源的有效时间内，发起了对这个资源的再一次请求，那么浏览器会直接使用缓存的副本，而不是向服务器发起请求。使用web缓存可以有效地提高页面的打开的速度，减少不必要的网络带宽的消耗。web资源缓存策略一般由服务器来指定，可以分为两种，强缓存和协商缓存。

> 强缓存：如果缓存资源有效，则直接使用缓存资源，不必要向服务器发起请求。强缓存是通过设置http请求头信息中的Expires属性和Cache-Control属性。服务器欧通过在响应头中添加Expires属性，来指定资源的过期时间，这是一个绝对时间。这是http1.0中的方式。在http1.1中，是通过Cache-Control属性，同时是通过设置max-age来指定缓存的时间的大小，这是个相对时间来进行控制。Cache-Control优先级高于Expires。

> 协商缓存：会先向服务器发送一个请求，如果资源没有发生修改，则返回一个304状态，让浏览器使用本地的缓存副本。协商缓存时通过设置http请求头中的Etag和Last-Modified属性。服务器通过在响应头中添加Last-Modified属性来指出资源最后一次修改的时间，当浏览器下次发起请求时，会在请求头中添加If-Modified-Since的属性，属性值为上一次资源返回的Last-Modified的值。由于精确度 之呢个精确到秒级，所以缓存不准确。另外一个方式时通过Etag属性，时服务器在返回资源的时候，在头部信息中添加Etag属性，这个属性时资源生成的唯一标识，资源修改时会同步修改。Etag优先级高于Last-Modified。

### 如何解决凯越问题

> 1、jsonp跨越（利用script标签src没有同源限制）

> 2、跨越资源共享（CORS）

> 3、nginx代理跨域

> 4、postMessage跨域

> 5、document.domain + iframe跨越

### call（）和apply（）的区别

> apply接受两个参数，第一个参数指定了函数体内this对象的指向，第二个为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply方法把这个集合中的元素作为参数传递给被调用的函数。call传入的参数数量不固定，跟apply相同的时，第一个参数也是代表函数体内的this指向，从第二个参数开始往后，每个参数一次传入函数。

### 如何编写高性能的JavaScript

> 1、使用位运算代替简单的四则运算

> 2、避免使用过深的嵌套循环

> 3、不要使用未定的变量

> 4、当需要多次访问数组长度时，可以利用变量保存起来，避免每次都会进行属性查找

### V8引擎的垃圾回收机制

> V8的垃圾回收机制基于分代回收机制，这个机制又基于世代假说，这个假说有两个特点，一是新生的对象容易早死，另外一个是不死的对象会活得更久。V8引擎内存分为了新生代和老生代。新创建的对象或者只经历一次的垃圾回收的对象被称为新生代。经历过多次垃圾回收的对象被称为老生代。

> 新生代被分为From和To两个空间，To一般是闲置的。当From空间满了的时候会执行Scavenge算法进行垃圾回收。当我们执行垃圾回收算法的时候应用逻辑将会停止，等垃圾回收结束再继续执行。这个算法分为三步：

> 1、首先检查From空间的存活对象，如果对象存活则判断对象是否满足晋升到老生代的条件，如果满足则晋升到老生代。如果不是则移动到To空间。

> 2、对象不存活，则释放对象空间。

> 3、最后将From空间和To空间角色进行交换。

### 哪些操作会造成内存泄漏

> 1、意外的全局变量

> 2、被遗忘的计数器或回调函数

> 3、脱离DOM的引用

> 4、闭包

### js 的节流与防抖

```
// 函数防抖： 在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
// 函数节流： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
// 函数防抖的实现
function debounce(fn, wait) {
  var timer = null;
  return function() {
    var context = this,
    args = arguments;
    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

// 函数节流的实现;
function throttle(fn, delay) {
  var preTime = Date.now();
  return function() {
    var context = this,
    args = arguments,
    nowTime = Date.now();
    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - preTime >= delay) {
      preTime = Date.now();
      return fn.apply(context, args);
    }
  };
}

```

### JavaScript的事件循环机制

> 因为JavaScript是单线程运行的。在代码执行的时候，通过将不同函数的执行上下文压入执行栈中来保证代码的有序执行。在执行同步代码的时候，如果遇到了异步事件，js引擎并不会一直等待其返回结果，而是将这个事件挂起，继续执行执行栈中的其他的任务。当异步事件执行完毕后，再将异步事件对应的回调加入到与当前执行栈不同的另一个任务队列中等待执行。任务队列可以分为宏任务队列和微任务队列，当当前执行栈中的事件执行完毕后，js引擎首先会判断微任务队列中是否有任务可以执行，如果有就将微任务队的事件压入栈中执行。当微任务队列中的任务都执行完成后再去判断宏任务队列中的任务。

> 微任务包括了promise的回调、node中的process.nextTick、对DOM变化的监听的MutationObserver。

> 宏任务包括了script脚本的执行、setTimeOut、setInterval、setImmediate一类的定时事件，还有I/O操作、UI值

### JavaScript深浅拷贝实现

> 浅拷贝指的是将一个对象的属性值复制到另一个对象，如果有的属性的值为引用类型的话，那么会将这个引用的地址复制给对象，因此两个对象会有同一个引用类型的引用。浅拷贝可以使用Object.assign和展开运算符来实现。

> 深拷贝相对浅拷贝而言，不是只是将引用的地址复制给对象，而是新建一个指针指向引用类型的地址。JSON的两个方法或者递归方法。

### 函数柯里化的实现

> 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技
术。

### 什么是 XSS 攻击？如何防范 XSS 攻击

> xss攻击指的是跨站脚本攻击，是一种代码注入攻击。攻击者通过网站注入恶意脚本，使之在用户浏览器上运行，从而盗取用户信息和cookie。防范手段对cookie设置http-only的设置。

### 什么是 CSRF 攻击？如何防范 CSRF 攻击

> CSRF攻击指的是跨站请求伪造攻击，攻击者诱导用户进入一个第三方网站，然后该网站向被攻击网站发送跨站请求。利用其登录状态向服务器发送请求。

> 1、同源检测的方法。（http请求头中origin或者referer信息）

> 2、使用CSRF Token进行验证

> 3、使用使用双重Cookie验证的办法

> 4、设置cookie属性的时候设置Samesite

### 什么是点击劫持？如何防范点击劫持？

> 点击劫持是一种视觉欺骗的攻击手段，攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。（通过设置http响应头的X-FRAME-OPTIONS）
