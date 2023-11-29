var num1Imput = document.getElementById('num1');
var num2Imput = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
function printResult(result) {
    console.log(result);
}
// const result = add(5, 3);
// let isDone = false;
// printResult(result);
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    var num1 = +num1Imput.value;
    var num2 = +num2Imput.value;
    var result = add(num1, num2);
    printResult(result);
});
