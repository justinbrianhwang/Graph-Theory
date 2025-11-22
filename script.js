// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll for Navigation
    setupSmoothScroll();
    
    // Animate elements on scroll
    setupScrollAnimations();
    
    // Add hover effects to cards
    setupCardEffects();
    
    // Mobile menu toggle (if needed in future)
    setupMobileMenu();
});

// Smooth Scroll Function
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Animation Setup
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe experiment cards
    const cards = document.querySelectorAll('.experiment-card, .tech-card, .team-member');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `
        .animated {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Card Hover Effects
function setupCardEffects() {
    const cards = document.querySelectorAll('.experiment-card, .tech-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Mobile Menu Setup (for future implementation)
function setupMobileMenu() {
    // Check if mobile menu button exists
    const menuButton = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Active Navigation Highlight based on current page
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call highlight function
highlightActiveNav();

// Add typing effect to hero title (optional enhancement)
function typewriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        
        // Start typing after a short delay
        setTimeout(type, 500);
    }
}

// Progress indicator for page scroll (optional enhancement)
function setupProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--quantum-color), var(--accent-color));
        z-index: 10000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / windowHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// Initialize progress indicator
setupProgressIndicator();

// Add particle effect to hero section (optional advanced feature)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) translateX(50px);
            }
        }
        .hero {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}

// Initialize particles
createParticles();

// Console Easter Egg
console.log('%c🚀 Quantum Graph Theory Project', 'font-size: 20px; color: #7c4dff; font-weight: bold;');
console.log('%cExploring the intersection of quantum computing and graph theory', 'font-size: 14px; color: #00bcd4;');
console.log('%cDeveloped by Yonsei University Graph Theory Team', 'font-size: 12px; color: #666;');