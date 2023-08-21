// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage("hi");
// logMessage(100);

var ggoose: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage("hi");
logMessage(100);

interface Dev {
  name: string;
  skill: string;
}
interface Human {
  name: string;
  age: number;
}

// function askSomenone(someone: Dev | Human) {
//   someone.name;
// }
// askSomenone({name:'백구',skill:'웹개발'})
// askSomenone({name:'구스',age:100})

function askSomenone(someone: Dev & Human) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomenone({ name: "백구", skill: "웹개발", age: 109 });
