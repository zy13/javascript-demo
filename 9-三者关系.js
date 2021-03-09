let temp;

// 构造函数
function Person(name){
  this.name = name;
  this.age = 20;
}

// 原型
Person.prototype.fn = function(){
  console.log("fn");
  temp = this; // this指向谁？
  console.log(333, this === Person) // false
  console.log(333, this === Person.prototype) // false
}

console.log(Person.prototype.constructor===Person)
let zhangsan = new Person("张三")
zhangsan.fn();

console.log(zhangsan===temp) // true
console.log(zhangsan.__proto__===temp) // false
console.log(zhangsan === Person.prototype)