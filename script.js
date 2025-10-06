document.addEventListener("DOMContentLoaded", function () {
    // 🎯 Gallery Click Event
    document.querySelector(".gallery-link").addEventListener("click", function () {
        showPopup("📷 Welcome to the Gallery!", "photo.jpg");
    });

    // 🎯 Events Click Event
    document.querySelector(".events-link").addEventListener("click", function () {
        showPopup("📅 Upcoming Events!", null);
    });

    // 🎯 Contact Click Event
    document.querySelector(".contact-link").addEventListener("click", function () {
        showPopup("📞 Contact Us at: 123-456-7890", null);
    });

    // 🟢 Function to Show Popup with Image or Text
    function showPopup(text, imageSrc) {
        let popup = document.createElement("div");
        popup.classList.add("popup");

        let popupContent = `
            <div class="popup-box">
                <span class="close-btn">&times;</span>
                <h2>${text}</h2>
                ${imageSrc ? `<img src="${imageSrc}" alt="Popup Image">` : ""}
            </div>
        `;
        popup.innerHTML = popupContent;
        document.body.appendChild(popup);

        // ❌ Close Popup on Click
        document.querySelector(".close-btn").addEventListener("click", function () {
            popup.remove();
        });
    }
});
