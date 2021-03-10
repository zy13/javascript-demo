// 工厂模式：抽象了对象的创建过程；

class P1 {
  constructor() {
    this.name = "手机";
  }
}

class P2 {
  constructor() {
    this.name = "电脑";
  }
}

let xiaomi = new P1();
let mac = new P2();

// 告诉我需要什么产品（产品名），工厂模式帮你生产
function Factory(pName) {
  switch (pName) {
    case 'xiaomi':
      return new P1();
      break;
    case 'mac':
      return new P2();
      break;
    default:
      console.log("没有产品");
      break;
  }
}

let xiaoli  = Factory("mac");
console.log(xiaoli);