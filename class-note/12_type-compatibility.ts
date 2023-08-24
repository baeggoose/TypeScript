// 타임 호환 예제 _ 인터페이스 클래스
interface Dev {
  name: string;
  skill: string;
}
// interface Man {
//   name: string;
// }
class Man {
  name: string;
}

var developer: Dev;
var human: Man;
developer = new Man();
// human = developer;

// 타임 호환 예제 _ 함수 제네릭
var add = function (a: number) {
  //
};
var sum = function (a: number, b: number) {
  //
};
sum = add;
// add = sum;

interface Empty<T> {
  //
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;
