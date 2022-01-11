const menuScroll = () => {
  const menu = document.querySelector("menu");
  const down = document.querySelector('a[href="#service-block"]>img');

  const scroll = (e) => {
    e.preventDefault();
    let hash;

    if (e.target.matches("menu > ul > li > a")) {
      hash = e.target.getAttribute("href");
    } else if (e.target === down) {
      hash = e.target.parentNode.getAttribute("href");
    }

    document.querySelector(hash).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  menu.addEventListener("click", scroll);
  down.addEventListener("click", scroll);
};

export default menuScroll;
