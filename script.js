// Smooth scroll for navbar links and simple contact handler
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

function handleSubmit(e) {
    e.preventDefault();
    alert('Thanks! Your message was (mock) sent.');
    e.target.reset();
}
