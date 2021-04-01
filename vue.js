class Vue extends EventTarget{
  constructor(opts) {
    super()
    this.opts = opts
    this._data = opts.data
    this.observer(this._data)
    this.compile() // 初次渲染
  }
  observer(data) {
    let keys = Object.keys(data)
    let _this = this
    keys.forEach(key => {
      let value = data[key]
      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get() {
          console.log('get');
          return value
        },
        set(newValue) {
          console.log('set');
          // 触发自定义事件
          _this.dispatchEvent(new CustomEvent(key, {
            detail: newValue
          }))
          value = newValue
        }
      })
    })
  }
  compile() {
    let el = document.querySelector(this.opts.el)
    this.compileNode(el)
  }
  compileNode(el) {
    el.childNodes.forEach(node => {
      let {nodeType} = node
      if(nodeType === 3) {
        // 文本
        let {textContent} = node
        let regRep = /\{\{s*([^\{\}\s]+)\s*\}\}/g
        if(regRep.test(textContent)) {
          let $1 = RegExp.$1
          node.textContent = textContent.replace(regRep, this._data[$1])
          // 变量添加自定义事件
          this.addEventListener($1,({detail}) => {
            let oldVal = this._data[$1]
            node.textContent = node.textContent.replace(oldVal, detail)
          })
        }
      } else if (nodeType === 1) {
        if(node.childNodes.length > 0) {
          this.compileNode(node)
        }
      }
    })
  }
}