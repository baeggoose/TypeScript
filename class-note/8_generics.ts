// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText("hi"); // 문자열 hi
// logText(true); // 진위값 true

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText<string>("안녕");
