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



// script.js
function openTab(event, tabName) {
  // Hide all tab panels
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabPanels.forEach(panel => panel.classList.remove('active'));

  // Deactivate all tab links
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => link.classList.remove('active'));

  // Show the selected tab panel and activate the tab link
  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}
