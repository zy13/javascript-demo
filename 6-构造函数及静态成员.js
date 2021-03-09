/**
 * 构造函数
 * 1.首字母大写
 * 2.this指向实例化对象
 */
function Person(name){
  this.name = name;
  this.age =20;
  this.hobby = function(){
      console.log("喜欢篮球");
  }
}

// 静态成员（静态属性和静态方法）
// - 属于类/构造函数本身：只能构造函数自己调用，实例化对象无法调用；
// 静态方法里的this: 指向构造函数本身
Person.num = 0;
Person.fn = function(){
  console.log(this) // 指向构造函数本身
  console.log("fn");
}
Person.fn()

// new ： 实例化；
let zhangsan  = new Person("张三");
Person.num++
// zhangsan.num = 2
// zhangsan.num++
// console.log(zhangsan.num); // 3
console.log(zhangsan.num); // undifined
console.log(Person.num); // 1