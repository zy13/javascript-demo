// 1.执行函数；
// 2.自动创建一个空对象； 
// 3.把空对象和this绑定 
// 4.如果没有返还，隐式返还this；

let str1 = "123";
let str2 = new String('123');

console.log(str1 == str2) // true


// 1.new执行函数
function test(){
  console.log("test");
}
test(); // test
new test(); // test
new test; // test


// 2.自动创建一个空对象； 
// 3.把空对象和this绑定 
// 4.如果没有返还，隐式返还this；
function Test(){
    // let obj = {};  === this; 
    // ...
    // return this; 
}
new Test();