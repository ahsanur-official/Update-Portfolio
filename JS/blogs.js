document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".blogs-slider-container");
    const blogBoxes = document.querySelectorAll(".blog-box");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    const boxesPerSlide = 2; // Show 2 blogs per slide in mobile view
    const boxWidth = blogBoxes[0].offsetWidth + 20; // Width of a blog box including margin
    let currentIndex = 0;

    // Calculate the total number of slides (for 2 blogs per slide)
    const totalSlides = Math.ceil(blogBoxes.length / boxesPerSlide);

    // Update the slider position based on current index
    function updateSlider() {
        const offset = -currentIndex * boxWidth * boxesPerSlide;  // Slide by 2 boxes at a time
        sliderContainer.style.transform = `translateX(${offset}px)`;
    }

    // Show the next set of blogs (2 blogs at a time)
    nextBtn.addEventListener("click", function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    // Show the previous set of blogs (2 blogs at a time)
    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    // Initialize the slider position
    updateSlider();
});
