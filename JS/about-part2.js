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
