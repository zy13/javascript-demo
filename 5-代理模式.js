let zhangsan = {
  sellHouse(price) {
    console.log("卖了" + price + "万元");
  }
}

// 中介 
let ProxySeller = {
  sellHouse(price, hasSold) {
    if (hasSold) {
      zhangsan.sellHouse(price - 2);
    } else {
      zhangsan.sellHouse(price);
    }
  }
}
zhangsan.sellHouse(100);
ProxySeller.sellHouse(100, true);

// 创建图片；
class CreateImage {
  constructor() {
    this.img = document.createElement("img");
    document.body.appendChild(this.img);
  }
  setSrc(src) {
    this.img.src = src;
  }
}

let src = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg";
// let myImg = new CreateImage();
// myImg.setSrc(src);

// 图片懒加载-图片代理
function proxyImg(src){
  let myImg = new CreateImage();
  myImg.setSrc("./loading.jpg");

  let img = new Image();
  img.src = src;
  img.onload = function(){
    myImg.setSrc(this.src);   
  }
}
proxyImg(src);
