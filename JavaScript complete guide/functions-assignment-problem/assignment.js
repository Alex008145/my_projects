const sayHello = (name) => console.log("Hi " + name);

sayHello("Alex");

const sayHello2 = (greet, name) => console.log(greet + " " + name);
sayHello2("Hello", "Alex");

const sayHello3 = () => console.log("Hey Alex");
sayHello3();

const sayHello4 = (name) => "Hi " + name;

console.log(sayHello4("Alex"));

const sayHello5 = (name, text = "Hi") => {
  console.log(text + " " + name);
};
sayHello5("5 Alex");
sayHello5("5 Alex", "Hello");

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log("All not empty");
  },
  "Hello",
  "12",
  "afdaf"
);
