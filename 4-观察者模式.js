function fn1() {
  console.log("fn1");
}

function fn2() {
  console.log("fn2");
}

// 1.统一管理事件（解耦） 2.惰性执行，延迟执行；
document.addEventListener("click",function(){
  fn1();
})
document.addEventListener("click",fn2);

let handle = {};
handle{"myevent1":[fn1,fn2...],"myevent2":[fn1,fn2...]}

// 添加事件
function addEvent(eventName,fn){
  if(typeof handle[eventName] === "undefined"){
    handle[eventName] = [];
  }
  handle[eventName].push(fn);
}

// 触发
function trigger(eventName){
  handle[eventName].forEach(fn=>{
    fn();
  })
}

addEvent("event1",fn1);
addEvent("event1",fn2);

trigger("event1");
