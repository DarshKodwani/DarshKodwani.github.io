document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.site-nav__link');

    links.forEach((link) => {
        const href = link.getAttribute('href') || '';
        const normalizedHref = href.split('/').pop();
        if (normalizedHref === currentPath) {
            link.classList.add('is-active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('is-active');
            link.removeAttribute('aria-current');
        }
    });
});
