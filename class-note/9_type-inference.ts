// 타입 추론 기본 1
var a = "ㅁ";

function get1B(b = 10) {
  var c = "hi";
  return b + c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown<string> = {
//   value: "abs",
//   title: "shop",
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown<K> {
  tag: K;
  description: string;
}

var shoppingItem: DetailedDropdown<number> = {
  title: "shop",
  description: "blah",
  value: 22,
  tag: 1,
};

// Best Common Type
var arr = [1, 2, true, true, "a"];
