// Scroll Behavior for Header
document.addEventListener("DOMContentLoaded", () => {
  let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const delta = scrollTop - lastScrollTop;

    if (delta > 0 && lastScrollTop >= 0) {
      // User is scrolling down
      header.style.top = "-100px";
    } else {
      // User is scrolling up
      header.style.top = "0";
    }

    lastScrollTop = scrollTop;
  });
});

// Smooth Scroll for Navigation Links
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

// Tabs Functionality
function openTab(event, tabName) {
  const tabPanels = document.querySelectorAll('.tab-panel');
  const tabLinks = document.querySelectorAll('.tab-link');

  tabPanels.forEach(panel => panel.classList.remove('active'));
  tabLinks.forEach(link => link.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Show Details on Image Click
function showDetails(image) {
  const parentBox = image.parentElement;
  parentBox.classList.toggle("active");
}

// View Image in Popup
function viewImage(imageSrc) {
  const popup = document.getElementById("image-popup");
  const popupImg = document.getElementById("popup-img");

  popupImg.src = imageSrc;
  popup.style.display = "flex";
}

// Close Image Popup
function closePopup() {
  const popup = document.getElementById("image-popup");
  popup.style.display = "none";
}

// Animated Tabs for About Section
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabPanels = document.querySelectorAll(".tab-panel");

  function openTab(event, tabId) {
    tabLinks.forEach(tab => tab.classList.remove("active"));
    tabPanels.forEach(panel => {
      panel.classList.remove("active");
      panel.style.opacity = "0";
      panel.style.transform = "translateY(20px)";
      panel.style.transition = "all 0.5s ease";
    });

    event.currentTarget.classList.add("active");
    const targetPanel = document.getElementById(tabId);

    targetPanel.classList.add("active");
    setTimeout(() => {
      targetPanel.style.opacity = "1";
      targetPanel.style.transform = "translateY(0)";
    }, 0);
  }

  const activeTab = document.querySelector(".tab-panel.active");
  if (activeTab) {
    activeTab.style.opacity = "1";
    activeTab.style.transform = "translateY(0)";
  }
});

// Popup Logic for Project Section
document.addEventListener("DOMContentLoaded", function () {
  const detailsButtons = document.querySelectorAll(".details-btn");
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
  const detailsText = document.querySelector(".details-text");

  detailsButtons.forEach(button => {
    button.addEventListener("click", function () {
      const details = button.getAttribute("data-details");
      detailsText.textContent = details;
      popup.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    popup.style.display = "none";
  });

  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && popup.style.display === "flex") {
      popup.style.display = "none";
    }
  });
});

// Services Animation
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  serviceCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.5s ease";
    observer.observe(card);
  });
});

// Blogs Slider
document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".blogs-slider-container");
  const blogBoxes = document.querySelectorAll(".blog-box");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  const boxesPerSlide = 3;
  const boxWidth = blogBoxes[0].offsetWidth + 20;
  let currentIndex = 0;

  function updateSlider() {
    const offset = -currentIndex * boxWidth;
    sliderContainer.style.transform = `translateX(${offset}px)`;
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex < blogBoxes.length - boxesPerSlide) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  const viewButtons = document.querySelectorAll(".view-content-btn");
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");
  const closeBtn = document.querySelector(".close-btn");

  viewButtons.forEach(button => {
    button.addEventListener("click", function () {
      const content = button.getAttribute("data-content");
      if (content) {
        popupText.textContent = content;
        popup.style.display = "flex";
      }
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && popup.style.display === "flex") {
      popup.style.display = "none";
    }
  });
});
