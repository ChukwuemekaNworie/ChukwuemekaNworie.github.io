/* =============================================
   CHUKWUEMEKA NWORIE — MAIN JS
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav .nav-link');

    /* ----- Active nav on scroll ----- */
    function setActiveNav() {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNav);

    /* ----- Smooth scroll ----- */
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    /* ----- Hero button smooth scroll ----- */
    document.querySelectorAll('.hero-btns a[href^="#"]').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    /* ----- Fade-in on scroll ----- */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .skill-card, .about-grid, .contact-grid').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

});
