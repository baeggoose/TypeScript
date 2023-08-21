interface human {
  name: string;
  age: number;
}

// type human = {
//   name: string;
//   age: number;
// };

var baeggoose: human = {
  name: "구스",
  age: 10,
};

type MyString = string;
var STR: MyString = "hi";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
