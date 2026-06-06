// Shared nav and footer injected on every page
(function() {
  const LOGO_IMG = `<img src="logo.png" alt="MADYS Conciergerie" style="height:54px;width:auto;display:block;">`;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return currentPage === page ? 'active' : '';
  }

  const navHTML = `
  <nav>
    <a href="index.html" class="nav-logo">
      ${LOGO_IMG}
    </a>
    <button class="nav-toggle" aria-label="Menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      <li><a href="index.html" class="${isActive('index.html')}">Accueil</a></li>
      <li><a href="services.html" class="${isActive('services.html')}">Services</a></li>
      <li><a href="gestion.html" class="${isActive('gestion.html')}">Gestion</a></li>
      <li><a href="investir.html" class="${isActive('investir.html')}">Investir</a></li>
      <li><a href="contact.html" class="nav-cta ${isActive('contact.html')}">Prendre RDV</a></li>
    </ul>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="footer-grid">
      <div>
        <div class="footer-brand">
          ${LOGO_IMG}
        </div>
        <p class="footer-tagline">Nous simplifions la gestion de vos biens et maximisons vos revenus grâce à notre expertise. Basée en Île-de-France.</p>
        <div class="footer-socials">
          <a href="https://www.instagram.com/madysconciergerie" target="_blank" rel="noopener" class="social-link" title="Instagram" aria-label="Instagram">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61585734897160" target="_blank" rel="noopener" class="social-link" title="Facebook" aria-label="Facebook">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@madys.conciergerie" target="_blank" rel="noopener" class="social-link" title="TikTok" aria-label="TikTok">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <p class="footer-col-title">Services</p>
        <ul class="footer-links">
          <li><a href="services.html">Gestion complète</a></li>
          <li><a href="services.html">Ménage & Blanchisserie</a></li>
          <li><a href="services.html">Maintenance</a></li>
          <li><a href="services.html">Shooting Photo</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Légal</p>
        <ul class="footer-links">
          <li><a href="#">Mentions Légales</a></li>
          <li><a href="#">Politique de Confidentialité</a></li>
          <li><a href="#">Conditions Générales</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">Contact</p>
        <div class="footer-contact-item">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <a href="mailto:madys.conciergerie@gmail.com">madys.conciergerie@gmail.com</a>
        </div>
        <div class="footer-contact-item">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <a href="tel:0603236807">06 03 23 68 07</a>
        </div>
        <div class="footer-contact-item">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Île-de-France
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2026 Madys Conciergerie. Tous droits réservés.</p>
      <div class="footer-legal">
        <a href="#">Mentions Légales</a>
        <a href="#">Confidentialité</a>
        <a href="#">CGU</a>
      </div>
    </div>
  </footer>`;

  // Favicon (icône de l'onglet)
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = 'favicon.png?v=2';
  document.head.appendChild(favicon);

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu when a link is tapped
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Navbar scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(15,17,23,0.98)'
      : 'rgba(15,17,23,0.92)';
  });

  // FAQ toggle
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();
