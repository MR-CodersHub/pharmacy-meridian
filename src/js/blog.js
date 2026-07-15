// Meridian Dynamic Routing and List Rendering Engine (Products, Blog, Search, Filters)

document.addEventListener("DOMContentLoaded", () => {
  const rootPath = document.querySelector('meta[name="root-path"]')?.getAttribute('content') || './';
  const pathname = window.location.pathname;

  // ==========================================
  // 1. PRODUCTS PAGE LISTING LOGIC
  // ==========================================
  if (pathname.includes("products.html")) {
    const searchInput = document.getElementById("productSearchInput");
    const gridContainer = document.getElementById("productGridContainer");
    const categoryButtons = document.querySelectorAll(".m-filter-btn");

    let activeCategory = "all";
    let searchQuery = "";

    // Show skeletons on init
    renderSkeletons(8);
    setTimeout(() => {
      renderProductCards();
    }, 400);

    // Category click handler
    categoryButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-category");
        renderProductCards();
      });
    });

    // Search input handler
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderProductCards();
      });
    }

    function renderSkeletons(count) {
      if (!gridContainer) return;
      let skeletonsHTML = "";
      for (let i = 0; i < count; i++) {
        skeletonsHTML += `
          <div class="m-prod-card m-skeleton" style="height:320px;border:1px solid var(--line);"></div>
        `;
      }
      gridContainer.innerHTML = skeletonsHTML;
    }

    function renderProductCards() {
      if (!gridContainer) return;

      const products = window.medPlusProducts || [];
      const filteredProducts = products.filter(p => {
        const matchesCategory = (activeCategory === "all" || p.category === activeCategory);
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || 
                              p.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
      });

      if (filteredProducts.length === 0) {
        gridContainer.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 0; color: var(--ink-soft);">
            <p style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;">NO PRODUCTS FOUND MATCHING YOUR SEARCH.</p>
          </div>
        `;
        return;
      }

      gridContainer.innerHTML = filteredProducts.map(p => `
        <div class="prod-card-new" onclick="window.location.href='${rootPath}public/pages/product-details.html?id=${p.id}'">
          <div class="prod-img-wrap">
            <div class="prod-rx-tag mono">${p.prescriptionRequired ? 'RX REQUIRED' : 'OTC'}</div>
            <img src="${p.image}" alt="${p.name}">
          </div>
          <div class="prod-body">
            <span class="prod-brand">${p.category}</span>
            <div class="prod-name-new">${p.name}</div>
            <div class="prod-desc-new" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${p.description}</div>
            <div class="prod-foot-new">
              <div>
                <span class="prod-price-new">₹${p.price.toFixed(2)}</span>
                <span class="prod-unit-new">PER PACK</span>
              </div>
              <button class="prod-add-btn mono" onclick="event.stopPropagation(); addToCart('${p.id}')">ADD +</button>
            </div>
          </div>
        </div>
      `).join("");
    }
  }

  // ==========================================
  // 2. PRODUCT DETAILS PAGE LOGIC
  // ==========================================
  if (pathname.includes("product-details.html")) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");
    const product = (window.medPlusProducts || []).find(p => p.id === productId);

    if (!product) {
      window.location.href = `${rootPath}public/pages/products.html`;
      return;
    }

    // Populate product detail values
    document.getElementById("productDetailTitle").innerText = product.name;
    document.getElementById("productDetailCategory").innerText = product.category.toUpperCase();
    document.getElementById("productDetailDesc").innerText = product.description;
    document.getElementById("productDetailInstructions").innerText = product.instructions;
    document.getElementById("productDetailPrecautions").innerText = product.precautions;
    document.getElementById("productDetailPrice").innerText = `₹${product.price.toFixed(2)}`;
    document.getElementById("productDetailImg").setAttribute("src", product.image);
    document.getElementById("productDetailImg").setAttribute("alt", product.name);

    if (product.prescriptionRequired) {
      const rxBadge = document.getElementById("productDetailRxBadge");
      if (rxBadge) rxBadge.style.display = "inline-block";
    }

    // Connect Add to Cart button
    const cartBtn = document.getElementById("productDetailCartBtn");
    if (cartBtn) {
      cartBtn.addEventListener("click", () => {
        addToCart(product.id);
      });
    }

    // Populate dynamic safety FAQ elements
    const faqsContainer = document.getElementById("productDetailFaqs");
    if (faqsContainer) {
      const faqs = [
        { q: "Is a medical check required for this item?", a: product.prescriptionRequired ? "Yes, this medication requires a valid prescription to be uploaded. Our clinical pharmacist will review it before confirming delivery." : "No, this is an over-the-counter wellness item and does not require doctor prescription documents." },
        { q: "How should I store this product?", a: "Keep in a cool, dry place away from heat and moisture. Keep the bottle or package tightly closed. Keep out of reach of children." }
      ];

      faqsContainer.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item">
          <button class="faq-toggle" onclick="window.toggleProductFaq(${index})">
            <span>${faq.q}</span>
            <span class="faq-chevron" id="faqChevron-${index}">▼</span>
          </button>
          <div class="faq-answer" id="faqAnswer-${index}">
            <p>${faq.a}</p>
          </div>
        </div>
      `).join("");
    }

    window.toggleProductFaq = function(index) {
      const answer = document.getElementById(`faqAnswer-${index}`);
      const chevron = document.getElementById(`faqChevron-${index}`);
      if (answer && chevron) {
        answer.classList.toggle("open");
        chevron.classList.toggle("open");
      }
    };
  }

  // ==========================================
  // 3. BLOG PAGE LISTING LOGIC
  // ==========================================
  if (pathname.includes("blog.html")) {
    const searchInput = document.getElementById("blogSearchInput");
    const gridContainer = document.getElementById("blogGridContainer");
    const categoryButtons = document.querySelectorAll(".m-filter-btn");

    let activeCategory = "all";
    let searchQuery = "";

    renderSkeletons(6);
    setTimeout(() => {
      renderBlogCards();
    }, 400);

    categoryButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-category");
        renderBlogCards();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderBlogCards();
      });
    }

    function renderSkeletons(count) {
      if (!gridContainer) return;
      let skeletonsHTML = "";
      for (let i = 0; i < count; i++) {
        skeletonsHTML += `
          <div class="m-blog-card m-skeleton" style="height:380px;border:1px solid var(--line);"></div>
        `;
      }
      gridContainer.innerHTML = skeletonsHTML;
    }

    function renderBlogCards() {
      if (!gridContainer) return;

      const blogs = window.medPlusBlogs || [];
      const filteredBlogs = blogs.filter(blog => {
        const matchesCategory = (activeCategory === "all" || blog.category === activeCategory);
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery) || 
                              blog.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
      });

      if (filteredBlogs.length === 0) {
        gridContainer.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 0; color: var(--ink-soft);">
            <p style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;">NO ARTICLES FOUND MATCHING YOUR SEARCH.</p>
          </div>
        `;
        return;
      }

      gridContainer.innerHTML = filteredBlogs.map(blog => `
        <div class="m-blog-card" style="border:1px solid var(--line);padding:0;background:var(--card);display:flex;flex-direction:column;cursor:pointer;" onclick="window.location.href='${rootPath}public/pages/blog-details.html?id=${blog.id}'">
          <div style="height:180px;overflow:hidden;position:relative;">
            <img src="${blog.image}" alt="${blog.title}" style="width:100%;height:100%;object-fit:cover;transition:transform .3s;" class="blog-card-img" />
            <span class="m-blog-tag" style="position:absolute;top:12px;left:12px;background:rgba(255,255,255,0.92);border:1px solid var(--line-strong);font-family:'JetBrains Mono',monospace;font-size:0.58rem;padding:2px 7px;color:var(--ink-soft);">${blog.category}</span>
          </div>
          <div style="padding:20px 22px;flex:1;display:flex;flex-direction:column;gap:8px;">
            <div style="font-family:'JetBrains Mono',monospace;font-size:0.62rem;color:var(--ink-faint);">By ${blog.author} · ${blog.date}</div>
            <h3 class="m-blog-title" style="font-size:1rem;font-weight:600;line-height:1.4;color:var(--ink);">${blog.title}</h3>
            <p class="m-blog-excerpt" style="font-size:0.82rem;color:var(--ink-soft);line-height:1.6;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;margin-top:4px;">${blog.description}</p>
          </div>
          <div style="padding:16px 22px;border-top:1px solid var(--line);margin-top:auto;">
            <a href="${rootPath}public/pages/blog-details.html?id=${blog.id}" class="m-add-link mono" style="font-size:0.65rem;color:var(--accent);font-weight:600;">READ ARTICLE →</a>
          </div>
        </div>
      `).join("");
    }
  }

  // ==========================================
  // 4. BLOG DETAILS PAGE LOGIC
  // ==========================================
  if (pathname.includes("blog-details.html")) {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");
    const blog = (window.medPlusBlogs || []).find(b => b.id === blogId);

    if (!blog) {
      window.location.href = `${rootPath}public/pages/blog.html`;
      return;
    }

    document.getElementById("blogDetailCategory").innerText = blog.category;
    document.getElementById("blogDetailTitle").innerText = blog.title;
    document.getElementById("blogDetailMeta").innerText = `Published by ${blog.author} on ${blog.date}`;
    document.getElementById("blogDetailImage").setAttribute("src", blog.image);
    document.getElementById("blogDetailImage").setAttribute("alt", blog.title);
    document.getElementById("blogDetailContent").innerText = blog.content;

    const tagsContainer = document.getElementById("blogDetailTags");
    if (tagsContainer) {
      tagsContainer.innerHTML = `
        <span class="m-tag">#${blog.category}</span>
        <span class="m-tag">#HealthCare</span>
        <span class="m-tag">#Meridian</span>
      `;
    }

    const sidebarContainer = document.getElementById("blogSidebarList");
    if (sidebarContainer) {
      const otherBlogs = (window.medPlusBlogs || []).filter(b => b.id !== blog.id).slice(0, 3);
      sidebarContainer.innerHTML = otherBlogs.map(ob => `
        <a href="${rootPath}public/pages/blog-details.html?id=${ob.id}" class="m-sidebar-link" style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--line);text-decoration:none;">
          <img src="${ob.image}" alt="${ob.title}" style="width:48px;height:48px;object-fit:cover;flex-shrink:0;" />
          <div style="min-width:0;flex:1;">
            <h4 style="font-size:0.85rem;font-weight:600;color:var(--ink);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:4px;line-height:1.35;">${ob.title}</h4>
            <span style="font-family:'JetBrains Mono',monospace;font-size:0.58rem;color:var(--ink-faint);">${ob.date}</span>
          </div>
        </a>
      `).join("");
    }
  }

  // Handle blog newsletter subscription
  const nlForm = document.getElementById("blogNewsletterForm");
  if (nlForm) {
    nlForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (window.showNotificationModal) {
        window.showNotificationModal("Subscription Successful", "Thank you for subscribing! Meridian Wellness updates will be sent to your inbox weekly.");
      } else {
        alert("Thank you for subscribing!");
      }
      nlForm.reset();
    });
  }
});
