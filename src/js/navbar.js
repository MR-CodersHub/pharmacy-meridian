// Meridian Shared Layout System (Navbar, Footer, Cart Drawer, Modal)
// Theme: matches index.html editorial design — Inter + JetBrains Mono, bone bg, ink text, green accent

function initNavbar() {
  // 1. Detect relative root path prefix
  const rootPath = document.querySelector('meta[name="root-path"]')?.getAttribute('content') || './';

  // 2. Inject Navbar HTML
  const navbarHTML = `
    <div class="m-topbar">
      <div class="m-topbar-content">
        <span class="m-status-live">Local Pharmacy &amp; Home Delivery</span>
        <svg class="m-ecg-svg" width="80" height="20" viewBox="0 0 80 20" fill="none" aria-hidden="true">
          <path class="m-ecg-path" d="M0 10 L12 10 L16 3 L20 17 L24 10 L30 10 L33 6 L36 14 L39 10 L50 10 L54 2 L58 18 L62 10 L80 10" stroke="#059669" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </div>
    </div>
    <header class="m-header" id="m-main-header">
      <div class="wrap m-nav-row">
        <a href="${rootPath}index.html" class="m-logo" style="display:flex;align-items:center;gap:7px;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="color:var(--accent);flex-shrink:0;"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/></svg>
          Meridian<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <ul class="m-nav-links">
            <li><a href="${rootPath}index.html" class="m-nav-link">Home</a></li>
            <li><a href="${rootPath}public/pages/home-2.html" class="m-nav-link">Home 2</a></li>
            <li><a href="${rootPath}public/pages/about.html" class="m-nav-link">About Us</a></li>
            <li><a href="${rootPath}public/pages/products.html" class="m-nav-link">Medicines</a></li>
            <li><a href="${rootPath}public/pages/blog.html" class="m-nav-link">Blog</a></li>
            <li><a href="${rootPath}public/pages/contact.html" class="m-nav-link">Contact</a></li>
          </ul>
        </nav>

        <div class="m-nav-right">
          <!-- Theme Toggle -->
          <button class="m-toggle-btn m-theme-toggle" id="themeToggleBtn" aria-label="Toggle dark/light mode" title="Toggle theme">
            <svg class="m-icon-moon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="m-icon-sun" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/>
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- RTL Toggle -->
          <button class="m-toggle-btn m-rtl-toggle" id="rtlToggleBtn" aria-label="Toggle text direction RTL/LTR" title="Toggle RTL/LTR">RTL</button>

          <!-- Primary Prescription CTA (replaces profile icon) -->
          <button class="nav-cta-btn open-rx-modal-btn" aria-label="Upload Prescription for Home Delivery">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Upload Prescription
          </button>

          <!-- Mobile navigation toggle icon -->
          <button class="m-hamburger" id="mobileMenuBtn" aria-label="Toggle navigation menu" aria-expanded="false" title="Toggle menu">
            <svg class="m-icon-menu" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg class="m-icon-close" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Drawer -->
      <nav class="m-mobile-drawer" id="mobileNavigationPanel" aria-label="Mobile navigation">
        <a href="${rootPath}index.html">Home</a>
        <a href="${rootPath}public/pages/home-2.html">Home 2</a>
        <a href="${rootPath}public/pages/products.html">Medicines &amp; Supplies</a>
        <a href="${rootPath}public/pages/about.html">About Meridian</a>
        <a href="${rootPath}public/pages/contact.html">Store Info &amp; Timings</a>
        <div style="padding: 16px 20px;">
          <button class="nav-cta-btn open-rx-modal-btn" style="width:100%; justify-content:center;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Upload Prescription
          </button>
        </div>
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
            <a href="${rootPath}public/pages/products.html">Medicines</a>
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

  // 4b. Prescription Upload Modal HTML
  const rxUploadModalHTML = `
    <div id="rxUploadModalOverlay" class="m-modal-overlay" style="display:none; position:fixed; inset:0; z-index:9999; background:rgba(15, 23, 42, 0.6); backdrop-filter:blur(6px); align-items:center; justify-content:center; padding:20px; overflow-y:auto;">
      <div class="m-modal" style="background:var(--card); max-width:640px; width:100%; border-radius:16px; border:1px solid var(--line); padding:32px; position:relative; box-shadow:0 24px 48px rgba(0,0,0,0.2); margin:auto;">
        <button id="rxModalCloseBtn" style="position:absolute; top:20px; right:20px; background:none; border:none; color:var(--ink-soft); font-size:1.5rem; cursor:pointer; line-height:1;" aria-label="Close modal">&times;</button>
        
        <div id="rxModalFormView">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
            <div style="width:40px; height:40px; border-radius:10px; background:var(--accent-light); color:var(--accent); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div>
              <h3 style="font-size:1.2rem; font-weight:700; color:var(--ink); margin:0;">Upload Prescription for Home Delivery</h3>
              <p style="font-size:0.82rem; color:var(--ink-soft); margin:2px 0 0;">Licensed pharmacist verification &amp; direct doorstep dispatch.</p>
            </div>
          </div>

          <form id="globalRxForm" style="display:flex; flex-direction:column; gap:14px;">
            <div class="m-form-row" style="margin-bottom:0; gap:12px;">
              <div class="m-form-group" style="margin:0;">
                <label>Full Name *</label>
                <input type="text" id="rxModalName" class="m-form-input" placeholder="e.g. John Doe" required>
              </div>
              <div class="m-form-group" style="margin:0;">
                <label>Phone Number *</label>
                <input type="tel" id="rxModalPhone" class="m-form-input" placeholder="+1 (555) 019-2834" required>
              </div>
            </div>

            <div class="m-form-group" style="margin:0;">
              <label>Delivery Street Address *</label>
              <input type="text" id="rxModalAddress" class="m-form-input" placeholder="House/Flat No., Street, Building Name" required>
            </div>

            <div class="m-form-row" style="margin-bottom:0; gap:12px;">
              <div class="m-form-group" style="margin:0;">
                <label>City / Neighborhood *</label>
                <input type="text" id="rxModalCity" class="m-form-input" placeholder="e.g. Meridian Valley" required>
              </div>
              <div class="m-form-group" style="margin:0;">
                <label>Pincode / Zip Code *</label>
                <input type="text" id="rxModalPincode" class="m-form-input" placeholder="e.g. 90210" required>
              </div>
            </div>

            <div class="m-form-group" style="margin:0;">
              <label>Attach Prescription Image or PDF *</label>
              <div class="rx-upload-box" id="rxModalDropzone">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style="margin:0 auto 6px; color:var(--accent); display:block;"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span id="rxFileLabel" style="font-size:0.85rem; font-weight:600; color:var(--accent);">Click or Drag &amp; Drop Prescription</span>
                <span style="display:block; font-size:0.75rem; color:var(--ink-faint); margin-top:3px;">JPG, PNG or PDF (Max 10MB)</span>
                <input type="file" id="rxModalFile" accept="image/*,.pdf" required>
              </div>
            </div>

            <div class="m-form-group" style="margin:0;">
              <label>Medications or Pharmacist Notes</label>
              <textarea id="rxModalNotes" class="m-form-textarea" rows="2" placeholder="Mention required drug names, quantities, or specific refill instructions..."></textarea>
            </div>

            <button type="submit" class="nav-cta-btn" style="width:100%; justify-content:center; padding:12px; font-size:0.92rem; margin-top:6px;">
              Submit Order for Home Delivery &rarr;
            </button>
          </form>
        </div>

        <div id="rxModalSuccessView" style="display:none; text-align:center; padding:16px 8px;">
          <div style="width:54px; height:54px; border-radius:50%; background:var(--accent-light); color:var(--accent); display:flex; align-items:center; justify-content:center; margin:0 auto 16px;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 style="font-size:1.3rem; font-weight:700; color:var(--ink); margin-bottom:8px;">Prescription Order Submitted!</h3>
          <p style="font-size:0.88rem; color:var(--ink-soft); line-height:1.6; max-width:440px; margin:0 auto 16px;">
            Our licensed pharmacist is reviewing your prescription. We will contact you at <strong id="rxSuccessPhone"></strong> within 15 minutes to confirm medication pricing &amp; dispatch timing.
          </p>
          <div style="background:var(--bg-slate-tint); border:1px solid var(--line); border-radius:8px; padding:14px; font-size:0.84rem; color:var(--ink-soft); text-align:left; margin-bottom:20px;">
            <div><strong>Delivery Address:</strong> <span id="rxSuccessAddress"></span></div>
            <div style="margin-top:6px;"><strong>Status:</strong> <span style="color:var(--accent); font-weight:600;">Pharmacist Verification Active</span></div>
          </div>
          <button id="rxSuccessCloseBtn" class="nav-cta-btn" style="width:100%; justify-content:center; padding:12px;">Done</button>
        </div>
      </div>
    </div>
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
  document.body.insertAdjacentHTML("beforeend", rxUploadModalHTML);

  // Modal open/close logic
  window.openRxModal = function () {
    const modal = document.getElementById("rxUploadModalOverlay");
    if (modal) {
      modal.style.display = "flex";
      document.getElementById("rxModalFormView").style.display = "block";
      document.getElementById("rxModalSuccessView").style.display = "none";
    }
  };

  window.closeRxModal = function () {
    const modal = document.getElementById("rxUploadModalOverlay");
    if (modal) modal.style.display = "none";
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".open-rx-modal-btn") || e.target.id === "openRxModalBtn") {
      e.preventDefault();
      window.openRxModal();
    }
  });

  document.getElementById("rxModalCloseBtn")?.addEventListener("click", window.closeRxModal);
  document.getElementById("rxSuccessCloseBtn")?.addEventListener("click", window.closeRxModal);
  document.getElementById("rxUploadModalOverlay")?.addEventListener("click", function (e) {
    if (e.target === this) window.closeRxModal();
  });

  // File label change feedback
  document.getElementById("rxModalFile")?.addEventListener("change", function (e) {
    const label = document.getElementById("rxFileLabel");
    if (label && this.files && this.files[0]) {
      label.innerText = `Selected: ${this.files[0].name}`;
    }
  });

  // Handle global prescription form submission
  document.getElementById("globalRxForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const phone = document.getElementById("rxModalPhone")?.value || "";
    const address = document.getElementById("rxModalAddress")?.value || "";
    const city = document.getElementById("rxModalCity")?.value || "";

    document.getElementById("rxSuccessPhone").innerText = phone;
    document.getElementById("rxSuccessAddress").innerText = `${address}, ${city}`;

    document.getElementById("rxModalFormView").style.display = "none";
    document.getElementById("rxModalSuccessView").style.display = "block";
  });

  // 6. Active nav link highlighting
  const currentPath = window.location.pathname;
  document.querySelectorAll(".m-nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href && (currentPath.endsWith(href) || currentPath.includes(href.replace(rootPath, '').split('?')[0]))) {
      link.style.color = 'var(--ink)';
      link.style.fontWeight = '600';
    }
  });

  // 7. Mobile menu toggle icon logic
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNavigationPanel = document.getElementById("mobileNavigationPanel");
  if (mobileMenuBtn && mobileNavigationPanel) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileNavigationPanel.classList.toggle("open");
      mobileMenuBtn.classList.toggle("is-active", isOpen);
      mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileNavigationPanel.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNavigationPanel.classList.remove("open");
        mobileMenuBtn.classList.remove("is-active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest("#m-main-header")) {
        mobileNavigationPanel.classList.remove("open");
        mobileMenuBtn.classList.remove("is-active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
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

  // ─── TOAST NOTIFICATION SYSTEM ───────────────────────────────────
  // Inject toast styles once
  if (!document.getElementById('m-toast-style')) {
    const toastStyle = document.createElement('style');
    toastStyle.id = 'm-toast-style';
    toastStyle.textContent = `
      #m-toast-container {
        position: fixed;
        bottom: 28px;
        right: 28px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      }
      .m-toast {
        display: flex;
        align-items: center;
        gap: 10px;
        background: var(--ink);
        color: var(--bone);
        padding: 12px 18px;
        font-family: 'Inter', sans-serif;
        font-size: 0.84rem;
        font-weight: 500;
        border-left: 3px solid var(--accent);
        box-shadow: 0 8px 28px rgba(0,0,0,0.18);
        min-width: 240px;
        max-width: 340px;
        pointer-events: all;
        opacity: 0;
        transform: translateX(20px);
        transition: opacity 0.28s ease, transform 0.28s ease;
      }
      .m-toast.show {
        opacity: 1;
        transform: translateX(0);
      }
      .m-toast.hide {
        opacity: 0;
        transform: translateX(20px);
      }
      .m-toast-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .m-toast-icon svg {
        width: 11px;
        height: 11px;
        color: #fff;
      }
      .m-toast-close {
        margin-left: auto;
        background: none;
        border: none;
        color: rgba(255,255,255,0.4);
        cursor: pointer;
        font-size: 1rem;
        line-height: 1;
        padding: 0 0 0 8px;
        transition: color 0.2s;
        pointer-events: all;
      }
      .m-toast-close:hover { color: rgba(255,255,255,0.9); }
      [data-theme="dark"] .m-toast {
        background: #1A2030;
        box-shadow: 0 8px 28px rgba(0,0,0,0.4);
      }
      @media (max-width: 480px) {
        #m-toast-container {
          bottom: 16px;
          right: 16px;
          left: 16px;
        }
        .m-toast { min-width: unset; max-width: 100%; }
      }
    `;
    document.head.appendChild(toastStyle);
  }

  // Ensure toast container exists
  if (!document.getElementById('m-toast-container')) {
    const tc = document.createElement('div');
    tc.id = 'm-toast-container';
    document.body.appendChild(tc);
  }

  window.showToast = function (message, duration = 2500) {
    const container = document.getElementById('m-toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'm-toast';
    toast.innerHTML = `
      <div class="m-toast-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <span>${message}</span>
      <button class="m-toast-close" aria-label="Dismiss notification">&times;</button>
    `;
    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add('show'));
    });

    const dismiss = () => {
      toast.classList.add('hide');
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    };

    toast.querySelector('.m-toast-close').addEventListener('click', dismiss);
    setTimeout(dismiss, duration);
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
    // Show subtle toast instead of opening cart drawer
    window.showToast(`<strong>${product.name}</strong> added to cart`);
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
  const savedTheme = localStorage.getItem('meridian-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
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
  const rtlLangs = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'yi'];
  const sysLang = (navigator.language || '').split('-')[0];
  const savedDir = localStorage.getItem('meridian-dir');
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
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavbar);
} else {
  initNavbar();
}
