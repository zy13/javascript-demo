/**
 * 6、构造函数性能
 * - 公共方法因实例化对象不同而不同
 * - 每实例化一个对象，就需要内存空间创建一个公共方法，
 * - 会浪费内存空间
 */
function Person(name){
  this.name = name;
  this.age = 20;
  this.hobby = function(){
      console.log("喜欢篮球");
  }
}

let zhangsan = new Person("张三");
let lisi = new Person("李四");

console.log(zhangsan.hobby===lisi.hobby); // false