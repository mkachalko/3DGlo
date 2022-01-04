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

  // Через интервал
  // const countInterval = (value, time, span) => {
  //   let count = 0;
  //   let interval = setInterval(() => {
  //     if (count >= value) {
  //       clearInterval(interval);
  //     }
  //     span.textContent = count;
  //     count++;
  //   }, time);
  // };

  // Через анимацию
  const animate = ({ timing, draw, duration }) => {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }

      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);

      draw(progress); // отрисовать её

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
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

    // countInterval(totalValue, 1, total);
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
