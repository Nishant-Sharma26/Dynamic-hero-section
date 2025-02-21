
const floatingElements = document.querySelector('.floating-elements');
for (let i = 0; i < 15; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.style.left = `${Math.random() * 100}%`;
    element.style.top = `${Math.random() * 100}%`;
    floatingElements.appendChild(element);
}


gsap.to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
});

gsap.to('.hero-cta', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
});


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