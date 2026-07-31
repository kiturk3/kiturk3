/* ==========================================================================
   PORTFOLIO INTERACTIVE JAVASCRIPT
   Krutik Khokhara - Senior Android & AI Engineer
   ========================================================================== */

// --- PROJECTS DATA ---
const projectsData = [
  {
    id: "kiosk-v3",
    title: "KIOSK V3 - Restaurant Self-Service System",
    badge: "Flagship Production",
    category: ["android", "crossplatform", "hardware"],
    description: "Self-service food & beverage ordering system built natively for Android and extended cross-platform with Svelte and Tauri. Live in production across multiple US restaurant locations on low-spec hardware.",
    tech: ["Android (Kotlin)", "Jetpack Compose", "MVVM", "Room", "Retrofit", "Hilt", "Svelte", "Tauri", "Epson Printer", "USB/Serial", "Barcode"],
    githubUrl: "https://github.com/kiturk3",
    liveImpact: "Live in US Restaurants · Low-Spec Hardware Compatible",
    stars: 18,
    isAltBanner: false
  },
  {
    id: "pos-v2",
    title: "POS V2 - Hospitality Point-of-Sale",
    badge: "Enterprise Hospitality",
    category: ["android", "hardware"],
    description: "Native Android POS system handling order processing, payment flows, and real-time kitchen display sync. Built with MVVM, Retrofit, and Room database for zero-latency operations.",
    tech: ["Android Native", "MVVM", "Room", "Retrofit", "RxJava/Coroutines", "Kitchen Sync"],
    githubUrl: "https://github.com/kiturk3",
    liveImpact: "Live with US Clients · Real-Time Order Sync",
    stars: 14,
    isAltBanner: true
  },
  {
    id: "rag-learning",
    title: "RAG Learning & AI-Augmented Pipelines",
    badge: "AI & RAG",
    category: ["ai"],
    description: "Advanced Retrieval-Augmented Generation (RAG) implementation and LLM orchestration pipeline integrating Agentic AI workflows, vector search, and context management.",
    tech: ["Python", "RAG", "Agentic AI", "Prompt Engineering", "LLM Pipelines", "Kotlin/Android Integration"],
    githubUrl: "https://github.com/kiturk3/RAG-Learning",
    liveImpact: "Open Source · Agentic AI Architecture",
    stars: 24,
    isAltBanner: false
  },
  {
    id: "petsapp",
    title: "PetsApp - Veterinary & Vaccine Tracker",
    badge: "Health Tech",
    category: ["android"],
    description: "Dual-mode online/offline pet appointment and vaccine tracking application featuring Retrofit online sync and Room/SQLite offline resilience.",
    tech: ["Android (Kotlin)", "Retrofit", "Room DB", "SQLite", "MVVM"],
    githubUrl: "https://github.com/kiturk3",
    liveImpact: "Dual-Mode Sync · Offline First Architecture",
    stars: 9,
    isAltBanner: true
  },
  {
    id: "perspectus",
    title: "PersPecTus - Navigation & Mapping Engine",
    badge: "Navigation",
    category: ["android"],
    description: "Custom navigation application built on MapBox API, featuring custom vector map overlays, routing, turn-by-turn navigation, and location telemetry.",
    tech: ["Android SDK", "MapBox API", "Kotlin", "GPS Telemetry", "Custom Markers"],
    githubUrl: "https://github.com/kiturk3",
    liveImpact: "Custom Navigation Engine · MapBox Integration",
    stars: 12,
    isAltBanner: false
  },
  {
    id: "dispatchme",
    title: "DispatchMe - Logistics & Courier QR Manager",
    badge: "Logistics",
    category: ["android", "hardware"],
    description: "Courier & delivery management app with high-speed camera QR code scanning built for a logistics client in Portugal.",
    tech: ["Android (Java/Kotlin)", "QR Scanning", "REST API", "SQLite", "CameraX"],
    githubUrl: "https://github.com/kiturk3",
    liveImpact: "Deployed in Portugal · High-Speed Barcode Engine",
    stars: 11,
    isAltBanner: true
  },
  {
    id: "beamitup",
    title: "BeamItUp - Real-Time XMPP Chat & OpenGL",
    badge: "Real-Time & Graphics",
    category: ["android"],
    description: "Location-based real-time messaging application powered by XMPP protocol with custom 2D OpenGL UI animations and particle effects.",
    tech: ["Android", "XMPP Protocol", "OpenGL ES", "Location API", "Animations"],
    githubUrl: "https://github.com/kiturk3",
    liveImpact: "XMPP Real-Time Engine · OpenGL Rendering",
    stars: 8,
    isAltBanner: false
  },
  {
    id: "afsarbitiya",
    title: "AfsarBitiya - EdTech Exam Prep Platform",
    badge: "EdTech & Firebase",
    category: ["android"],
    description: "Comprehensive competitive exam preparation app for GPSC, NEET, and IIT with offline question bank caching and real-time Firebase synchronization.",
    tech: ["Android Native", "Firebase DB", "Cloud Messaging", "SQLite Offline Cache"],
    githubUrl: "https://github.com/kiturk3",
    liveImpact: "10,000+ Downloads · Firebase Cloud Sync",
    stars: 15,
    isAltBanner: true
  },
  {
    id: "rmts",
    title: "RMTS - Municipal Transit Bus GPS Tracker",
    badge: "Smart City",
    category: ["android"],
    description: "Real-time GPS bus tracking app built for Rajkot Municipal Transport Service, displaying live next-bus arrivals, routes, and ETA updates.",
    tech: ["Android SDK", "GPS Tracking", "Google Maps API", "JSON REST API"],
    githubUrl: "https://github.com/kiturk3",
    liveImpact: "Municipal Production App · Real-Time Fleet Tracking",
    stars: 16,
    isAltBanner: false
  }
];

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects(projectsData);
  setupFiltersAndSearch();
  setupNavigation();
  setupScrollListener();
});

// --- THEME MANAGMENT ---
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");
  const savedTheme = localStorage.getItem("portfolio_theme");

  if (savedTheme === "light") {
    document.documentElement.classList.add("light-theme");
    document.documentElement.classList.remove("dark-theme");
    if (themeIcon) themeIcon.textContent = "dark_mode";
  } else {
    document.documentElement.classList.add("dark-theme");
    document.documentElement.classList.remove("light-theme");
    if (themeIcon) themeIcon.textContent = "light_mode";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isLight = document.documentElement.classList.contains("light-theme");
      if (isLight) {
        document.documentElement.classList.remove("light-theme");
        document.documentElement.classList.add("dark-theme");
        localStorage.setItem("portfolio_theme", "dark");
        if (themeIcon) themeIcon.textContent = "light_mode";
      } else {
        document.documentElement.classList.remove("dark-theme");
        document.documentElement.classList.add("light-theme");
        localStorage.setItem("portfolio_theme", "light");
        if (themeIcon) themeIcon.textContent = "dark_mode";
      }
    });
  }
}

// --- NAVIGATION & DRAWER ---
function setupNavigation() {
  const menuBtn = document.getElementById("menu-toggle-btn");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const drawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  function openDrawer() {
    drawer.classList.add("active");
    backdrop.classList.add("active");
  }

  function closeDrawer() {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
  }

  if (menuBtn) menuBtn.addEventListener("click", openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

function setupScrollListener() {
  const appBar = document.getElementById("app-bar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      appBar.classList.add("scrolled");
    } else {
      appBar.classList.remove("scrolled");
    }
  });
}

// --- PROJECTS RENDER & FILTERING ---
function renderProjects(projects) {
  const container = document.getElementById("projects-container");
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--md-sys-color-on-surface-variant);">
        <span class="material-symbols-outlined" style="font-size: 48px; margin-bottom: 12px; color: var(--md-sys-color-outline);">search_off</span>
        <h3>No projects found</h3>
        <p style="margin-top: 8px;">Try adjusting your search query or selecting a different category filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(project => `
    <article class="project-card md-card-elevated" data-id="${project.id}">
      <div class="project-card-banner ${project.isAltBanner ? 'alt-banner' : ''}">
        <span class="project-badge">${project.badge}</span>
        <span style="display: inline-flex; align-items: center; gap: 4px; color: #FFF; font-size: 0.85rem; font-weight: 600;">
          <span class="material-symbols-outlined" style="font-size: 16px;">star</span> ${project.stars}
        </span>
      </div>

      <div class="project-card-body">
        <h3 class="project-card-title">${project.title}</h3>
        <p class="project-card-desc">${project.description}</p>

        <div class="project-tech-tags">
          ${project.tech.map(t => `<span class="md-chip">${t}</span>`).join('')}
        </div>

        <div class="project-card-actions">
          <span style="font-size: 0.82rem; font-weight: 500; color: var(--md-sys-color-primary);">
            ${project.liveImpact}
          </span>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="md-btn md-btn-text" title="View Code / GitHub">
            <span>Code</span>
            <span class="material-symbols-outlined" style="font-size: 18px;">open_in_new</span>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

function setupFiltersAndSearch() {
  const searchInput = document.getElementById("project-search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  const filterChips = document.querySelectorAll(".filter-chip");

  let currentFilter = "all";
  let currentSearchQuery = "";

  function applyFilters() {
    let filtered = projectsData;

    // Category filter
    if (currentFilter !== "all") {
      filtered = filtered.filter(p => p.category.includes(currentFilter));
    }

    // Search query filter
    if (currentSearchQuery.trim() !== "") {
      const q = currentSearchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q))
      );
    }

    renderProjects(filtered);
  }

  // Filter chips click
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.getAttribute("data-filter");
      applyFilters();
    });
  });

  // Search input change
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value;
      if (currentSearchQuery.length > 0) {
        if (clearBtn) clearBtn.style.display = "flex";
      } else {
        if (clearBtn) clearBtn.style.display = "none";
      }
      applyFilters();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearchQuery = "";
      clearBtn.style.display = "none";
      applyFilters();
    });
  }
}

// --- CONTACT MODAL & FORM VALIDATION ---
function openContactModal(e) {
  if (e) e.preventDefault();
  const backdrop = document.getElementById("contact-dialog-backdrop");
  if (backdrop) backdrop.classList.add("active");
}

function closeContactModal() {
  const backdrop = document.getElementById("contact-dialog-backdrop");
  if (backdrop) backdrop.classList.remove("active");
  resetContactFormErrors();
}

function resetContactFormErrors() {
  const groups = document.querySelectorAll(".input-group");
  groups.forEach(g => g.classList.remove("invalid"));
  const inputs = document.querySelectorAll(".md-input");
  inputs.forEach(i => i.classList.remove("error"));
}

function validateContactForm() {
  resetContactFormErrors();
  let isValid = true;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const phoneInput = document.getElementById("contact-phone");

  // Validate Name (Required)
  if (!nameInput || nameInput.value.trim() === "") {
    showInputError("contact-name", "name-error");
    isValid = false;
  }

  // Validate Email (Required & Valid Format)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
    showInputError("contact-email", "email-error");
    isValid = false;
  }

  // Validate Phone (Required)
  if (!phoneInput || phoneInput.value.trim().length < 6) {
    showInputError("contact-phone", "phone-error");
    isValid = false;
  }

  return isValid;
}

function showInputError(inputId, errorId) {
  const inputEl = document.getElementById(inputId);
  if (inputEl) {
    inputEl.classList.add("error");
    const parentGroup = inputEl.closest(".input-group");
    if (parentGroup) parentGroup.classList.add("invalid");
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  if (!validateContactForm()) return;

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const phone = document.getElementById("contact-phone").value.trim();
  const purpose = document.getElementById("contact-purpose").value.trim();

  // Create mailto URL
  const recipient = "kbkhokhara@gmail.com";
  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const bodyText = encodeURIComponent(
    `Hello Krutik,\n\nI am contacting you from your portfolio website.\n\n` +
    `Sender Details:\n` +
    `• Name: ${name}\n` +
    `• Phone: ${phone}\n` +
    `• Email: ${email}\n\n` +
    `Purpose / Message:\n${purpose || 'N/A'}\n\n` +
    `Best regards,\n${name}`
  );

  const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${bodyText}`;
  
  // Open mail application
  window.location.href = mailtoUrl;

  showSnackbar("Opening mail client with pre-filled details...");
  setTimeout(() => {
    closeContactModal();
  }, 1000);
}

function copyContactDetails() {
  if (!validateContactForm()) {
    showSnackbar("Please fill in Name, Email, and Phone before copying.");
    return;
  }

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const phone = document.getElementById("contact-phone").value.trim();
  const purpose = document.getElementById("contact-purpose").value.trim();

  const formattedText = 
    `Portfolio Inquiry Details:\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Purpose: ${purpose || 'N/A'}`;

  navigator.clipboard.writeText(formattedText).then(() => {
    showSnackbar("Contact details copied to clipboard!");
  }).catch(() => {
    showSnackbar("Copied details to clipboard.");
  });
}

function showSnackbar(msg) {
  const snackbar = document.getElementById("snackbar");
  const snackbarText = document.getElementById("snackbar-text");
  if (!snackbar || !snackbarText) return;

  snackbarText.textContent = msg;
  snackbar.classList.add("active");
  setTimeout(() => {
    snackbar.classList.remove("active");
  }, 3500);
}
