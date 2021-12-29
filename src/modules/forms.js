const forms = () => {
  const forms = document.querySelectorAll("[name=user_form]");
  const name = document.querySelectorAll("[name=user_name]");
  const email = document.querySelectorAll("[name=user_email]");
  const phone = document.querySelectorAll("[name=user_phone]");
  const message = document.querySelectorAll("[name=user_message]");

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
};

export default forms;
