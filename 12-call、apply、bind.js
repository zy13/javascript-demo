function foo(name,age) {
  // this指向？
  console.log(this,"姓名是"+name+"年龄是"+age);
}
foo(); // this->window


// Function对象：修改函数内部的this指向，即指定this的调用对象
// 1.call 2.apply 3.bind
// 三者均可用于将函数内部的this，绑定到指定的调用对象
console.dir(foo) 

// 如何将foo函数中的this指向obj?
let obj = {
  name:"张三"
}
// foo函数中this指向obj
// 1.call：参数个数没有上限
// 第一个参数为this指定的对象，
// 第n个参数为传给foo函数的实参
foo.call(obj,"张三",20); 

// 2.apply：最多有两个参数
// 第一个参数为this指定的对象，
// 第二个参数为数组，传给foo函数的实参
foo.apply(obj,["张三",20]);

// 2.bind：执行两次
// 执行第一次，传入this指向的对象,返回foo函数本身
// 执行第二次，传入foo函数的实参，参数个数没有上限
foo.bind(obj)("张三",20);

console.log(foo.bind(obj))