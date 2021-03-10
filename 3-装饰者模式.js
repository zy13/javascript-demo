// 给对象或者函数添加额外信息的； （扩展）；
// 继承 extends ：扩展；

class Yase {
  constructor() {
    this.name = "亚瑟";
  }
  // 释放技能同时造成伤害； 
  // 继承： 1.可能会扩展多个子类出来；2.和父类耦合性强 3.没有装饰者链 
  fire() {
    console.log("释放了技能");
  }
}

// 装饰者模式
function hurt() {
  console.log("造成了100点伤害");
}
Function.prototype.decoratorFn = function (fn) {
  this();
  fn();
}
let yase = new Yase();
// yase.fire();
// yase.fire.decoratorFn(hurt);


// 装饰者链；
function fn1(arg) {
  console.log("fn1.." + arg)
}

function fn2(arg) {
  console.log("fn2.." + arg)
}

function fn3(arg) {
  console.log("fn3.." + arg);
}
Function.prototype.after = function (fn) {
  let that = this;
  return function (...args) {
    that(...args);
    fn(...args);
  }
}
// let yase  = new Yase();
yase.fire.after(fn1).after(fn2).after(fn3)("hello");