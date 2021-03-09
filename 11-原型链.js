// 构造函数
function Foo(name){
  this.name = name;
  this.age = 20;
  // this.test = "你好111"
}

//原型对象；
Foo.prototype.fn = function () {
  console.log("f");
}

Foo.prototype.test = "hello";
Object.prototype.test = "你好222";
let newFoo = new Foo("张三");
console.log(newFoo, newFoo.test);

let obj = new Object();
console.log(Object.prototype.__proto__); // null