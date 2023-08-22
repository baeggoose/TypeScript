// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText("hi"); // 문자열 hi
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>("안녕");

// 기존 타입 방식의 단점
// function logText(text) {
//   console.log(text);
//   return text;
// }
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }
// logText("a");
// const num = logNumber(10);
// 똑같은 로직을 반복해 유지보수성이 나쁨

// function logText(text: string | number) {
//   console.log(text);
// 유니온 타입 사용시 두 타입의 공통된 api 함수만 자동완성
//   return text;
// }
// const a =logText("a");
// 반환값 a의 타입이 여전히 string | number
// a.split('')
// split 사용시 에러
// logText(10);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
const str = logText<string>("abs");
str.split("");
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj: Dropdown = { value: "abs", selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<string> = { value: "abs", selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength<string>(["hi", "abs"]);

// 제네릭의 타입 제한 2 _ 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength({ length: 10 });

// 제네릭 타입 제한 3 _ keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption("name");
