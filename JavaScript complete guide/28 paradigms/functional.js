const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}
function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

function createUser(userName, userPassword) {
  if (!validate(userName, REQUIRED)) {
    throw new Error('Invalid input - username must not be empty!');
  }
  if (!validate(userPassword, MIN_LENGTH, 5)) {
    throw new Error(
      'Invalid input - password must be longer than 5 characters!'
    );
  }
  return {
    userName: userName,
    password: userPassword,
  };
}

function greetUser(user) {
  console.log('Hi, I am ' + user.userName);
}

function signupHandler(event) {
  event.preventDefault();

  const enteredUsername = getUserInput('username');
  const enteredPassword = getUserInput('password');

  try {
    const newUser = createUser(enteredUsername, enteredPassword);

    greetUser(newUser);
  } catch (error) {
    alert(error.message);
    return;
  }
}

function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signupHandler);
