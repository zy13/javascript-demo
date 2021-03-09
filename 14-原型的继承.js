// 继承;
// 1.call 2.apply 3.bind
// 无法继承prototype中的属性和方法
function Dad(name,age) {
  this.name = name;
  this.age = age;
  this.money = "100000";
}
Dad.prototype.fn = function(){
  console.log("fn");
}
Dad.prototype.children = 2

function Son(name,age) {
  Dad.call(this,name,age);
  this.sex = "男";
}

let zhangsan  = new Son("张三",20);
console.log(zhangsan.money);
console.log(zhangsan.sex);
// console.log(zhangsan.children); // undefined
// zhangsan.fn(); // TypeError

// 原型继承
// 简单的原型继承，会影响父类，比如重写
Son.prototype = Dad.prototype;
let lisi =  new Son('李四', 23)
console.log(lisi.children);
lisi.fn();
Son.prototype.fn = function(){
  console.log("重写的fn");
}
lisi.fn();




