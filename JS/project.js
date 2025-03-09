document.addEventListener("DOMContentLoaded", function () {
    const detailsButtons = document.querySelectorAll(".details-btn2");
    const popup = document.getElementById("popup2");
    const closeBtn = document.querySelector(".close-btn2");
    const detailsText = document.querySelector(".details-text2");

    // Open popup logic
    detailsButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const details = button.getAttribute("data-details");
            detailsText.textContent = details;
            popup.classList.add("show"); // Add the 'show' class to display popup
        });
    });

    // Close popup when clicking the close button
    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        popup.classList.remove("show"); // Remove the 'show' class to hide popup
    });

    // Close the popup when clicking outside the content area
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("show"); // Remove the 'show' class to hide popup
        }
    });
});
