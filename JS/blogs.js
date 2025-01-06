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
            popupText.textContent = content;
            popup.style.display = "flex";
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
