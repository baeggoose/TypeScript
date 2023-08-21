interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
var baeggoose: User = {
  age: 28,
  name: "백구스",
};

// 함수에 활용한 인터페이스
function getUser(user: User) {
  console.log(user);
}
const goose = {
  name: "구스",
  age: 100,
};
getUser(goose);

// 함수의 스펙(구조)에 활용한 인터페이스
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};
