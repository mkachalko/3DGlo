import { animate } from "./helpers";

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер свяжется с вами";

  let load;

  const validate = (inputList) => {
    const name = form.querySelector("[name=user_name]");
    const email = form.querySelector("[name=user_email]");
    const phone = form.querySelector("[name=user_phone]");
    const message = form.querySelector("[name=user_message]");

    let error = false;

    inputList.forEach((input) => {
      switch (input) {
        case name:
          if (/[^а-я\s]+/gi.test(input.value)) {
            error = true;
          }
          break;
        case email:
          if (
            /[^\w\-\_\.\!\~\*\'@]+/gi.test(input.value) ||
            !/[\w\-\_\!\~\*\'\.]+@([\w]+\.)+[\w]+/gi.test(input.value)
          ) {
            error = true;
          }
          break;
        case phone:
          if (/[^\d\(\)\+\-]+/g.test(input.value)) {
            error = true;
          }
          break;
        case message:
          if (/[^а-я0-9\s\-\.\,\!\?\:]+/gi.test(input.value)) {
            error = true;
          }
          break;
      }
    });

    return !error;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
  };

  const loadElem = () => {
    load = document.createElement("div");
    load.style.border = "10px solid #ffffff";
    load.style.borderTop = "10px solid #19b5fe";
    load.style.borderRadius = "50%";
    load.style.width = "45px";
    load.style.height = "45px";
    statusBlock.textContent = "";
    statusBlock.append(load);
  };

  const loadAnimate = () => {
    animate({
      duration: 1500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        load.style.transform = `rotate(${progress * 360}deg)`;
        if (progress === 1) {
          loadAnimate();
        }
      },
    });
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};
    const inputs = form.querySelectorAll("input");

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block" && element.textContent != 0) {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input" && element.value != 0) {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(inputs)) {
      statusBlock.style.display = "flex";
      statusBlock.style.justifyContent = "center";
      statusBlock.style.marginTop = "-25px";
      form.append(statusBlock);
      loadElem();
      loadAnimate();
      sendData(formBody)
        .then((data) => {
          console.log(data);
          cancelAnimationFrame(loadAnimate);
          statusBlock.textContent = successText;
          inputs.forEach((input) => (input.value = ""));
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Поля формы заполнены неверно!");
    }
  };

  try {
    if (!form) {
      throw new Error("Ошибка переданной формы. Не надо так...");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
