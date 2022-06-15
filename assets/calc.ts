
const calculator = {
    displayNumber: 2,
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
}

const updateData = () => {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber.toString();
}

updateData()