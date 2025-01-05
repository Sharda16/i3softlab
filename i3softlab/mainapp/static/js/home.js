 // Initialize AOS
 AOS.init({
    duration: 1200,  // Adjust the animation duration as needed
    easing: 'ease-in-out',  // Adjust the easing function
    once: true,  // Animation occurs only once
    offset: 100,  // Adjust how far from the bottom of the viewport the animation triggers
});
document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".list-item");
    const dashes = document.querySelectorAll(".list-item .item-dash");
    let currentIndex = 0;
    
    function activateDashAndText() {
        // Deactivate all dashes and texts
        listItems.forEach((item, index) => {
            const dash = dashes[index];
            if (index === currentIndex) {
                dash.classList.add("active");   // Activate the current dash
                dash.classList.remove("inactive");
                item.classList.add("active-text"); // Activate the current text
            } else {
                dash.classList.remove("active");
                dash.classList.add("inactive"); // Fade out the previous dash
                item.classList.remove("active-text"); // Deactivate the previous text
            }
        });

        // Move to the next dash
        currentIndex++;
        if (currentIndex >= listItems.length) {
            currentIndex = 0; // Reset to the first item
        }

        // Schedule the next activation
        setTimeout(() => {
            activateDashAndText();
        }, 5000); // Each dash and text stay active for 5 seconds
    }

    activateDashAndText(); // Start the animation loop

const heroSections = document.querySelectorAll(".hero-text");
let currentHeroIndex = 0;

function showHeroText() {
    // Hide all hero sections
    heroSections.forEach((hero, index) => {
        hero.style.display = "none"; // Hide all sections
    });

    // Show the current hero section
    heroSections[currentHeroIndex].style.display = "block";

    // Move to the next hero section
    currentHeroIndex++;
    if (currentHeroIndex >= heroSections.length) {
        currentHeroIndex = 0; // Reset to the first hero section
    }

    // Schedule the next change
    setTimeout(() => {
        showHeroText();
    }, 5000); // Switch hero-text every 5 seconds
}

// Initially hide all hero sections except the first
heroSections.forEach((hero, index) => {
    hero.style.display = index === 0 ? "block" : "none";
});

showHeroText(); // Start the loop
}); 
