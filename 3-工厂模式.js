// 字面量定义对象
let zhangsan = {
  name: '张三',
  age: 20,
  hobby() {
    console.log('喜欢打篮球')
  }
}

let lisi = {
  name: '李四',
  age: 21,
  hobby() {
    console.log('喜欢打足球')
  }
}

// 类（构造函数）：工厂模式(能生成同一类对象)
function Person(name, age, hobby) {
  let obj = {} // 添加原料
  obj.name = name 
  obj.age = age
  obj.hobby = function() {
    console.log(hobby)
  }
  // 加工原料
  return obj // 出厂
}

// 构造函数创建对象
let zs = Person('张三', 20, '喜欢篮球')
let ls = Person('李四', 21, '喜欢足球')

console.log(zs)
console.log(ls)