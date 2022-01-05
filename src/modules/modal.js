import { animate } from "./helpers";

const modal = () => {
  const popupBtn = document.querySelectorAll(".popup-btn");
  const modal = document.querySelector(".popup");

  popupBtn.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
      if (screen.width > 768) {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress;
          },
        });
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup-close") || !e.target.closest(".popup-content")) {
      if (screen.width > 768) {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return 1 - timeFraction;
          },
          draw(progress) {
            modal.style.opacity = progress;
          },
        });
        setTimeout(() => {
          modal.style.display = "none";
          modal.style.opacity = "";
        }, 1100);
      } else {
        modal.style.display = "none";
        modal.style.opacity = "";
      }
    }
  });
};

export default modal;
