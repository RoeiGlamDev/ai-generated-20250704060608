// Get all elements with the class "fade-in"
const fadeInElements = document.querySelectorAll('.fade-in');

// Add event listener to window for scroll event
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Loop through all fade-in elements
    fadeInElements.forEach((element) => {
        // Get the top position of the element
        const elementTop = element.offsetTop;

        // Check if the element is in view
        if (scrollPosition >= elementTop - window.innerHeight + 100) {
            // Add the "animate" class to the element
            element.classList.add('animate');
        }
    });
});

// Add event listener to window for load event
window.addEventListener('load', () => {
    // Get all elements with the class "hero-image"
    const heroImages = document.querySelectorAll('.hero-image');

    // Loop through all hero images
    heroImages.forEach((image) => {
        // Add the "animate" class to the image
        image.classList.add('animate');
    });
});