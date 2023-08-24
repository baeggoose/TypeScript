interface Dev {
  name: string;
  skill: string;
}
interface Man {
  name: string;
  age: number;
}

function introduce(): Dev | Man {
  return { name: "Ygoose", age: 10, skill: "run" };
}
var Ygoose = introduce();
// 유니온타입의 특징인 공통된 속성만 불러낼 수 있다 (skill은 오류남)
console.log(Ygoose.name);

// 타입 단언을 사용할 때
if ((Ygoose as Dev).skill) {
  var skill = (Ygoose as Dev).skill;
  console.log(skill);
} else if ((Ygoose as Man).age) {
  var age = (Ygoose as Man).age;
  console.log(age);
}

// 타입 가드를 사용할 때
// 타입 가드 정의
function isDev(target: Dev | Man): target is Dev {
  return (target as Dev).skill !== undefined;
}

if (isDev(Ygoose)) {
  console.log(Ygoose.skill);
} else {
  console.log(Ygoose.age);
}
