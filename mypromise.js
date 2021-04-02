export default class MyPromise{
  constructor(handle) {
    this['[[PromiseState]]'] = 'pending'
    this['[[PromiseResult]]'] = 'undefined'
    // this.resolveFn = undefined
    // this.rejectedFn = undefined
    this.resolveFnQueue = []
    this.rejectedFnQueue = []
    handle(this._resolve.bind(this), this._reject.bind(this))
  }
  _resolve(val) {
    // 1.改变状态 2、改变value
    this['[[PromiseState]]'] = 'fulfilled'
    this['[[PromiseResult]]'] = val
    // 异步执行resolveFn，setTimeout为宏任务
    // setTimeout(() => {
    //   // this.resolveFn(val)
    //   // 推出一个执行一个
    //   let cb;
    //   while(cb = this.resolveFnQueue.shift()) {
    //     cb(val)
    //   }
    // })
    // MutationObserver模拟微任务
    let run = () => {
      let cb;
      while(cb = this.resolveFnQueue.shift()) {
        cb(val)
      }
    }
    let mo = new MutationObserver(run)
    mo.observe(document.body,{
      attributes: true
    })
    document.body.setAttribute('kkb','kkb')
  }
  _reject(err) {
    this['[[PromiseState]]'] = 'rejected'
    this['[[PromiseResult]]'] = err
    // setTimeout(() => {
    //   // this.rejectedFn(err)
    //   let cb;
    //   while(cb = this.rejectedFnQueue.shift()) {
    //     cb(err)
    //   }
    // })
    let run = () => {
      let cb;
      while(cb = this.rejectedFnQueue.shift()) {
        cb(err)
      }
    }
    let mo = new MutationObserver(run)
    mo.observe(document.body,{
      attributes: true
    })
    document.body.setAttribute('kkb','kkb')
  }
  then(onResolve, onRejected){
    // then执行的时机，在_resolve、 _rejected执行回调
    // if(this["[[PromiseState]]"] === 'fulfilled') {
    //   onResolve && onResolve(this["[[PromiseResult]]"])
    // } else if(this["[[PromiseState]]"] === 'rejected') {
    //   onRejected && onRejected(this['[[PromiseResult]]'])
    // }
    // onResolve && onResolve(this["[[PromiseResult]]"])

    // this.resolveFn = onResolve
    // this.rejectedFn = onRejected
    return new MyPromise((resolve, reject) => {
      let onResolveFn = (val) => {
        let res = onResolve && onResolve(val)
        if(res instanceof MyPromise) {
          // res.then(rs => {
          //   resolve(rs)
          // })
          // 上面的简写
          res.then(resolve)
        } else {
          resolve(res)
        }
      }
      let rejectedFn = (err) => {
        onRejected && onRejected()
        reject(err)
      }
      this.resolveFnQueue.push(onResolveFn)
      this.rejectedFnQueue.push(rejectedFn)
    })
  }
  static resolve(val) {
    return new MyPromise(resolve => {
      resolve(val)
    })
  }
  static reject(err) {
    return new MyPromise((undifined, reject) => {
      reject(err)
    })
  }
  static race(list) {
    return new MyPromise((resolve, reject) => {
      console.log(list);
      list.forEach(item => {
        item.then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      })
    })
  }
  static all(list) {
    return new MyPromise((resolve, reject) => {
      let resArr = []
      let num = 0
      list.forEach(item => {
        item.then(res => {
          num++
          resArr.push(res)
          if(num === resArr.length) {
            resolve(resArr)
          }
        }, err => {
          reject(err)
        })
      })
    })
  }
  // static allSettled(list) {
  //   let resArr = new Array(list.length)
  //   let num = 0
  //   return new MyPromise((resolve) => {
  //     list.forEach((item,key) => {
  //       let obj = {}
  //       item.then(res => {
  //         console.log(this['[[PromiseState]]'] );
  //         obj['state'] = this['[[PromiseState]]']
  //         obj['value'] = res
  //         resArr[key] = obj
  //         num++
  //         if(num===list.length){
  //           resolve(resArr)
  //         }
  //       }, err=>{
  //         obj['state'] = this['[[PromiseState]]']
  //         obj['value'] = err
  //         resArr[key] = obj
  //         num++
  //         if(num===list.length){
  //           resolve(resArr)
  //         }
  //       })
  //     })
  //   })
  // }
  static allSettled(list){
    let resArr = new Array(list.length);
    let num = 0
    return new MyPromise(resolve=>{
      list.forEach((item,key)=>{
          let obj = {};
          item.then(res=>{
              obj['status'] = this['[[PromiseState]]'];
              obj.value = res;
              resArr[key] = obj;
              num++
              if(num===list.length){
                  resolve(resArr); 
              }
          },err=>{
              obj['status'] = this['[[PromiseState]]'];
              obj.reson = err;
              resArr[key] = obj;
              num++
              if(num===list.length){
                  resolve(resArr); 
              }
          })
      })
  });

  }
}