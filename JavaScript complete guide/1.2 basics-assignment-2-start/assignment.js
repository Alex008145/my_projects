const task3Element = document.getElementById("task-3");

function first() {
  alert("First function");
}
function userName(name) {
  alert(name);
}

first();
userName("Alex");

task3Element.addEventListener("click", first);

function concatinatedText(text1, text2, text3) {
  let result = text1 + text2 + text3;
  return result;
}

const combinedString = concatinatedText("I ", "am ", "Alex");
alert(combinedString);
