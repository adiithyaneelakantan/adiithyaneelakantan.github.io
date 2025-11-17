/**
 * Academic Portfolio Website - JavaScript
 * Author: Adithya Neelakantan
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme toggle removed - using simple top nav
    
    // Smooth scroll for navigation links
    initSmoothScroll();
    
    // Navbar scroll removed - using simple top nav instead
    
    // Initialize animations
    initScrollAnimations();
    
    // Add active link highlighting
    initActiveLinkHighlight();
    
    // Initialize project filters
    initProjectFilters();
    
});

// Theme toggle functionality removed

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
                const offsetTop = target.offsetTop - 20; // Small offset for top nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll functionality removed

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

// Email links now just open mail client - no copy functionality needed

/**
 * Initialize project filtering functionality
 */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project[data-category]');
    
    if (!filterButtons.length || !projects.length) return;
    
    // Set initial ARIA states
    filterButtons.forEach(button => {
        button.setAttribute('role', 'button');
        button.setAttribute('aria-pressed', button.classList.contains('active') ? 'true' : 'false');
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active state and ARIA on buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
            
            // First fade out all projects
            projects.forEach(project => {
                project.style.opacity = '0';
                project.style.transform = 'translateY(-10px)';
            });
            
            // Then show/hide with proper display and staggered fade-in
            setTimeout(() => {
                projects.forEach((project, index) => {
                    const projectCategory = project.getAttribute('data-category');
                    
                    if (category === 'all' || projectCategory === category) {
                        project.classList.remove('hidden');
                        // Stagger fade-in animation
                        setTimeout(() => {
                            project.style.opacity = '1';
                            project.style.transform = 'translateY(0)';
                        }, index * 80);
                    } else {
                        project.classList.add('hidden');
                    }
                });
            }, 200);
        });
        
        // Add keyboard support
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

/**
 * Console welcome message
 */
console.log('%c👋 Welcome to my portfolio!', 'color: #A20597; font-size: 16px; font-weight: bold;');
console.log('%cInterested in the code? Check it out on GitHub!', 'color: #666; font-size: 12px;');
console.log('%chttps://github.com/adithya-neelakantan', 'color: #A20597; font-size: 12px;');
