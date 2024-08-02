document.addEventListener('DOMContentLoaded', function() {
    // Scroll animations
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add some JavaScript for animations on hover
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(skillCategory => {
        skillCategory.addEventListener('mouseover', () => {
            skillCategory.style.transform = 'scale(1.05)';
            skillCategory.style.transition = 'transform 0.3s';
        });
        skillCategory.addEventListener('mouseout', () => {
            skillCategory.style.transform = 'scale(1)';
        });
    });
});
