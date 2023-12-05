let appId = 'abc';
const button = document.querySelector('button');

function clickHandler(message: string) {
  let userName = 'Max';
  console.log('Clicked! ' + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'Hi there!'));
}
