// Meridian Shared Layout System (Navbar, Footer, Cart Drawer, Modal)
// Theme: matches index.html editorial design — Inter + JetBrains Mono, bone bg, ink text, green accent

document.addEventListener("DOMContentLoaded", () => {
  // 1. Detect relative root path prefix
  const rootPath = document.querySelector('meta[name="root-path"]')?.getAttribute('content') || './';

  // 2. Inject Navbar HTML
  const navbarHTML = `
    <div class="m-topbar">
      <div class="m-topbar-content">
        <span class="m-status-live">Live Pharmacy</span>
        <svg class="m-ecg-svg" width="80" height="20" viewBox="0 0 80 20" fill="none" aria-hidden="true">
          <path class="m-ecg-path" d="M0 10 L12 10 L16 3 L20 17 L24 10 L30 10 L33 6 L36 14 L39 10 L50 10 L54 2 L58 18 L62 10 L80 10" stroke="#2B5C4F" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </div>
    </div>
    <header class="m-header" id="m-main-header">
      <div class="wrap m-nav-row">
        <a href="${rootPath}index.html" class="m-logo" style="display:flex;align-items:center;gap:7px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="color:var(--accent);flex-shrink:0;"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>
          Meridian<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <ul class="m-nav-links">
            <li><a href="${rootPath}index.html" class="m-nav-link">Home</a></li>
            <li><a href="${rootPath}public/pages/home-2.html" class="m-nav-link">Home 2</a></li>
            <li><a href="${rootPath}public/pages/about.html" class="m-nav-link">About</a></li>
            <li><a href="${rootPath}public/pages/products.html" class="m-nav-link">Shop</a></li>
            <li><a href="${rootPath}public/pages/blog.html" class="m-nav-link">Blog</a></li>
            <li><a href="${rootPath}public/pages/contact.html" class="m-nav-link">Contact</a></li>
          </ul>
        </nav>

        <div class="m-nav-right">

          <!-- Theme Toggle -->
          <button class="m-toggle-btn m-theme-toggle" id="themeToggleBtn" aria-label="Toggle dark/light mode" title="Toggle theme">
            <!-- Sun icon (shown in dark mode) -->
            <svg class="m-icon-moon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <!-- Moon icon (shown in light mode) -->
            <svg class="m-icon-sun" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/>
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- RTL Toggle -->
          <button class="m-toggle-btn m-rtl-toggle" id="rtlToggleBtn" aria-label="Toggle text direction RTL/LTR" title="Toggle RTL/LTR">RTL</button>

          <!-- Cart -->
          <button class="m-icon-btn" id="cartTriggerBtn" aria-label="Shopping Cart">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h8.2a2 2 0 002-1.6L21 8H6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="10" cy="21" r="1.2" fill="currentColor"/>
              <circle cx="18" cy="21" r="1.2" fill="currentColor"/>
            </svg>
            <span id="cartCountBadge" class="m-cart-badge">0</span>
          </button>

          <!-- User Dropdown -->
          <div class="m-dropdown-wrap">
            <button class="m-icon-btn" id="profileDropdownBtn" aria-label="Account">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.6"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </button>
            <div id="profileDropdownMenu" class="m-dropdown-menu">
              <div id="dropdownGuestState">
                <a href="${rootPath}public/auth/login.html" class="m-dropdown-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  Sign in
                </a>
                <a href="${rootPath}public/auth/signup.html" class="m-dropdown-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zM20 8v6M23 11h-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  Create account
                </a>
              </div>
              <div id="dropdownUserState" style="display:none;">
                <div class="m-dropdown-header">
                  <p>Signed in as</p>
                  <strong id="dropdownUsername"></strong>
                  <span id="dropdownRoleTag" class="m-role-tag">USER</span>
                </div>
                <a id="dashboardRedirectLink" href="#" class="m-dropdown-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6"/></svg>
                  My Dashboard
                </a>
                <button id="navbarLogoutBtn" class="m-dropdown-item danger">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  Sign out
                </button>
              </div>
            </div>
          </div>

          <!-- Mobile hamburger -->
          <button class="m-hamburger" id="mobileMenuBtn" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Drawer -->
      <nav class="m-mobile-drawer" id="mobileNavigationPanel" aria-label="Mobile navigation">
        <a href="${rootPath}index.html">Home</a>
        <a href="${rootPath}public/pages/home-2.html">Home 2</a>
        <a href="${rootPath}public/pages/about.html">About</a>
        <a href="${rootPath}public/pages/products.html">Shop</a>
        <a href="${rootPath}public/pages/blog.html">Blog</a>
        <a href="${rootPath}public/pages/contact.html">Contact</a>
      </nav>
    </header>
  `;

  // 3. Cart Drawer HTML
  const cartDrawerHTML = `
    <div id="cartDrawerOverlay" class="m-cart-overlay"></div>
    <div id="cartDrawer" class="m-cart-drawer">
      <div class="m-cart-head">
        <h3>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h8.2a2 2 0 002-1.6L21 8H6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="21" r="1.2" fill="currentColor"/><circle cx="18" cy="21" r="1.2" fill="currentColor"/></svg>
          Cart
        </h3>
        <button class="m-icon-btn" id="cartCloseBtn" aria-label="Close cart">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div id="cartItemsList" class="m-cart-items">
        <div class="m-cart-empty">
          <svg viewBox="0 0 24 24" fill="none"><path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h8.2a2 2 0 002-1.6L21 8H6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="21" r="1.2" fill="currentColor"/><circle cx="18" cy="21" r="1.2" fill="currentColor"/></svg>
          Your cart is empty.
        </div>
      </div>
      <div class="m-cart-footer">
        <div class="m-cart-rx-warn">PRESCRIPTION CHECK: <span id="cartPrescriptionWarning">NOT REQUIRED</span></div>
        <div class="m-cart-total-row">
          <span class="total-label">Estimated total</span>
          <span class="total-amount" id="cartEstimatedTotal">₹0.00</span>
        </div>
        <button id="cartCheckoutBtn" class="m-btn solid" style="width:100%;justify-content:center;">
          Secure Checkout →
        </button>
      </div>
    </div>
  `;

  // 4. Footer HTML
  const footerHTML = `
    <footer class="m-footer">
      <div class="wrap">
        <div class="m-foot-grid">
          <div class="m-foot-brand">
            <a href="${rootPath}index.html" class="m-logo" style="display:flex;align-items:center;gap:7px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="color:var(--accent);flex-shrink:0;"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>
              Meridian<span>.</span>
            </a>
            <p>A licensed online pharmacy and medical store. Every order reviewed by a registered pharmacist before it ships.</p>
          </div>
          <div class="m-foot-col">
            <h5>Quick Links</h5>
            <a href="${rootPath}index.html">Home</a>
            <a href="${rootPath}public/pages/home-2.html">Home 2</a>
            <a href="${rootPath}public/pages/products.html">Shop</a>
          </div>
          <div class="m-foot-col">
            <h5>Company</h5>
            <a href="${rootPath}public/pages/about.html">About Meridian</a>
            <a href="${rootPath}public/pages/pricing.html">Membership plans</a>
            <a href="${rootPath}public/pages/blog.html">Our Blog</a>
          </div>
          <div class="m-foot-col">
            <h5>Support</h5>
            <a href="${rootPath}public/pages/contact.html">Contact</a>
            <a href="${rootPath}public/pages/FAQ.html">FAQ</a>
            <a href="${rootPath}public/pages/Terms-of-service.html">Terms</a>
            <a href="${rootPath}public/pages/Privacy-policy.html">Privacy Policy</a>
          </div>
        </div>
        <div class="m-foot-bottom">
          <span>© 2026 MERIDIAN PHARMACY — REG. NO. MP-2291</span>
          <span>NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE</span>
        </div>
      </div>
    </footer>
  `;

  // 5. Inject into DOM
  const navContainer = document.getElementById("navbar-container");
  const footerContainer = document.getElementById("footer-container");

  if (navContainer) {
    navContainer.innerHTML = navbarHTML;
  } else {
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
  }

  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }

  document.body.insertAdjacentHTML("beforeend", cartDrawerHTML);

  // 6. Active nav link highlighting
  const currentPath = window.location.pathname;
  document.querySelectorAll(".m-nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href && (currentPath.endsWith(href) || currentPath.includes(href.replace(rootPath, '').split('?')[0]))) {
      link.style.color = 'var(--ink)';
      link.style.fontWeight = '600';
    }
  });

  // 7. Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNavigationPanel = document.getElementById("mobileNavigationPanel");
  if (mobileMenuBtn && mobileNavigationPanel) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileNavigationPanel.classList.toggle("open");
    });
  }

  // 8. Profile dropdown
  const profileDropdownBtn = document.getElementById("profileDropdownBtn");
  const profileDropdownMenu = document.getElementById("profileDropdownMenu");
  if (profileDropdownBtn && profileDropdownMenu) {
    profileDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      profileDropdownMenu.classList.toggle("open");
    });
    document.addEventListener("click", () => {
      profileDropdownMenu.classList.remove("open");
    });
  }

  // 9. Cart Open/Close
  const cartTriggerBtn = document.getElementById("cartTriggerBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartDrawerOverlay = document.getElementById("cartDrawerOverlay");
  const cartCloseBtn = document.getElementById("cartCloseBtn");

  function toggleCart(open) {
    if (open) {
      cartDrawer?.classList.add("open");
      cartDrawerOverlay?.classList.add("open");
    } else {
      cartDrawer?.classList.remove("open");
      cartDrawerOverlay?.classList.remove("open");
    }
  }

  cartTriggerBtn?.addEventListener("click", () => toggleCart(true));
  cartCloseBtn?.addEventListener("click", () => toggleCart(false));
  cartDrawerOverlay?.addEventListener("click", () => toggleCart(false));

  // 10. Cart operations
  window.medPlusCart = JSON.parse(localStorage.getItem("medplus-cart")) || [];

  window.updateCartUI = function () {
    const listContainer = document.getElementById("cartItemsList");
    const countBadge = document.getElementById("cartCountBadge");
    const prescriptionWarning = document.getElementById("cartPrescriptionWarning");
    const estimatedTotal = document.getElementById("cartEstimatedTotal");

    if (!listContainer) return;

    if (window.medPlusCart.length === 0) {
      listContainer.innerHTML = `
        <div class="m-cart-empty">
          <svg viewBox="0 0 24 24" fill="none" style="width:48px;height:48px;opacity:.3;"><path d="M3 4h2l2.4 12.2a2 2 0 002 1.8h8.2a2 2 0 002-1.6L21 8H6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="21" r="1.2" fill="currentColor"/><circle cx="18" cy="21" r="1.2" fill="currentColor"/></svg>
          Your cart is empty.
        </div>`;
      if (countBadge) countBadge.classList.remove("visible");
      if (estimatedTotal) estimatedTotal.innerText = "₹0.00";
      if (prescriptionWarning) prescriptionWarning.innerText = "NOT REQUIRED";
      return;
    }

    let totalItems = 0, totalPrice = 0, rxRequired = false, listHTML = "";

    window.medPlusCart.forEach((item, index) => {
      totalItems += item.qty;
      totalPrice += item.price * item.qty;
      if (item.prescriptionRequired) rxRequired = true;

      listHTML += `
        <div class="m-cart-item">
          <div style="flex:1;min-width:0;">
            <div class="m-cart-item-name">${item.name}</div>
            <div class="m-cart-item-price">₹${item.price.toFixed(2)} × ${item.qty}${item.prescriptionRequired ? ' · <span style="color:var(--accent);font-size:0.58rem;">RX</span>' : ''}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <button onclick="changeCartQty(${index}, -1)" class="m-icon-btn" style="border:1px solid var(--line-strong);width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:1rem;">−</button>
            <span style="font-family:'JetBrains Mono',monospace;font-size:0.72rem;width:16px;text-align:center;">${item.qty}</span>
            <button onclick="changeCartQty(${index}, 1)" class="m-icon-btn" style="border:1px solid var(--line-strong);width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:1rem;">+</button>
          </div>
        </div>`;
    });

    listContainer.innerHTML = listHTML;

    if (countBadge) {
      countBadge.innerText = totalItems;
      countBadge.classList.add("visible");
    }
    if (estimatedTotal) estimatedTotal.innerText = `₹${totalPrice.toFixed(2)}`;
    if (prescriptionWarning) {
      prescriptionWarning.innerText = rxRequired ? "REQUIRED — UPLOAD RX" : "NOT REQUIRED";
      prescriptionWarning.style.color = rxRequired ? "#c0620d" : "var(--ink-faint)";
    }
  };

  window.addToCart = function (productId) {
    const product = window.medPlusProducts?.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = window.medPlusCart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      window.medPlusCart[existingIndex].qty += 1;
    } else {
      window.medPlusCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        prescriptionRequired: product.prescriptionRequired,
        qty: 1
      });
    }

    localStorage.setItem("medplus-cart", JSON.stringify(window.medPlusCart));
    window.updateCartUI();
    toggleCart(true);
  };

  window.changeCartQty = function (index, delta) {
    if (index < 0 || index >= window.medPlusCart.length) return;
    window.medPlusCart[index].qty += delta;
    if (window.medPlusCart[index].qty <= 0) window.medPlusCart.splice(index, 1);
    localStorage.setItem("medplus-cart", JSON.stringify(window.medPlusCart));
    window.updateCartUI();
  };

  const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");
  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener("click", () => {
      if (window.medPlusCart.length === 0) {
        alert("Your cart is empty.");
        return;
      }
      const sessionUser = JSON.parse(localStorage.getItem("medplus-session-user"));
      if (!sessionUser) {
        alert("Please sign in to finalise your purchase.");
        window.location.href = `${rootPath}public/auth/login.html`;
        return;
      }
      const rxRequired = window.medPlusCart.some(item => item.prescriptionRequired);
      if (rxRequired) {
        alert("This order contains prescription medicines. Please upload your prescription in your dashboard.");
      }
      window.medPlusCart = [];
      localStorage.removeItem("medplus-cart");
      window.updateCartUI();
      toggleCart(false);
      showNotificationModal("Order placed", "Your prescription has been forwarded to our pharmacy team. We will contact you within 15 minutes to confirm dispatch.");
    });
  }

  // 11. Notification Modal
  window.showNotificationModal = function (title, message) {
    const existing = document.getElementById("m-notification-modal");
    if (existing) existing.remove();

    const modalHTML = `
      <div id="m-notification-modal" class="m-modal-overlay open" role="dialog" aria-modal="true">
        <div class="m-modal">
          <h4>${title}</h4>
          <p>${message}</p>
          <button id="m-modal-close" class="m-btn solid">Continue</button>
        </div>
      </div>`;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
    document.getElementById("m-modal-close").addEventListener("click", () => {
      document.getElementById("m-notification-modal")?.remove();
    });
  };

  // 12. Auth state
  window.checkNavbarAuth = function () {
    const guestState = document.getElementById("dropdownGuestState");
    const userState = document.getElementById("dropdownUserState");
    const dropdownUsername = document.getElementById("dropdownUsername");
    const dropdownRoleTag = document.getElementById("dropdownRoleTag");
    const dashboardRedirectLink = document.getElementById("dashboardRedirectLink");

    const sessionUser = JSON.parse(localStorage.getItem("medplus-session-user"));

    if (sessionUser) {
      if (guestState) guestState.style.display = "none";
      if (userState) userState.style.display = "block";
      if (dropdownUsername) dropdownUsername.innerText = sessionUser.name;
      if (dropdownRoleTag) dropdownRoleTag.innerText = sessionUser.role.toUpperCase();
      if (dashboardRedirectLink) {
        dashboardRedirectLink.setAttribute("href", `${rootPath}auth/${sessionUser.role}/dashboard.html`);
      }
    } else {
      if (guestState) guestState.style.display = "block";
      if (userState) userState.style.display = "none";
    }
  };

  const logoutBtn = document.getElementById("navbarLogoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("medplus-session-user");
      window.checkNavbarAuth();
      window.location.href = `${rootPath}index.html`;
    });
  }

  // 13. Footer newsletter
  const newsletterForm = document.getElementById("newsletterFooterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletterEmailInput")?.value;
      newsletterForm.reset();
      showNotificationModal("Subscribed", `We'll email ${email} when a refill is due or when something you trust is on offer.`);
    });
  }

  // Initial state
  window.updateCartUI();
  window.checkNavbarAuth();

  // ─── THEME (Dark / Light) ─────────────────────────────────────────
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('meridian-theme', theme);
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  // Detect and apply initial theme
  const savedTheme   = localStorage.getItem('meridian-theme');
  const systemDark   = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(savedTheme || (systemDark ? 'dark' : 'light'));

  // React to OS-level theme changes (only when user hasn't overridden)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('meridian-theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ─── RTL (Right-to-Left) ─────────────────────────────────────────
  function applyDir(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('meridian-dir', dir);
    const btn = document.getElementById('rtlToggleBtn');
    if (btn) {
      btn.classList.toggle('active', dir === 'rtl');
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to LTR layout' : 'Switch to RTL layout');
      btn.title = dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL';
    }
  }

  // Detect RTL languages from browser settings
  const rtlLangs    = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'yi'];
  const sysLang     = (navigator.language || '').split('-')[0];
  const savedDir    = localStorage.getItem('meridian-dir');
  applyDir(savedDir || (rtlLangs.includes(sysLang) ? 'rtl' : 'ltr'));

  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('dir') || 'ltr';
      applyDir(current === 'rtl' ? 'ltr' : 'rtl');
    });
  }

  // ─── REVEAL ON SCROLL INTERSECTION OBSERVER ───────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      revealEls.forEach(el => io.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('in'));
    }
  }
});
