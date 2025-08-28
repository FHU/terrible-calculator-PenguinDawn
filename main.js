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

    if(isNaN(num1)) {
        answer = "Input 1 is a wrong type or missing!";
        result.innerText = answer;
        return;
    } else if(isNaN(num2)) {
        answer = "Input 2 is a wrong type or missing!";
        result.innerText = answer;
        return;
    } 


    if(used === "+") {
        answer = num1 + num2;
    } else if(used === "-") {
        answer = num1 - num2;
    } else if(used === "*") {
        answer = num1 * num2;
    } else if (used === "/"){
        answer = num1 / num2;
    }

    
    // else if(typeof(num1) != "int" || typeof(num2) != "int") {
    //     answer = "One of the inputs is a wrong type!";
    // }

    result.innerText = answer;
}

calculateButton.addEventListener("click", calculate);