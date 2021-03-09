function Person(name){
  this.name = name;
  this.age = 20;
  // this.hobby = function(){
  //     console.log("喜欢篮球");
  // }
}

// 公共空间-原型；
Person.prototype.hobby = function(){
  console.log("喜欢篮球");
}
Person.prototype.fn = function(){
  console.log("fn");
}
// 复写原型对象
Person.prototype = {
  constructor:Person,
  hobby:function(){
    console.log("hobby");
  }
}

// 原型的固有属性constructor：
// 通过constructor可以知道实例化对象属于哪个构造函数；
// 对象的__proto__是构造函数Person的prototype
console.log( Person.prototype.constructor===Person);
let zhangsan = new Person("张三");
console.log(zhangsan.constructor===Person);
console.log(zhangsan);
console.log(zhangsan.__proto__===Person.prototype);

let lisi = new Person("李四");
console.log(zhangsan.hobby===lisi.hobby); // true

// 判断类型；
let str1 = new String("abd");
let str2 = "abc";
console.log(str1.constructor===String);
console.log(str2.constructor===String);