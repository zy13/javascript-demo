class Yase {
  constructor() {
    this.name = "亚瑟";
  }
}

class Skills {
  release() {
    console.log("释放技能");
  }
  hurt() {
    console.log("造成伤害");
  }
  run() {
    console.log("跑");
  }
}

// 混入模式；
function mixin(receivingClass, givingClass) {
  if (typeof arguments[2] !== "undefined") {
    for (let i = 2; i < arguments.length; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  }
}

mixin(Yase, Skills, "release", "run");
console.dir(Yase);

let newYase  = new Yase();
newYase.release();
newYase.run();