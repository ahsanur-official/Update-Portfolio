document.addEventListener("DOMContentLoaded", () => {
  let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const delta = scrollTop - lastScrollTop;

    if (delta > 0 && lastScrollTop >= 0) {
      // User is scrolling down significantly
      header.style.top = "-100px";
    } else {
      // User is scrolling up or not scrolling significantly
      header.style.top = "0";
    }

    lastScrollTop = scrollTop;
  });
});
