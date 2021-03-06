# webpack相关的知识点

## webpack定义知识

### 什么是webpack

> 一句话概括：webpack是一个模块打包工具（module bundler）。

### 核心概念

> 对于webpack，模块不仅仅是JavaScript模块，它包括了任何类型的源文件，不管是图片、字体、json文件都是一个个模块。

### Entry（入口）

> 绘制依赖关系图的起始文件被称为entry。默认的entry为 ./src/index.js，或者我们可以在配置文件中配置。entry可以为一个也可以为多个。

> 单个entry：

```
module.exports = {
  entry: './src/index.js'
}
// 或者
module.exports = {
  entry: {
    main: './src/index.js'
  }
}
```

> 多个entry,多个chunk：

```
module.exports = {
  entry: ['./src/index.js', ''./src/index1.js'']
}
// 或者
module.exports = {
  entry: {
    main: './src/index.js',
    app: './src/index1.js'
  }
}
```

### Output（出口）

> 有了入口，对应的就有出口。顾名思义，出口就是webpack打包完成的输出，output定义了输出的路径和文件名称。Webpack的默认的输出路径为 ./dist/main.js。

```
单个entry
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
}
多个entry
module.exports = {
  entry: {
    search: './src/index.js',
    app: './src/app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  }
}
```

### Loader（加载器）

> Webpack自身只支持加载js和json模块，而webpack的理念是让所有的文件都能被引用和加载并生成依赖关系图，所以loader出场了。Loader能让webpack能够去处理其他类型的文件（比如图片、字体文件、xml）。

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  }
}
test定义了需要被转化的文件或者文件类型
use定义了对该文件进行转化的loader的类型
```

### Plugins（插件）

> Plugins和loader是两个比较混淆和模糊的概念。Loader是用来转换和加载特定类型的文件，所以loader的执行层面是单个的源文件。而Plugins可以实现的功能更强大，Plugins可以监听webpack处理过程中的关键事件，深度集成进webpack的编译器，可以说Plugins的执行层面是整个构建过程。Plugins系统是构成webpack的主干，webpack自身也基于Plugins系统搭建，webpack有丰富的内置插件和外部插件，并且允许用户自定义插件。(与loader不同，使用plugins我们必须先引用该插件)。

```
const webpack = require('webpack') // 用于引用webpack内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin') // 外部插件
module.exports = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
  ]
}
```

## webpack 原理

> 1、初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；

> 2、开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；

> 3、确定入口：根据配置中的 entry 找出所有的入口文件；

> 4、编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；

> 5、完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；

> 6、输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；

> 7、输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
