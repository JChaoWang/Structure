function defineReactive(data) {
  Object.keys(data).forEach((key) => {
    let val = data[key];
    let dep = new Dependence();
    Object.defineProperty(data, key, {
      get() {
        dep.push();
        return val;
      },
      set(newVal) {
        dep.notify(newVal);
        val = newVal;
      },
    });
  });
  return data;
}

class Dependence {
  static target = null;
  targetNodes = [];
  push() {
    if (Dependence.target) {
      this.targetNodes.push(Dependence.target);
    }
  }
  notify(value) {
    this.targetNodes.forEach((node) => {
      node.textContent = value;
    });
  }
}

function compile(data, template) {
  let children = template.children;
  for (let i = 0; i < children.length; i++) {
    let childEl = children[i];
    if (childEl.hasAttribute('v-model')) {
      let attr = childEl.getAttribute('v-model');
      childEl.value = data[attr];
      childEl.addEventListener('input', function (ev) {
        data[attr] = ev.target.value;
      });
    } else {
      const content = childEl.textContent;
      const regexp = /{{(.+?)\}\}/;
      const match = content?.match(regexp);
      if (match) {
        const key = match[1];
        Dependence.target = childEl;
        childEl.textContent = data[key];
        Dependence.target = null;
      }
    }
  }
}

class Vue {
  constructor({ el, data }) {
    let templateNode = document.querySelector(el);
    const observableData = defineReactive(data);
    compile(observableData, templateNode);
  }
}
