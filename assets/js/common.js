
/* =====================================
   SMART TOOLS HUB - COMMON JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    // 1. DARK MODE
    const themeButton = document.getElementById("themeToggle");

    if (themeButton) {
        const savedTheme = localStorage.getItem("smartToolsTheme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeButton.textContent = "☀️ Light Mode";
        }

        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            const isDark = document.body.classList.contains("dark-mode");

            themeButton.textContent = isDark
                ? "☀️ Light Mode"
                : "🌙 Dark Mode";

            localStorage.setItem(
                "smartToolsTheme",
                isDark ? "dark" : "light"
            );
        });
    }

    // 2. TOOL SEARCH
    const searchInput = document.getElementById("toolSearch");
    const toolCards = document.querySelectorAll(".tool-card");

    if (searchInput && toolCards.length > 0) {
        searchInput.addEventListener("input", function () {
            const searchText = searchInput.value.toLowerCase().trim();

            toolCards.forEach(function (card) {
                const cardText = card.textContent.toLowerCase();

                card.style.display = cardText.includes(searchText)
                    ? ""
                    : "none";
            });
        });
    }

    // 3. MOBILE NAVIGATION
    const menuButton = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("show-menu");

            menuButton.setAttribute(
                "aria-expanded",
                navLinks.classList.contains("show-menu")
            );
        });
    }

    // 4. CURRENT YEAR
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 5. BACK TO TOP
    const topButton = document.getElementById("backToTop");

    if (topButton) {
        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 6. ACTIVE NAVIGATION LINK
    const currentPath = window.location.pathname;

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPath) {
            link.classList.add("active");
        }
    });

});
