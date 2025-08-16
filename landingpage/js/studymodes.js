/**
 * FlashBoost - Study Modes Page JavaScript
 * Handles functionality specific to the Study Modes page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mode card hover animations
    const modeCards = document.querySelectorAll('.mode-card');
    modeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            this.style.borderColor = 'var(--primary)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.borderColor = 'rgba(255, 204, 0, 0.2)';
        });
    });

    // Smooth scrolling to mode details
    const modeLinks = document.querySelectorAll('.mode-card a.btn');
    modeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate mode details sections when they come into view
    const modeDetails = document.querySelectorAll('.detail-content');
    
    function animateModeDetails() {
        modeDetails.forEach(detail => {
            const detailTop = detail.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (detailTop < windowHeight - 100) {
                detail.style.opacity = '1';
                detail.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state
    modeDetails.forEach(detail => {
        detail.style.opacity = '0';
        detail.style.transform = 'translateY(20px)';
        detail.style.transition = 'all 0.6s ease-out';
    });
    
    // Initial check
    animateModeDetails();
    
    // Check on scroll
    window.addEventListener('scroll', debounce(animateModeDetails));
});