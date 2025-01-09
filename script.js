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

// Smooth scroll
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior

      const targetId = link.getAttribute("href").substring(1); // Get the target ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Scroll to the section
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

// Tabs
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

// Close Popup
function closePopup() {
  const popup = document.getElementById("image-popup");
  popup.style.display = "none";
}

// Tabs with Animation
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabPanels = document.querySelectorAll(".tab-panel");

  function openTab(event, tabId) {
    // Remove active class from all tabs
    tabLinks.forEach((tab) => tab.classList.remove("active"));
    tabPanels.forEach((panel) => {
      panel.classList.remove("active");
      panel.style.opacity = "0"; // Reset opacity for animation
      panel.style.transform = "translateY(20px)"; // Reset position
      panel.style.transition = "all 0.5s ease"; // Apply transition
    });

    // Add active class to clicked tab
    event.currentTarget.classList.add("active");
    const targetPanel = document.getElementById(tabId);

    // Show and animate the target panel
    targetPanel.classList.add("active");
    setTimeout(() => {
      targetPanel.style.opacity = "1"; // Fade-in effect
      targetPanel.style.transform = "translateY(0)"; // Smooth slide-in
    }, 0);
  }

  // Initial animation for the active tab on load
  const activeTab = document.querySelector(".tab-panel.active");
  if (activeTab) {
    activeTab.style.opacity = "1";
    activeTab.style.transform = "translateY(0)";
  }
});

// Project Popup Logic
document.addEventListener("DOMContentLoaded", function () {
  const detailsButtons = document.querySelectorAll(".details-btn");
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");
  const detailsText = document.querySelector(".details-text");

  // Open popup logic
  detailsButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const details = button.getAttribute("data-details");
      detailsText.textContent = details;
      popup.style.display = "flex";
    });
  });

  // Close popup when clicking the close button
  closeBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    popup.style.display = "none";
  });

  // Close popup when clicking outside popup content
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
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

// Blog Slider
document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".blogs-slider-container");
  const blogBoxes = document.querySelectorAll(".blog-box");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  const boxesPerSlide = 3;
  const boxWidth = blogBoxes[0].offsetWidth + 20; // Including margin
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

  viewButtons.forEach((button) => {
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
});
