const calc = () => {
  // const square = document.querySelector(".calc-square");
  // const flat = document.querySelector(".calc-count");
  // const day = document.querySelector(".calc-day");
  const inputsArr = [];

  inputsArr.push(
    document.querySelector(".calc-square"),
    document.querySelector(".calc-count"),
    document.querySelector(".calc-day")
  );

  const inputsValid = () => {
    inputsArr.forEach((item) => {
      item.value = item.value.replace(/\D/gi, "");
    });
  };

  inputsArr.forEach((item) => {
    item.addEventListener("input", inputsValid);
  });
};

export default calc;
