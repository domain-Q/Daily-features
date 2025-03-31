document.addEventListener("DOMContentLoaded", function() {
    const tab_buttons = document.querySelectorAll(".tab-btn");  // Corrected to query all tab buttons
    const tab_pannels = document.querySelectorAll(".tab-pannel");  // Corrected to query all tab panels

    tab_buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const tabId = btn.dataset.tab;

            // Remove 'active' class from all buttons and panels
            tab_buttons.forEach((b) => {
                b.classList.remove("active");
            });

            tab_pannels.forEach((pannel) => {
                pannel.classList.remove("active");
            });

            // Add 'active' class to the clicked button and the corresponding panel
            btn.classList.add("active");
            const activePanel = document.querySelector(`.tab-pannel[data-tab="${tabId}"]`);
            if (activePanel) {
                activePanel.classList.add("active");
            }
        });
    });
});
