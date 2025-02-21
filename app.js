// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Floating Elements
    const floatingElements = document.querySelector('.floating-elements');
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        floatingElements.appendChild(element);
    }

    // Initial Animations
    gsap.to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    gsap.to('.hero-subtitle', { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' });
    gsap.to('.hero-cta', { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' });
    gsap.to('.navbar', { y: 0, duration: 0.5, delay: 0.8 });

    // Mouse Movement
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        gsap.to('.floating-elements', {
            x: mouseX * 30,
            y: mouseY * 30,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // Floating Elements Rotation
    document.querySelectorAll('.floating-element').forEach(element => {
        gsap.to(element, {
            rotation: 360,
            repeat: -1,
            duration: 20 + Math.random() * 20,
            ease: 'none'
        });
    });

    // Project Card Hover
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.transform = `perspective(1000px) rotateX(${(y - rect.height/2)/10}deg) rotateY(${-(x - rect.width/2)/10}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // Navigation
    const sections = document.querySelectorAll('.section, .hero');
    const dots = document.querySelectorAll('.page-indicators .dot');
    const navLinks = document.querySelectorAll('.nav-links a');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });

        dots.forEach(dot => {
            dot.classList.toggle('active', dot.dataset.section === sectionId);
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
        });
    }

    // Event Listeners
    dots.forEach(dot => {
        dot.addEventListener('click', () => showSection(dot.dataset.section));
    });

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = anchor.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Form Submission
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        try {
            const formData = new FormData(form);
            // Example: await fetch('/api/contact', { method: 'POST', body: formData });
            form.reset();
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Error sending message. Please try again.');
        }
    });

    // Show hero section by default
    showSection('hero');
});