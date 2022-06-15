const calculator = {
  displayNumber: 0,
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false,
};
const updateData = () => {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
};

const clearCalculator = () => {
  calculator.displayNumber = 0;
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
};

const handleInput = (digit) => {
  if (calculator.displayNumber === 0) {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
};


const inverseNumber = () => {
  if(calculator.displayNumber === 0) {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}

const performCalculation = () => {
  
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", (event) => {
    const target = event.target;

    if(target.classList.contains('clear')) {
        clearCalculator()
        updateData()
        return;
    }

    if(target.classList.contains('negative')) {
      inverseNumber();
      updateData();
      return
    }

    if(target.classList.contains('equals')) {
      performCalculation();
      updateData();
      return;
    }
    if(target.classList.contains('operator')) {
      handleOperator(target.innerText);
      return;
    }

    handleInput(target.innerText);
    updateData();
  });
}