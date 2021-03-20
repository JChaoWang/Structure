# 面试题

- 实现一个new操作符

```
new (fuc) => {
  let res = {}
  if (fuc.prototype !== null) {
    res.__proto__ func.prototype
  }
  let ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeOf ret === 'object' || typeOf ret === 'function') && ret !== null) {
    return ret
  }
  return res
}
let obj = new(A, 1, 2);
console.log(obj);
```

- 实现一个JSON.stringify

```
function jsonstringify(obj){
　let type = typeOf obj;
　if(type !== 'object'){
　　if(/string|undefined|function/.test(type)){
　　　obj = '"' + obj +'"'
　　}
　　return String(obj)
　}else{
　　let arr = Array.isArray(obj);
　　let json =[];
　　for(let i in obj){
　　　let j = obj[i];
　　　let type = typeof j
　　　if(/string|undefined|function/.test(type)){
　　　　j = '"' + j +'"'
　　　}else if(type == 'object'){
　　　  j = jsonstringify(j)
　　　}
　　json.push((arr ? "" : '"' + i + '":') + String(j));
　}
  return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
 }
}
jsonstringify({x:1})  //"{"x":1}"
jsonstringify({x:undefined})  //"{"x":"undefined"}"
jsonstringify([false,'false','true',true,12])  //"[false,"false","true",true,12]"
```

- 实现一个JSON.stringify

```
function jsonstringify(obj){
　let type = typeOf obj;
　if(type !== 'object'){
　　if(/string|undefined|function/.test(type)){
　　　obj = '"' + obj +'"'
　　}
　　return String(obj)
　}else{
　　let arr = Array.isArray(obj);
　　let json =[];
　　for(let i in obj){
　　　let j = obj[i];
　　　let type = typeof j
　　　if(/string|undefined|function/.test(type)){
　　　　j = '"' + j +'"'
　　　}else if(type == 'object'){
　　　  j = jsonstringify(j)
　　　}
　　json.push((arr ? "" : '"' + i + '":') + String(j));
　}
  return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
 }
}
jsonstringify({x:1})  //"{"x":1}"
jsonstringify({x:undefined})  //"{"x":"undefined"}"
jsonstringify([false,'false','true',true,12])  //"[false,"false","true",true,12]"
```

- 手写Promise

```
function Promi(executor) {
    let _this = this;
    _this.$$status = 'pending';
    _this.failCallBack = undefined;
    _this.successCallback = undefined;
    _this.error = undefined;
    setTimeout(_ => {
        try {
            executor(_this.onResolve.bind(_this), _this.onReject.bind(_this))
        } catch (e) {
            _this.error = e;
            if (_this.callBackDefer && _this.callBackDefer.fail) {
                _this.callBackDefer.fail(e)
            } else if (_this._catch) {
                _this._catch(e)
            } else {
                throw new Error('un catch')
            }
        }
    })
}

Promi.prototype = {
    constructor: Promi,
    onResolve: function(params) {
        if (this.$$status === 'pending') {
            this.$$status = 'success';
            this.resolve(params)
        }
    },
    resolve: function(params) {
        let _this = this;
        let successCallback = _this.successCallback;
        if (successCallback) {
            _this.defer(successCallback.bind(_this, params));
        }
    },
    defer: function(callBack) {
        let _this = this;
        let result;
        let defer = _this.callBackDefer.success;
        if (_this.$$status === 'fail' && !_this.catchErrorFunc) {
            defer = _this.callBackDefer.fail;
        }
        try {
            result = callBack();
        } catch (e) {
            result = e;
            defer = _this.callBackDefer.fail;
        }
        if (result && result instanceof Promi) {
            result.then(_this.callBackDefer.success, _this.callBackDefer.fail);
            return '';
        }
        defer(result)
    },
    onReject: function(error) {
        if (this.$$status === 'pending') {
            this.$$status = 'fail';
            this.reject(error)
        }
    },
    reject: function(error) {
        let _this = this;
        _this.error = error;
        let failCallBack = _this.failCallBack;
        let _catch = _this._catch;
        if (failCallBack) {
            _this.defer(failCallBack.bind(_this, error));
        } else if (_catch) {
            _catch(error)
        } else {
            setTimeout(_ => { throw new Error('un catch promise') }, 0)
        }
    },
    then: function(success = () => {}, fail) {
        let _this = this;
        let resetFail = e => e;
        if (fail) {
            resetFail = fail;
            _this.catchErrorFunc = true;
        }
        let newPromise = new Promi(_ => {});
        _this.callBackDefer = {
            success: newPromise.onResolve.bind(newPromise),
            fail: newPromise.onReject.bind(newPromise)
        };
        _this.successCallback = success;
        _this.failCallBack = resetFail;
        return newPromise
    },
    catch: function(catchCallBack = () => {}) {
        this._catch = catchCallBack
    }
};   


// 测试代码

task()
    .then(res => {
        console.log('1:' + res)
        return '第一个then'
    })
    .then(res => {
        return new Promi(res => {
            setTimeout(_ => res('第二个then'), 3000)
        })
    }).then(res => {
        console.log(res)
   })
    .then(res => {
        return new Promi((suc, fail) => {
            setTimeout(_ => {
                fail('then失败')
           }, 400)
        })
    })
    .then(res => {
        console.log(iko)
   })
    .then(_ => {}, () => {
       return new Promi(function(res, rej) {
           setTimeout(_ => rej('promise reject'), 3000)
       })
   })
    .then()
    .then()
    .then(_ => {},
        rej => {
            console.log(rej);
            return rej + '处理完成'
        })
    .then(res => {
        console.log(res);
        // 故意出错
        console.log(ppppppp)
    })
    .then(res => {}, rej => {
        console.log(rej);
        // 再次抛错
        console.log(oooooo)
    }).catch(e => {
        console.log(e)
   })
```

- Promise.all()

```
function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!isArray(promises)) {
            return reject(new TypeError('arguments must be an array'));
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedValues = new Array(promiseNum);
        for (var i = 0; i < promiseNum; i++) {
            (function (i) {
                Promise.resolve(promises[i]).then(function (value) {
                    resolvedCounter++
                    resolvedValues[i] = value
                    if (resolvedCounter == promiseNum) {
                        return resolve(resolvedValues)
                    }
                }, function (reason) {
                    return reject(reason)
                })
            })(i)
        }
    })
}
```

- 手写JS深拷贝

```
function deepCopy(obj){
    //判断是否是简单数据类型，
    if(typeof obj == "object"){
        //复杂数据类型
        var result = obj.constructor == Array ? [] : {};
        for(let i in obj){
            result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
        }
    }else {
        //简单数据类型 直接 == 赋值
        var result = obj;
    }
    return result;
}
```

- 手写instanceOf(用于判断一个变量是否某个对象的实例)

```
function myInstance(left, right) {
    var proto = left.__proto__;
    var prototype = right.prototype;

    if (proto === null) {
        return false;
    } else if (proto === prototype) {
        return true;
    } else {
        return myInstance(proto, right);
    }
}
var a = {};
console.log(myInstance(a,Array)); //false
console.log(myInstance({}, Object)) //true
```
