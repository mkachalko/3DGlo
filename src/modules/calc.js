import { animate } from "./helpers";

const calc = (price = 100) => {
  const square = document.querySelector(".calc-square");
  const flat = document.querySelector(".calc-count");
  const day = document.querySelector(".calc-day");
  const inputsArr = [];
  const type = document.querySelector(".calc-type");
  const total = document.getElementById("total");
  const calcBlock = document.querySelector(".calc-block");

  const inputsValid = () => {
    inputsArr.forEach((item) => {
      item.value = item.value.replace(/\D/gi, "");
    });
  };

  const countCalc = () => {
    const typeValue = +type.options[type.selectedIndex].value;

    let totalValue = 0;
    let flatValue = 1;
    let dayValue = 1;

    if (flat.value > 1) {
      flatValue += +flat.value / 10;
    }

    if (day.value && day.value < 5) {
      dayValue = 2;
    } else if (day.value && day.value < 10) {
      dayValue = 1.5;
    }

    if (type.value && square.value) {
      totalValue = price * typeValue * square.value * flatValue * dayValue;
      animate({
        duration: 1500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          total.textContent = Math.floor(progress * totalValue);
        },
      });
    }
  };

  inputsArr.push(square, flat, day);

  inputsArr.forEach((item) => {
    item.addEventListener("input", inputsValid);
  });

  calcBlock.addEventListener("change", (e) => {
    if (e.target === type || e.target === square || e.target === flat || e.target === day) {
      countCalc();
    }
  });
};

export default calc;
