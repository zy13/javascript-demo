// 继承；
// 1.call 2.apply 3.bind
function Dad(name,age) {
  this.name = name;
  this.age = age;
  this.money = "100000";
}

function Son(name,age) {
  // Dad.call(this,name,age);
  // Dad.apply(this,[name,age])
  Dad.bind(this)(name,age);
  this.sex = "男";
}

let zhangsan  = new Son("张三",20);
console.log(zhangsan.money)
console.log(zhangsan.sex);