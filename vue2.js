class Vue{
  a = 0
  constructor(opts){
    this.opts = opts;
    this._data = opts.data;
    this.Observer(this._data);
    this.compile();
  }
  Observer(data) {
    let keys = Object.keys(data);
    keys.forEach(key => {
      let value = data[key];
      let dep = new Dep();
      let _this = this
      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get() {
          console.log("get..");
          // 收集watch
          if(Dep.target){
            dep.addSub(Dep.target);
          }
          return value;
        },
        set(newValue) {
          _this.a += 1
          console.log(_this.a);
          dep.notify(newValue);
          value = newValue
        }
      })
    })
  }
  compile(){
    let el = document.querySelector(this.opts.el);
    this.compileNodes(el);
  }
  compileNodes(el){
    let childNodes = el.childNodes;
    childNodes.forEach(node=>{
      // 是文本还是标签区分开；
      if(node.nodeType===3){
        console.log("文本");
        let textContent = node.textContent;
        let reg = /\{\{\s*([^\{\}\s]+)\s*\}\}/g;
        if(reg.test(textContent)){
          let $1 = RegExp.$1;
          node.textContent = textContent.replace(reg,this._data[$1]);
          // 触发get,用于收集watcher,以及在更新变量时候，调用回调函数
          new Watcher(this._data,$1,(newValue)=>{
            let oldValue = this._data[$1];
            node.textContent =  node.textContent.replace(oldValue,newValue)
          })
        }
      }else if(node.nodeType===1){
        let attrs = node.attributes;
        [...attrs].forEach(attr=>{
          let attrName = attr.name;
          let attrValue = attr.value;
          console.log(attrValue);
          if(attrName==="v-model"){
            node.value = this._data[attrValue] ;
            node.addEventListener("input",e=>{
              let newValue = e.target.value;
              // 触发了set
              this._data[attrValue] = newValue
            })
          }
        })
        if(node.childNodes.length>0){
          this.compileNodes(node);
        }
      }
    })
  }
}

// 管理器
class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    this.subs.push(sub);
  }
  notify(newValue) {
    console.log(this.subs);
    this.subs.forEach(sub => {
      console.log(sub, newValue);
      sub.update(newValue);
    })
  }
}

// 观察者；
class Watcher {
  constructor(data,key,cb) {
    this.cb = cb;
    Dep.target  =  this;
    data[key]; //触发get
    Dep.target  = null;

  }
  update(newValue) {
    this.cb(newValue);
  }
}