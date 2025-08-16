/**
 * FlashBoost - Blog Page JavaScript
 * Handles functionality specific to the Blog page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Blog post filtering
    const filterButtons = document.querySelectorAll('.blog-filter button');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    if (filterButtons.length > 0 && blogPosts.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter blog posts
                blogPosts.forEach(post => {
                    if (filterValue === 'all' || post.classList.contains(filterValue)) {
                        post.style.display = 'block';
                    } else {
                        post.style.display = 'none';
                    }
                });
            });
        });
    }

    // Blog post hover effects
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
            
            const image = this.querySelector('.blog-post-image img');
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
        });
        
        post.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            const image = this.querySelector('.blog-post-image img');
            if (image) {
                image.style.transform = '';
            }
        });
    });

    // Reading time calculation
    const articles = document.querySelectorAll('.blog-post-content');
    articles.forEach(article => {
        const text = article.textContent;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 wpm average
        
        const timeElement = document.createElement('div');
        timeElement.className = 'reading-time';
        timeElement.textContent = `${readingTime} min read`;
        
        article.parentNode.insertBefore(timeElement, article.nextSibling);
    });
});