// 타입 추론 기본 1
var a = "ㅁ";

function get1B(b = 10) {
  var c = "hi";
  return b + c;
}

// 타입 추론 기본 1
interface Dropdown<T> {
  value: T;
  title: string;
}
var shoppingItem: Dropdown<string> = {
  value: "abs",
  title: "shop",
};
