/* ===================================
   MAD SCHOOL - CUSTOM JAVASCRIPT
   =================================== */

// Responsive zoom for large screens (991px minimum)
function adjustZoom() {
    const width = window.innerWidth;
    
    if (width >= 1920) {
        document.body.style.zoom = "90%";
    } else if (width >= 1440) {
        document.body.style.zoom = "85%";
    } else {
        document.body.style.zoom = "100%";
    }
}

// Apply zoom on load
window.addEventListener("load", adjustZoom);

// Update zoom on window resize with debounce for performance
let resizeTimer;
window.addEventListener("resize", function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(adjustZoom, 100);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash or just '#'
        if (href === '#' || href === '') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');
    
    if (navbar && toggler) {
        const isClickInside = navbar.contains(event.target) || toggler.contains(event.target);
        
        if (!isClickInside && navbar.classList.contains('show')) {
            toggler.click();
        }
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization - Lazy load images
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Console welcome message
console.log('%c MAD SCHOOL - NIFT Coaching Centre ', 'background: #fcda00; color: #000; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Fully Responsive Design | Bootstrap 5 + Tailwind CSS ', 'background: #000; color: #fcda00; font-size: 14px; padding: 5px;');

