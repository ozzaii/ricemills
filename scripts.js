document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar color change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255,255,255,0.9)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    // Lazy loading images
    if ('IntersectionObserver' in window) {
        const imgOptions = {
            threshold: 0,
            rootMargin: "0px 0px 300px 0px"
        };

        const imgObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    preloadImage(entry.target);
                    imgObserver.unobserve(entry.target);
                }
            });
        }, imgOptions);

        const imgs = document.querySelectorAll('img[data-src]');
        imgs.forEach(img => {
            imgObserver.observe(img);
        });
    }
});

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }
    img.src = src;
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('rice-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you'd typically send the form data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted!');
            console.log('Name:', this.name.value);
            console.log('Email:', this.email.value);
            console.log('Subject:', this.subject.value);
            console.log('Message:', this.message.value);
            
            // Clear the form
            this.reset();
            
            // Show a success message (you can style this better)
            alert('Thank you for your message! We\'ll get back to you soon.');
        });
    }
});
