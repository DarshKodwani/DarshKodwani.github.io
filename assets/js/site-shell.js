document.addEventListener('DOMContentLoaded', () => {
    /* ── Active nav link ──────────────────────────── */
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

    /* ── Hamburger toggle ─────────────────────────── */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.site-nav__links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const open = navToggle.classList.toggle('is-open');
            navLinks.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(open));
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('.site-nav__link').forEach((link) => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('is-open');
                navLinks.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ── Theme toggle (dark / light) ──────────────── */
    const themeToggle = document.getElementById('themeToggle');
    const stored = localStorage.getItem('theme');
    if (stored) document.documentElement.setAttribute('data-theme', stored);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    /* ── Scroll reveal (IntersectionObserver) ─────── */
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        reveals.forEach((el) => observer.observe(el));
    } else {
        // Fallback: show everything
        reveals.forEach((el) => el.classList.add('is-visible'));
    }
});
