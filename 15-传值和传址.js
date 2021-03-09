//复杂数据类型：传址;
let DadProto = {
  name:"张三",
  age:20
}

let SonProto = DadProto;
SonProto.name = "李四";
console.log(SonProto);
console.log(DadProto);

// 简单数据类型：传值；
let a = 10;
let b = a;
b = 20;
console.log(a);

// 浅拷贝拷贝；
// 1.JSON序列号
let DadPrototype = {
  name:"张三",
  age:20,
  fn:function() {
    console.log("fn..");
  },
  test:undefined
}

// JSON序列化
// 如果拷贝对象包含函数，或者undefined等值，此方法就会出现问题
// 无法拷贝函数和undefined的属性
let SonPrototype = JSON.parse(JSON.stringify(DadPrototype));
SonPrototype.name = "李四";
console.log(DadPrototype);
console.log(SonPrototype);

// 深拷贝：递归遍历
let obj = {
  name: '张三',
  age: 20,
  fn: function() {
    console.log('fn...')
  },
  test: undefined,
  arr: [],
  sub: {
    children: 2,
    monery: 10000,
    houses: []
  }
}
let newObj = deepCopy(obj)
newObj.name = '李四'
console.log(newObj,obj)

function deepCopy(obj) {
  let newObj = Array.isArray(obj) ? [] : {}
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      if(typeof obj[key] === 'object') {
        newObj[key] = deepCopy(obj[key])
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  return newObj
}