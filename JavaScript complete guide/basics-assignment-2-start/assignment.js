const task3Element = document.getElementById("task-3");
function greatings() {
  alert("Hello there!");
}
function hello(name) {
  alert(`Hello ${name}!`);
}

greatings();
hello("Alex");

task3Element.addEventListener("click", greatings);

function strings(str1, str2, str3) {
  const result = str1 + str2 + str3;
  return result;
}

alert(strings("Hi ", "I am ", "Alex"));
