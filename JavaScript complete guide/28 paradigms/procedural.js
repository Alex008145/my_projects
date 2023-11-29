const form = document.getElementById('user-input');

function signupHandler(event) {
  event.preventDefault();

  const userNameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const enteredUsername = userNameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    alert('Invalid input - username must not be empty!');
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert('Invalid input - password must be longer than 5 characters!');
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword,
  };
  console.log(user);
  console.log('Hi, I am ' + user.userName);
}

form.addEventListener('submit', signupHandler);
