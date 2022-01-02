const modal = () => {
  const popupBtn = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");

  let count = 0;
  let idAnimationOpen;
  let idAnimationClose;

  const animationOpen = () => {
    count += 0.04;

    idAnimationOpen = requestAnimationFrame(animationOpen);
    if (count < 1) {
      modal.style.opacity = count;
    } else {
      modal.style.opacity = 1;
      cancelAnimationFrame(idAnimationOpen);
    }
  };

  const animationClose = () => {
    count -= 0.04;

    idAnimationClose = requestAnimationFrame(animationClose);
    if (count > 0) {
      modal.style.opacity = count;
    } else {
      modal.style.opacity = "";
      modal.style.display = "none";
      cancelAnimationFrame(idAnimationClose);
    }
  };

  popupBtn.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
      if (screen.width > 768) {
        animationOpen();
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup-close") || !e.target.closest(".popup-content")) {
      if (screen.width > 768) {
        animationClose();
      } else {
        modal.style.display = "none";
      }
    }
  });
};

export default modal;
