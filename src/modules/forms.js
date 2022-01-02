const forms = () => {
  const forms = document.querySelectorAll("[name=user_form]");
  const name = document.querySelectorAll("[name=user_name]");
  const email = document.querySelectorAll("[name=user_email]");
  const phone = document.querySelectorAll("[name=user_phone]");
  const message = document.querySelectorAll("[name=user_message]");

  name.forEach((item) =>
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-я\s\-]/gi, "");
    })
  );
  message.forEach((item) =>
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-я\s\-]/gi, "");
    })
  );
  email.forEach((item) =>
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w\-\_\.\!\~\*\'@]/gi, "");
    })
  );
  phone.forEach((item) =>
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\(\)\-]/g, "");
    })
  );
  forms.forEach((item) =>
    item.addEventListener("submit", (e) => {
      const email = item.querySelector("[name=user_email]");

      e.preventDefault();

      if (email.value.match(/[\w\-\_\!\~\*\'\.]+@([\w]+\.)+[\w]+/gi)) {
        email.style.backgroundColor = "";
        console.log("форма отправлена");
      } else {
        email.style.backgroundColor = "#edadc0";
        console.log("неверная форма email");
      }
    })
  );
};

export default forms;
