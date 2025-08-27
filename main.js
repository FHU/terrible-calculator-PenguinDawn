// Step 1 - find elements we need to interact with
const num1Holder= document.getElementById("number1");
const num2Holder= document.getElementById("number2");
const operatorSelect = document.getElementById("operator");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");



function calculate() {
    let num1 = parseFloat(num1Holder.value);
    let num2 = parseFloat(num2Holder.value);
    let used = operatorSelect.value;
    let answer = 0;

    if(used === "+") {
        answer = num1 + num2;
    } else if(used === "-") {
        answer = num1 - num2;
    } else if(used === "*") {
        answer = num1 * num2;
    } else if (used === "/"){
        answer = num1 / num2;
    }

    result.innerText = answer;
}

calculateButton.addEventListener("click", calculate);