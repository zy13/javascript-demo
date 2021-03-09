function Dad(name,age) {
  this.name = name;
  this.age = age;
  this.money = "100000";
}
Dad.prototype.fn = function () {
  console.log("喜欢象棋");
}

function Son(name,age) {
  Dad.call(this,name,age);
  this.sex = "男";
}

let Link = function(){};
Link.prototype = Dad.prototype;

Son.prototype = new Link()
Son.prototype.constructor = Son
Son.prototype.fn = function() {
  console.log('喜欢篮球')
}

let zhangsan = new Son('张三')
zhangsan.fn()

let zhangyi = new Dad('张一')
zhangyi.fn()