document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabPanels = document.querySelectorAll(".tab-panel");
    const serviceCards = document.querySelectorAll(".service-card"); 

    function openTab(event, tabId) {
        // Remove active class from all tabs
        tabLinks.forEach((tab) => tab.classList.remove("active"));
        tabPanels.forEach((panel) => {
            panel.classList.remove("active");
            panel.style.opacity = "0"; 
            panel.style.transform = "translateY(20px)"; 
            panel.style.transition = "all 0.5s ease";
        });

        // Add active class to clicked tab
        event.currentTarget.classList.add("active");
        const targetPanel = document.getElementById(tabId);

        // Show and animate the target panel
        targetPanel.classList.add("active");
        setTimeout(() => {
            targetPanel.style.opacity = "1"; 
            targetPanel.style.transform = "translateY(0)"; 
        }, 0);
    }

    // Attach click event listeners to tab links
    tabLinks.forEach((tab) => {
        tab.addEventListener("click", function (event) {
            openTab(event, this.getAttribute("data-tab"));
        });
    });

    // Initial animation for the active tab on load
    const activeTab = document.querySelector(".tab-panel.active");
    if (activeTab) {
        activeTab.style.opacity = "1";
        activeTab.style.transform = "translateY(0)";
    }

    // Intersection Observer for service cards animation
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.3 } 
    );

    // Apply observer to each service card
    serviceCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.5s ease";
        observer.observe(card);
    });
});
// Close popup when clicking the close button
closeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    popup.style.display = "none";
});

// Close popup when clicking outside popup content
popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});