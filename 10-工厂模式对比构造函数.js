// 工厂模式
function Person(name){
  let obj = {};
  obj.name = name;
  obj.age = 20;
  obj.fn = function(){
      console.log("fn..");
  }
}
let zhangsan1  = Person("张三");
// console.log(zhangsan.prototype) // TypeError
// console.log(zhangsan.constructor===Person) // TypeError

// 构造函数；
function Person(){
  this.name = name;
  this.age = 20;
}
Person.prototype.fn = function(){
  console.log("fn...");
}
let zhangsan  = new Person("张三");
console.log( zhangsan.constructor===Person); // true

let str = "abc";
console.log(str.constructor===String);