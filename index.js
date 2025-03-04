const buttonOperators = document.querySelectorAll(".buttonOperator");
const buttons = document.querySelectorAll(".button");
const buttonEnter = document.querySelector(".buttonEnter");
//Getting links to the HTML button tags to a variable


buttonOperators.forEach(button => {
    button.addEventListener("click", (event) => {
        let operatorVal = event.target.value
        operatorCheck(operatorVal)
        clear()
    });
});
//on click set the target value (+, / ect) to operatorVal variable
//call operatorCheck function with operatorVal

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let buttonVal = event.target.value
        updateResult(buttonVal)
    });
});
//on click set the target value (6, 9 ect) to buttonVal variable
//call the updateResult function with buttonVal

buttonEnter.addEventListener("click", (event) => {
    calc();
    document.getElementById("result").textContent = currentNum
});
//cals the calc function to do the calculations with inputs provided
//changes the result the that of currentNum

let prevNum = 0
let operator = ""
let currentNum = 0

const resultDefault = document.getElementById("result")

const updateResult = (buttonVal) => {
    multiNumber(buttonVal)
    document.getElementById("result").textContent = currentNum
}
//function using the buttonVal to update the currentNum displayed in results area

const multiNumber = (buttonVal) => {
    if (currentNum === 0) {
        currentNum = buttonVal
    } else {
        currentNum = parseFloat(currentNum + buttonVal)
    }
}
//if else used to determine if more than one number key is pressed, if so add it concurently
//parseInt used to change buttonVal from a string to int (event.target.value returns a string)

const operatorCheck = (operatorVal) => {
    prevNum = currentNum
    operator = operatorVal
    currentNum = "0"    
}
//setting the value of currentNum to prevNum so we can then take in a new num, storing the val of operatorVal in operator
//from the onclick handler and currentNum to empty string ready for a new num

const calc = () => {
    let result = ""

    if (operator === "+") {
        result = parseFloat(prevNum) + parseFloat(currentNum)
    } else if (operator === "-") {
        result = prevNum - currentNum
    } else if (operator === "/") {
        result = prevNum / currentNum
    } else if (operator === "*") {
        result = prevNum * currentNum
    } else {
        return
    }
    currentNum = result
    operator = ""
    
}
//declaring result to an empty sting, then used to store the value of prevNum and currentNum after calculation
//if statement used to determine the correct mathmatical operator. Once if statement finished clear operator and store result in currentNum

const clear = () => {
    if( operator === "C") {
    currentNum = 0
    operator = ""
    prevNum = 0
    document.getElementById("result").textContent = currentNum
    }
}
//basically the same logic as the calc funciton, if the operator is equal to C then clear all stored variables
//and set the displayed number to 0 again

const decimal = document.querySelector(".decimal")

decimal.addEventListener("click", (event) => {
    let decimalVal = event.target.value
    inputDecimal(decimalVal)
});

inputDecimal = (decimalVal) => {
        currentNum += decimalVal
        document.getElementById("result").textContent = currentNum
    }
//Logic for the decimal point, get link from HTML, get value of decimal and store in decimalVal
//use decimalVal as perameter for function. Function adds the decimalVal to currentNum and prints to result 