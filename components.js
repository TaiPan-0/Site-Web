// Shared nav and footer injected on every page
(function() {
  // --- Google Analytics (GA4) — chargé uniquement après consentement ---
  const GA_ID = 'G-ET2TX9SKB0';
  let gaLoaded = false;
  function loadGoogleAnalytics() {
    if (gaLoaded) return;
    gaLoaded = true;
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
  if (localStorage.getItem('madys-cookie-consent') === 'accepted') {
    loadGoogleAnalytics();
  }
  // Conversion events: sent only when Analytics is loaded, i.e. after consent
  function track(name, params) {
    if (gaLoaded && typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }
  window.madysTrack = track;

  const LOGO_IMG = `<img src="logo.png?v=2" alt="MADYS Conciergerie" style="height:54px;width:auto;display:block;">`;

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
      <li><a href="faq.html" class="${isActive('faq.html')}">FAQ</a></li>
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
        <p class="footer-slogan">« Louez l'esprit léger »</p>
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
        <p class="footer-col-title">Informations</p>
        <ul class="footer-links">
          <li><a href="faq.html">Questions fréquentes</a></li>
          <li><a href="mentions-legales.html">Mentions Légales</a></li>
          <li><a href="confidentialite.html">Politique de Confidentialité</a></li>
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
        <a href="https://g.page/r/CbkULGfgs1-1EBM/review" target="_blank" rel="noopener" class="footer-review-btn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192z"/></svg>
          Laisser un avis Google
        </a>
      </div>
    </div>
    <div class="footer-zones" role="navigation" aria-label="Nos secteurs d'intervention">
      <span class="footer-zones-title">Nos secteurs</span>
      <a href="conciergerie-airbnb-paris.html">Paris</a>
      <a href="conciergerie-airbnb-malakoff.html">Malakoff</a>
      <a href="conciergerie-airbnb-montrouge.html">Montrouge</a>
      <a href="conciergerie-airbnb-vanves.html">Vanves</a>
      <a href="conciergerie-airbnb-chatillon.html">Châtillon</a>
      <a href="conciergerie-airbnb-bagneux.html">Bagneux</a>
      <a href="conciergerie-airbnb-clamart.html">Clamart</a>
      <a href="conciergerie-airbnb-issy-les-moulineaux.html">Issy-les-Moulineaux</a>
      <a href="conciergerie-airbnb-boulogne-billancourt.html">Boulogne-Billancourt</a>
      <a href="conciergerie-airbnb-meudon.html">Meudon</a>
      <a href="conciergerie-airbnb-sevres.html">Sèvres</a>
      <a href="conciergerie-airbnb-chaville.html">Chaville</a>
      <a href="conciergerie-airbnb-fontenay-aux-roses.html">Fontenay-aux-Roses</a>
      <a href="conciergerie-airbnb-sceaux.html">Sceaux</a>
      <a href="conciergerie-airbnb-bourg-la-reine.html">Bourg-la-Reine</a>
      <a href="conciergerie-airbnb-le-plessis-robinson.html">Le Plessis-Robinson</a>
      <a href="conciergerie-airbnb-chatenay-malabry.html">Châtenay-Malabry</a>
      <a href="conciergerie-airbnb-antony.html">Antony</a>
      <a href="conciergerie-airbnb-rueil-malmaison.html">Rueil-Malmaison</a>
      <a href="conciergerie-airbnb-arcueil.html">Arcueil</a>
      <a href="conciergerie-airbnb-cachan.html">Cachan</a>
      <a href="conciergerie-airbnb-gentilly.html">Gentilly</a>
      <a href="conciergerie-airbnb-le-kremlin-bicetre.html">Le Kremlin-Bicêtre</a>
      <a href="conciergerie-airbnb-ivry-sur-seine.html">Ivry-sur-Seine</a>
      <a href="conciergerie-airbnb-villejuif.html">Villejuif</a>
      <a href="conciergerie-airbnb-vitry-sur-seine.html">Vitry-sur-Seine</a>
      <a href="conciergerie-airbnb-lhay-les-roses.html">L'Haÿ-les-Roses</a>
      <a href="conciergerie-airbnb-chevilly-larue.html">Chevilly-Larue</a>
      <a href="conciergerie-airbnb-fresnes.html">Fresnes</a>
      <a href="conciergerie-airbnb-rungis.html">Rungis</a>
      <a href="conciergerie-airbnb-thiais.html">Thiais</a>
      <a href="conciergerie-airbnb-choisy-le-roi.html">Choisy-le-Roi</a>
      <a href="conciergerie-airbnb-orly.html">Orly</a>
      <a href="conciergerie-airbnb-versailles.html">Versailles</a>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2026 Madys Conciergerie. Tous droits réservés.</p>
      <div class="footer-legal">
        <a href="mentions-legales.html">Mentions Légales</a>
        <a href="confidentialite.html">Confidentialité</a>
      </div>
    </div>
  </footer>`;

  // Favicon (icône de l'onglet)
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = 'favicon.png?v=7';
  document.head.appendChild(favicon);

  const whatsappHTML = `
  <a href="https://wa.me/33603236807?text=Bonjour%20MADYS%2C%20je%20souhaite%20des%20informations%20sur%20vos%20services."
     target="_blank" rel="noopener" class="whatsapp-float" aria-label="Contacter sur WhatsApp" title="Écrivez-nous sur WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.728-.979zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
  </a>`;

  const cookieBannerHTML = `
  <div class="cookie-banner" id="cookie-banner" role="dialog" aria-live="polite" aria-label="Consentement aux cookies" hidden>
    <p class="cookie-text">
      Nous utilisons des cookies de mesure d'audience (Google Analytics) pour améliorer votre expérience.
      Vous pouvez les accepter ou les refuser. En savoir plus dans notre
      <a href="confidentialite.html">politique de confidentialité</a>.
    </p>
    <div class="cookie-actions">
      <button type="button" class="cookie-btn cookie-refuse" id="cookie-refuse">Refuser</button>
      <button type="button" class="cookie-btn cookie-accept" id="cookie-accept">Accepter</button>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  document.body.insertAdjacentHTML('beforeend', whatsappHTML);
  document.body.insertAdjacentHTML('beforeend', cookieBannerHTML);

  // Cookie consent logic
  (function() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    const choice = localStorage.getItem('madys-cookie-consent');
    if (!choice) {
      banner.hidden = false;
      requestAnimationFrame(() => banner.classList.add('visible'));
    }
    function close() { banner.classList.remove('visible'); setTimeout(() => { banner.hidden = true; }, 350); }
    const accept = document.getElementById('cookie-accept');
    const refuse = document.getElementById('cookie-refuse');
    if (accept) accept.addEventListener('click', () => {
      localStorage.setItem('madys-cookie-consent', 'accepted');
      loadGoogleAnalytics();
      close();
    });
    if (refuse) refuse.addEventListener('click', () => {
      localStorage.setItem('madys-cookie-consent', 'refused');
      close();
    });
  })();

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

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Pinned scrollytelling needs enough viewport height for a scene to fit: large
  // screens, and phones tall enough in portrait. Decided from the width and the
  // height at load, never re-evaluated on height alone, because a phone's address
  // bar showing or hiding changes the height mid-scroll.
  const PIN_QUERY = '(min-width: 901px) and (min-height: 680px), (max-width: 900px) and (min-height: 640px)';
  const canPin = () => !reduceMotion && window.matchMedia(PIN_QUERY).matches;
  window.madysCanPin = canPin;

  // Single scroll loop: navbar state, reading progress bar and hero parallax
  // all share one requestAnimationFrame per frame.
  const nav = document.querySelector('nav');
  const hero = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero-bg');
  const heroParts = hero ? Array.from(hero.querySelectorAll('.hero-bg, .hero-content')) : [];
  let lastHp = '';
  const parallaxOn = heroBg && !reduceMotion && window.matchMedia('(min-width: 768px)').matches;
  document.body.insertAdjacentHTML('beforeend', '<div class="scroll-progress" aria-hidden="true"></div>');
  const progressBar = document.querySelector('.scroll-progress');
  let scrollTicking = false;
  const onScrollFrame = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 60);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    if (parallaxOn && y <= window.innerHeight) {
      heroBg.style.transform = 'scale(1.12) translate3d(0,' + (y * 0.25).toFixed(1) + 'px,0)';
    }
    // Hero content recedes as the page scrolls away (--hp goes 0 → 1)
    if (hero && !reduceMotion && y <= window.innerHeight) {
      const hp = Math.min(y / window.innerHeight, 1).toFixed(3);
      if (hp !== lastHp) { lastHp = hp; heroParts.forEach(el => el.style.setProperty('--hp', hp)); }
    }
    scrollTicking = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollTicking) { scrollTicking = true; window.requestAnimationFrame(onScrollFrame); }
  }, { passive: true });
  onScrollFrame();

  // Scroll reveal animations
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealSelectors = [
      '.section-header', '.why-image-wrap', '.why-list li', '.why-actions', '.process-card',
      '.avantage-card', '.stats-grid > div', '.contact-card', '.contact-info-title',
      '.faq-item', '.cta-band-inner', '.step-card', '.service-card', '.legal-inner h2',
      '.contact-form-wrap', '.avantages-img', '.sim-card', '.platforms-inner',
      '.testimonial-card', '.step-row', '.video-frame', '.contact-reviews', '.tarif-card', '.city-points li', '.city-card', '.city-intro-img', '.zones-list li', '.gift-card'
    ];
    // Elements driven by a pinned scene (track cards, steps) are animated by the scene itself
    const pinCapable = canPin();
    const els = Array.from(document.querySelectorAll(revealSelectors.join(',')))
      .filter(el => !(el.closest('[data-scrolly-track]') || (pinCapable && el.matches('[data-scrolly-step]'))));
    // Once revealed, strip every reveal artefact so the element's own hover
    // transitions run without the stagger delay or the slow reveal timing.
    const settle = el => {
      if (!el.classList.contains('reveal')) return;
      el.classList.remove('reveal', 'reveal-left', 'visible');
      el.style.transitionDelay = '';
    };
    els.forEach(el => {
      el.classList.add('reveal');
      if (el.matches('.why-image-wrap')) el.classList.add('reveal-left');
      // Stagger items inside the same parent (grids/lists)
      const siblings = Array.from(el.parentElement ? el.parentElement.children : []);
      const idx = siblings.indexOf(el);
      if (idx > 0) el.style.transitionDelay = Math.min(idx * 0.08, 0.4) + 's';
      el.addEventListener('transitionend', e => {
        if (e.target === el && e.propertyName === 'opacity') settle(el);
      });
    });
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
          setTimeout(() => settle(entry.target), 1600);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => observer.observe(el));
  }

  // Count-up on key figures when they scroll into view (e.g. "+30%", "100%", "4.9★")
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const figures = document.querySelectorAll('.stat-num, .why-stat-num');
    const countObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);
        const el = entry.target;
        const m = el.textContent.trim().match(/^(\+?)(\d+(?:[.,]\d+)?)(%|★)$/);
        if (!m) return;
        const target = parseFloat(m[2].replace(',', '.'));
        const decimals = (m[2].split(/[.,]/)[1] || '').length;
        const start = performance.now(), duration = 1100;
        const frame = now => {
          const p = Math.min((now - start) / duration, 1);
          const v = target * (1 - Math.pow(1 - p, 3));
          el.textContent = m[1] + v.toFixed(decimals) + m[3];
          if (p < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      });
    }, { threshold: 0.6 });
    figures.forEach(el => countObserver.observe(el));
  }

  // Soft fade-in for lazy images as they finish loading
  if (!reduceMotion) {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      if (img.complete) return;
      img.addEventListener('load', () => img.classList.add('img-in'), { once: true });
    });
  }

  // 3D tilt on cards (desktop with mouse only)
  if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const tiltCards = document.querySelectorAll(
      '.service-card, .testimonial-card, .tarif-card, .step-card'
    );
    tiltCards.forEach(card => {
      let raf = null;
      card.addEventListener('mouseenter', () => {
        if (card.classList.contains('reveal')) return;
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease';
      });
      card.addEventListener('mousemove', e => {
        if (raf || card.classList.contains('reveal')) return;
        raf = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform =
            'perspective(900px) rotateX(' + (-py * 5).toFixed(2) + 'deg)' +
            ' rotateY(' + (px * 7).toFixed(2) + 'deg)' +
            ' translateY(-4px) scale(1.015)';
          raf = null;
        });
      });
      card.addEventListener('mouseleave', () => {
        if (raf) { cancelAnimationFrame(raf); raf = null; }
        card.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease';
        card.style.transform = '';
        setTimeout(() => { card.style.transition = ''; }, 600);
      });
    });
  }

  // Scrollytelling engine. A [data-scrolly] section runs in one of four modes:
  //   pin   – large screens: the scene is pinned and scroll progress drives it
  //   snap  – phones: pinned too, but with one snap point per step, so one swipe
  //           moves exactly one step
  //   swipe – phones, sections with a [data-scrolly-track]: no pinning; the track is
  //           a native horizontal carousel and vertical swipes scroll the page
  //   off   – reduced motion or very short screens: normal stacked layout
  // Progress (0 → 1) is written as --p on the few [data-p] elements that use it,
  // not on the section, so a scroll frame never restyles the whole subtree.
  (function () {
    const sections = Array.from(document.querySelectorAll('[data-scrolly]'));
    if (!sections.length) return;
    const NAV_H = 72;
    const pad = n => String(n).padStart(2, '0');
    const clamp01 = v => Math.min(Math.max(v, 0), 1);
    const mobileMq = window.matchMedia('(max-width: 900px)');
    const states = sections.map(section => ({
      section,
      steps: Array.from(section.querySelectorAll('[data-scrolly-step]')),
      track: section.querySelector('[data-scrolly-track]'),
      counter: section.querySelector('[data-scrolly-count]'),
      sticky: section.querySelector('[data-scrolly-sticky]'),
      targets: Array.from(section.querySelectorAll('[data-p]')),
      markers: [],
      mode: 'off', current: -1, shift: 0, travel: 0, lastP: -1, swipeBound: false
    }));
    let ticking = false, lastWidth = window.innerWidth;

    function setProgress(st, p) {
      const v = p.toFixed(3);
      if (v === st.lastP) return;
      st.lastP = v;
      st.targets.forEach(t => t.style.setProperty('--p', v));
    }
    function setStep(st, idx) {
      if (idx === st.current) return;
      st.current = idx;
      st.steps.forEach((s, i) => {
        s.classList.toggle('is-active', i === idx);
        s.classList.toggle('is-past', i < idx);
      });
      if (st.counter) st.counter.textContent = pad(idx + 1) + ' / ' + pad(st.steps.length);
    }

    function update() {
      ticking = false;
      const vh = window.innerHeight;
      states.forEach(st => {
        if (st.mode !== 'pin' && st.mode !== 'snap') return;
        const rect = st.section.getBoundingClientRect();
        if (rect.bottom < -vh || rect.top > vh * 2) return;
        const travel = st.travel || (rect.height - vh + NAV_H);
        const p = travel > 0 ? clamp01((NAV_H - rect.top) / travel) : 0;
        setProgress(st, p);
        if (st.track) st.track.style.transform = 'translate3d(' + (-p * st.shift).toFixed(1) + 'px,0,0)';
        const n = st.steps.length;
        if (!n) return;
        setStep(st, st.mode === 'snap' ? Math.round(p * (n - 1)) : Math.min(n - 1, Math.floor(p * n)));
      });
    }

    // Carousel mode: the counter and the progress bar follow the horizontal scroll
    function bindSwipe(st) {
      if (st.swipeBound) return;
      st.swipeBound = true;
      let swipeTicking = false;
      const onSwipe = () => {
        swipeTicking = false;
        if (st.mode !== 'swipe') return;
        const max = st.track.scrollWidth - st.track.clientWidth;
        const p = max > 0 ? clamp01(st.track.scrollLeft / max) : 0;
        setProgress(st, p);
        if (st.steps.length) setStep(st, Math.round(p * (st.steps.length - 1)));
      };
      st.track.addEventListener('scroll', () => {
        if (!swipeTicking) { swipeTicking = true; requestAnimationFrame(onSwipe); }
      }, { passive: true });
      onSwipe();
    }

    function layout() {
      lastWidth = window.innerWidth;
      const pinOk = canPin();
      const mobile = mobileMq.matches;
      let anySnap = false;
      states.forEach(st => {
        st.markers.forEach(m => m.remove());
        st.markers = [];
        st.current = -1; st.travel = 0; st.lastP = -1;
        st.steps.forEach(s => s.classList.remove('is-active', 'is-past'));
        st.section.style.height = '';
        if (st.track) st.track.style.transform = '';

        if (st.track && mobile) st.mode = 'swipe';
        else if (!pinOk) st.mode = 'off';
        else if (mobile && st.sticky && st.steps.length > 1) st.mode = 'snap';
        else st.mode = 'pin';
        st.section.classList.toggle('is-pinned', st.mode === 'pin' || st.mode === 'snap');
        st.section.classList.toggle('is-swipe', st.mode === 'swipe');

        if (st.mode === 'pin' && st.track) {
          st.shift = Math.max(0, st.track.scrollWidth - st.track.parentElement.clientWidth);
          st.section.style.height = Math.round(window.innerHeight + st.shift * 0.55) + 'px';
        }
        if (st.mode === 'snap') {
          // One short stretch of scroll per step, with a snap point at each one
          const n = st.steps.length;
          const stepLen = Math.round(window.innerHeight * 0.45);
          st.travel = (n - 1) * stepLen;
          st.section.style.height = (st.sticky.offsetHeight + st.travel) + 'px';
          // No snap point on the last step: the page must flow on freely after it
          for (let i = 0; i < n - 1; i++) {
            const m = document.createElement('div');
            m.className = 'scrolly-snap';
            m.style.top = (i * stepLen) + 'px';
            st.section.appendChild(m);
            st.markers.push(m);
          }
          anySnap = true;
        }
        if (st.mode === 'swipe') bindSwipe(st);
      });
      document.documentElement.classList.toggle('has-scroll-snap', anySnap);
      update();
    }

    const requestUpdate = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    let resizeTimer = null;
    window.addEventListener('scroll', requestUpdate, { passive: true });
    // Re-layout only when the width changes (rotation, window resize). Height-only
    // changes come from the mobile address bar and must not reset a running scene.
    window.addEventListener('resize', () => {
      if (window.innerWidth === lastWidth) { requestUpdate(); return; }
      clearTimeout(resizeTimer); resizeTimer = setTimeout(layout, 120);
    });
    window.addEventListener('load', layout);
    layout();
  })();

  // Word-by-word text reveal linked to scroll (no pinning)
  if (!reduceMotion) {
    document.querySelectorAll('[data-word-reveal]').forEach(el => {
      const words = el.textContent.trim().split(/\s+/);
      el.setAttribute('aria-label', words.join(' '));
      el.innerHTML = words.map(w => '<span aria-hidden="true">' + w + '</span>').join(' ');
      el.classList.add('wr-ready');
      const spans = Array.from(el.children);
      let lit = -1, wrTicking = false;
      const paint = () => {
        wrTicking = false;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(Math.max((vh * 0.85 - rect.top) / (vh * 0.5), 0), 1);
        const n = Math.round(p * spans.length);
        if (n === lit) return;
        lit = n;
        spans.forEach((s, i) => s.classList.toggle('on', i < n));
      };
      window.addEventListener('scroll', () => { if (!wrTicking) { wrTicking = true; requestAnimationFrame(paint); } }, { passive: true });
      paint();
    });
  }

  // City finder: the list is collapsed by default, a search field filters it
  // (accents and case ignored), and a button reveals every city.
  (function () {
    const section = document.querySelector('.zones-section');
    if (!section) return;
    const list = section.querySelector('.zones-list');
    const input = section.querySelector('.zones-search-input');
    const toggle = section.querySelector('.zones-toggle');
    const empty = section.querySelector('.zones-empty');
    if (!list || !input || !toggle) return;
    const items = Array.from(list.children);
    const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const keys = items.map(li => norm(li.textContent.replace('Conciergerie Airbnb', '')));
    const total = items.length;
    list.classList.add('zones-collapsed');
    toggle.hidden = false;

    function setExpanded(open) {
      list.classList.toggle('zones-collapsed', !open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Réduire la liste' : 'Voir les ' + total + ' villes';
    }
    setExpanded(false);

    toggle.addEventListener('click', () => {
      const open = list.classList.contains('zones-collapsed');
      setExpanded(open);
      if (!open) section.scrollIntoView({ block: 'start' });
    });

    input.addEventListener('input', () => {
      const q = norm(input.value);
      const searching = q.length > 0;
      list.classList.toggle('zones-searching', searching);
      let shown = 0;
      items.forEach((li, i) => {
        const match = !searching || keys[i].indexOf(q) !== -1;
        li.hidden = !match;
        if (match) shown++;
      });
      toggle.hidden = searching;
      if (empty) empty.hidden = !(searching && shown === 0);
    });
  })();

  // Revenue simulator
  const simGo = document.getElementById('sim-go');
  if (simGo) {
    const nightlyBase = { studio: 95, t2: 135, t3: 185, t4: 255 };
    const rentBase = { studio: 820, t2: 1120, t3: 1520, t4: 2050 };
    const zoneNight = { paris: 1.40, petite: 1.00, grande: 0.78 };
    const zoneRent = { paris: 1.45, petite: 1.00, grande: 0.82 };
    const occupancy = 0.85;
    const nightsPerMonth = 30 * occupancy;
    const fmt = n => new Intl.NumberFormat('fr-FR').format(Math.round(n / 10) * 10);
    const noAnim = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Animated count-up between two numbers
    function countUp(el, low, high, suffix) {
      if (noAnim) { el.textContent = fmt(low) + ' – ' + fmt(high) + suffix; return; }
      const duration = 900, start = performance.now();
      const ease = t => 1 - Math.pow(1 - t, 3); // easeOutCubic
      function frame(now) {
        const p = Math.min((now - start) / duration, 1);
        const e = ease(p);
        el.textContent = fmt(low * e) + ' – ' + fmt(high * e) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    simGo.addEventListener('click', () => {
      const zone = document.getElementById('sim-zone').value;
      const type = document.getElementById('sim-type').value;
      const standing = parseFloat(document.getElementById('sim-standing').value);
      const nightly = nightlyBase[type] * zoneNight[zone] * standing;
      const lcd = nightly * nightsPerMonth;
      const rent = rentBase[type] * zoneRent[zone];
      const uplift = Math.round((lcd / rent - 1) * 100);
      const result = document.getElementById('sim-result');
      result.hidden = false;
      countUp(document.getElementById('sim-value'), lcd * 0.9, lcd * 1.1, ' € / mois');
      const upliftEl = document.getElementById('sim-uplift');
      upliftEl.textContent = uplift > 0 ? 'Soit environ +' + uplift + ' % vs une location classique' : '';
    });
  }

  // Let the browser decode images off the main thread
  document.querySelectorAll('img').forEach(img => { img.decoding = 'async'; });

  // Conversion tracking (one delegated listener for all clicks)
  document.addEventListener('click', e => {
    const a = e.target.closest('a, button');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const page = currentPage;
    if (a.classList.contains('whatsapp-float') || href.indexOf('wa.me') !== -1) track('whatsapp_click', { page });
    else if (href.indexOf('g.page/r/') !== -1) track('google_reviews_click', { page, kind: href.indexOf('/review') !== -1 ? 'write' : 'read' });
    else if (href.indexOf('tel:') === 0) track('phone_click', { page });
    else if (href.indexOf('mailto:') === 0) track('email_click', { page });
    else if (href.indexOf('contact.html') !== -1) track('cta_rdv_click', { page, label: a.textContent.trim().slice(0, 40) });
    else if (a.id === 'sim-go') track('simulator_used', { page });
  });
  const promo = document.querySelector('.video-frame video');
  if (promo) promo.addEventListener('play', () => track('video_play', { page: currentPage }), { once: true });

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
