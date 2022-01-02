const menu = () => {
  const menu = document.querySelector("menu");

  const handleMenu = (e) => {
    if (
      e.target.closest(".menu") ||
      e.target.matches("menu > ul > li > a") ||
      e.target.className === "close-btn"
    ) {
      menu.classList.toggle("active-menu");
    } else if (!e.target.closest("menu")) {
      menu.classList.remove("active-menu");
    }
  };

  document.body.addEventListener("click", handleMenu);
};

export default menu;
