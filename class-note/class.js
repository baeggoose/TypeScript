// 생성자 함수 (아래 클래스 예제와 동일하게 생성)
function Man(name, age) {
  this.name;
  this.age;
}
var Bgs = new Man("백구스", 109);

// ES2015 (ES6) 문법 클래스
class Man {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다");
    this.name = name;
    this.age = age;
  }
}

var baeggoose = new Man("백구스", 109); //생성 되었습니다.
console.log(baeggoose);
