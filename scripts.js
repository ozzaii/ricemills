// Main JavaScript file for PakiRice Mills website

document.addEventListener('DOMContentLoaded', () => {
    initFloatingGrains();
    initParallaxEffects();
    initVarietyCarousel();
    initContactForm();
});

function initFloatingGrains() {
    const floatingGrains = document.querySelector('.floating-grains');
    for (let i = 0; i < 20; i++) {
        const grain = document.createElement('img');
        grain.src = 'images/rice-grain.svg';
        grain.classList.add('grain');
        grain.style.left = `${Math.random() * 100}%`;
        grain.style.top = `${Math.random() * 100}%`;
        grain.style.animationDelay = `${Math.random() * 20}s`;
        floatingGrains.appendChild(grain);
    }
}

function initParallaxEffects() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.utils.toArray('.parallax-section > *').forEach((layer) => {
            const depth = layer.dataset.depth || 0.2;
            const movement = -(layer.offsetHeight * depth);
            gsap.fromTo(layer, {
                y: 0
            }, {
                y: movement,
                ease: 'none',
                scrollTrigger: {
                    trigger: layer.parentElement,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    }
}

function initVarietyCarousel() {
    const carousel = document.querySelector('.variety-carousel');
    if (!carousel) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3;
        carousel.scrollLeft = scrollLeft - walk;
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you'd typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted!');
        console.log('Name:', form.name.value);
        console.log('Email:', form.email.value);
        console.log('Message:', form.message.value);
        
        // Clear the form
        form.reset();
        
        // Show a success message (you can style this better in production)
        alert('Thank you for your message! We\'ll get back to you soon.');
    });
}
