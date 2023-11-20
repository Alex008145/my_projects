const sayHello = (name) => {
  console.log('Hi ' + name);
};

const sayHello2 = (name, phrase = 'Hi') => {
  console.log(phrase + ' ' + name);
};

const sayHello3 = () => {
  console.log('Hi Alex');
};

const sayHello4 = (name) => 'Hi ' + name;

sayHello('Alex');
sayHello2('John', 'Hello');
sayHello3();
console.log(sayHello4('Sten'));

sayHello2('Alex');

const checkInput = (cb, ...args) => {
  let emptyText = false;
  for (const text of args) {
    if (!text) {
      emptyText = true;
      break;
    }
  }
  if (!emptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log('All not empty');
  },
  'Hello',
  3,
  'Thanks',
  8,
  ''
);
