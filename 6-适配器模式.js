function getUsers() {
  return [
    {
      name: "zhangsan",
      age: 20
    },
    {
      name: "lisi",
      age: 21
    }
  ]
}

// 得到 ---> [ {zhangsan: 20}, {lisi: 21} ];

function Adaptor(users) {
  let arr = [];
  for (let i = 0; i < users.length; i++) {
    let obj = {
      [users[i].name]: users[i].age
    }
    arr.push(obj);
  }
  return arr;
}

let res =  Adaptor(getUsers());
console.log(res);