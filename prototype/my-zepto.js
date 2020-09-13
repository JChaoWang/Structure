(function (window) {

  var zepto = {}

  zepto.Z = function (dom, selector) {
    return new Z(dom, selector)
  }

  function Z(dom, selector) {
    var i, len = dom ? dom.length : 0
    for (var i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.lengh = len
    this.selector = selector || ''
  }

  zepto.init = function (selector) {
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))
    return zepto.Z(dom, selector)
  }

  var $ = function (selector) {
    return zepto.init(selector)
  }
  window.$ = $

  $.fn = {
    // 定义jQuery、zepto相关的api在这里定义
    css: function (key, value) {
      alert('css', key, value)
    },
    html: function (value) {
      alert('html', value)
    }
  }
  Z.prototype = $.fn
})(window)