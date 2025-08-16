/**
 * FlashBoost - Contact Page JavaScript
 * Handles functionality specific to the Contact page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !message) {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            if (!validateEmail(email)) {
                showAlert('Please enter a valid email address', 'error');
                return;
            }
            
            // Form submission handling would go here
            // For now, we'll just show a success message
            showAlert('Your message has been sent successfully!', 'success');
            contactForm.reset();
        });
    }

    // Google Map integration
    function initMap() {
        // This would be replaced with your actual Google Maps API code
        const mapElement = document.getElementById('map');
        if (mapElement) {
            // Placeholder for map initialization
            mapElement.innerHTML = '<div class="map-placeholder"></div>';
            console.log('Map would be initialized here with Google Maps API');
        }
    }

    // Helper functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        
        const form = document.getElementById('contact-form');
        form.insertBefore(alertDiv, form.firstChild);
        
        setTimeout(() => {
            alertDiv.style.opacity = '0';
            setTimeout(() => alertDiv.remove(), 600);
        }, 3000);
    }

    // Initialize map when window loads
    window.addEventListener('load', initMap);
});