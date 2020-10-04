// class构造函数
class MathAdd {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  add () {
    return this.x + this.y
  }
}
const a = new MathAdd(1, 3)
console.log(a.add())
// class继承方式
class Animal {
  constructor(name) {
    this.name = name
  }
  eat () {
    console.log(`${this.name} eat`)
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
    this.name = name
  }
  say () {
    console.log(`${this.name} say`)
  }
}

const dog = new Dog('哈士奇')
dog.eat()
dog.say()

// promise函数
function loadImg (src) {
  const promise = new Promise(function (resolve, reject) {
    let img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject()
    }
    img.src = src
  })
  return promise
}

const src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599418028394&di=5d71098d6268591e9a11f63cc72d29ee&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg'
const result = loadImg(src)
result.then(function (img) {
  console.log(img.width)
}, function () {
  console.log('failed')
})
result.then(function (img) {
  console.log(img.height)
})

// ES6其他常见功能
const obj = {
  a: 100,
  b: 200
}
for (let item in obj) {
  console.log(item)
}
console.log(item)