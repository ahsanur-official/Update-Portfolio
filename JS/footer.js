// footer.js
document.addEventListener("DOMContentLoaded", async () => {
    const footerContainer = document.getElementById("footer");
    try {
        const response = await fetch("../pages/footer.html"); // Fetch the footer.html file
        if (response.ok) {
            const footerHTML = await response.text();
            footerContainer.innerHTML = footerHTML; // Insert the content into the #footer container
        } else {
            console.error("Failed to load footer:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching footer:", error);
    }
});
