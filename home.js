// Code for creating the stars
document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.querySelector('.stars');
    const numStars = 60; // Increased number of stars

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Randomly position the stars
        const size = Math.random() * 3 + 2; // Random size between 2px and 5px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        star.style.top = `${Math.random() * 100}vh`; // Random vertical position
        
        starsContainer.appendChild(star);
    }
});