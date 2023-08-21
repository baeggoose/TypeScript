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
