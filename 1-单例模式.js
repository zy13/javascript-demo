// 单例
// 简单的单例
let obj = {
  myname: "张三",
  fn() {
    console.log("fn");
  }
}

// 单例模式: 通过静态属性
class Person {
  static Instance;
  constructor(name) {
    if (Person.Instance) {
      return Person.Instance;
    }
    Person.Instance = this;
    this.name = name;
    this.age = 20;
  }
}

let zhangsan = new Person("张三");
let lisi = new Person("李四");
console.log(zhangsan === lisi);

// 1.通用单例模式，高阶函数 
// 2.单一原则
class PersonA {
  constructor(name) {
    this.name = name;
  }
}
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// 高阶函数：有函数作为输入或者是输出的函数；
// 把非单例变成单例
function getSingle(Fn) {
  let instance;
  return function (...args) {
    if (!instance) {
      instance = new Fn(...args);
    }
    return instance;
  }
}

const silgelPerson = getSingle(PersonA);
let zhangsan1 = new silgelPerson("张三");
let lisi1 = new silgelPerson("李四");
console.log(zhangsan1 === lisi1);

class CreateDailog {
  constructor(html) {
    this.html = html;
    this.createDailog();
  }
  createDailog() {
    let div = document.createElement("div");
    div.innerHTML = this.html;
    document.body.appendChild(div);
  }
}

let singleDailog = getSingle(CreateDailog);
singleDailog("div1");
singleDailog("div2");
console.log(singleDailog("div1"),singleDailog("div1"));