export default class MyPromise{
  constructor(handle) {
    this['[[PromiseState]]'] = 'pending'
    this['[[PromiseResult]]'] = undefined
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
    // 异步执行resolveFn
    setTimeout(() => {
      // this.resolveFn(val)
      // 推出一个执行一个
      let cb;
      while(cb = this.resolveFnQueue.shift()) {
        cb(val)
      }
    })
  }
  _reject(err) {
    this['[[PromiseState]]'] = 'rejected'
    this['[[PromiseResult]]'] = err
    setTimeout(() => {
      // this.rejectedFn(err)
      let cb;
      while(cb = this.rejectedFnQueue.shift()) {
        cb(err)
      }
    })
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

    this.resolveFnQueue.push(onResolve)
    this.rejectedFnQueue.push(onRejected)
  }
}