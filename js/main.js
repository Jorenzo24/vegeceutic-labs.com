document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        const toggle = () => backToTop.classList.toggle('visible', window.scrollY > 600);
        window.addEventListener('scroll', toggle, { passive: true });
        toggle();
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
