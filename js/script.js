/**
 * Academic Portfolio Website - JavaScript
 * Author: Adithya Neelakantan
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize theme
    initTheme();
    
    // Smooth scroll for navigation links
    initSmoothScroll();
    
    // Add scroll behavior for navigation bar
    initNavbarScroll();
    
    // Initialize animations
    initScrollAnimations();
    
    // Add active link highlighting
    initActiveLinkHighlight();
    
});

/**
 * Initialize dark mode theme toggle
 */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    
    // Update icon visibility
    updateThemeIcons(currentTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const newTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });
    
    function updateThemeIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Add shadow to navbar on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    function updateNavbar() {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
    
    // Initial check
    updateNavbar();
    
    // Update on scroll
    window.addEventListener('scroll', updateNavbar, { passive: true });
}

/**
 * Initialize scroll-based animations for content sections
 */
function initScrollAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        return; // Skip animations for accessibility
    }
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
    
    // Animate individual project and experience items
    const items = document.querySelectorAll('.project, .experience, .publication, .update-item');
    const itemObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    items.forEach((item, index) => {
        item.classList.add('fade-in-item');
        item.style.transitionDelay = `${(index % 3) * 0.1}s`;
        itemObserver.observe(item);
    });
}

/**
 * Highlight active section in navigation
 */
function initActiveLinkHighlight() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink, { passive: true });
}

/**
 * Add external link indicators
 */
function markExternalLinks() {
    const links = document.querySelectorAll('a[href^="http"]');
    
    links.forEach(link => {
        // Skip if it's a link to own domain
        if (link.hostname === window.location.hostname) return;
        
        // Add aria label for accessibility
        const currentAriaLabel = link.getAttribute('aria-label') || link.textContent;
        link.setAttribute('aria-label', `${currentAriaLabel} (opens in new window)`);
    });
}

// Call on load
markExternalLinks();

/**
 * Handle profile photo loading errors
 */
const profileImg = document.querySelector('.profile-photo img');
if (profileImg) {
    profileImg.addEventListener('error', function() {
        // Hide image and show placeholder
        this.style.display = 'none';
        const placeholder = this.nextElementSibling;
        if (placeholder && placeholder.classList.contains('profile-placeholder')) {
            placeholder.style.display = 'flex';
        }
    });
}

/**
 * Add copy email functionality
 */
function initEmailCopy() {
    const emailLinks = document.querySelectorAll('.contact-link[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = this.textContent.trim();
            
            // Try to copy to clipboard
            if (navigator.clipboard && window.isSecureContext) {
                e.preventDefault();
                navigator.clipboard.writeText(email).then(() => {
                    showCopyNotification(this);
                });
            }
        });
    });
}

/**
 * Show notification when email is copied
 */
function showCopyNotification(element) {
    const notification = document.createElement('span');
    notification.textContent = 'Copied!';
    notification.style.cssText = `
        position: absolute;
        background-color: #A20597;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 11px;
        margin-left: 8px;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    element.style.position = 'relative';
    element.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Fade out and remove
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Initialize email copy functionality
initEmailCopy();

/**
 * Console welcome message
 */
console.log('%c👋 Welcome to my portfolio!', 'color: #A20597; font-size: 16px; font-weight: bold;');
console.log('%cInterested in the code? Check it out on GitHub!', 'color: #666; font-size: 12px;');
console.log('%chttps://github.com/adiithyaneelakantan', 'color: #A20597; font-size: 12px;');
