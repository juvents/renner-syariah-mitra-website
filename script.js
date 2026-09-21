(function () {
  "use strict";

  /* =====================================================
     CONFIG — ganti nilai di bawah ini sesuai kebutuhan
     ===================================================== */
  function normalizeWhatsappNumber(rawNumber) {
    const digits = String(rawNumber || "").replace(/\D/g, "");
    if (!digits) return "";
    if (digits.startsWith("62")) return digits;
    if (digits.startsWith("0")) return `62${digits.slice(1)}`;
    return digits;
  }

  const WHATSAPP_NUMBER = normalizeWhatsappNumber("085241820344");
  const INSTAGRAM_URL = "https://www.instagram.com/jonomasri?igsi=MXNydG0wMmJ2ZDJ4Yg%3D%3D";
  const FACEBOOK_URL = "https://www.facebook.com/share/1CKQS9doEM/";
  const TIKTOK_URL = "https://www.tiktok.com/@mp03_.23?_r=1&_t=ZS-99uz0vOR8vU";
  const CONTACT_NAME = "Masri Jono Mpeti";
  let currentLanguage = "id";

  const translations = {
    id: {
      title: "Renner Syariah | Produk Kesehatan, Kecantikan & Pertanian",
      description: "Renner Syariah menghadirkan pilihan produk kesehatan, kecantikan, dan pertanian modern berkualitas tinggi. Dipasarkan resmi oleh Masri Jono Mpeti, Mitra Reseller & Distributor Resmi Renner Syariah.",
      nav: ["Beranda", "Produk", "Tentang", "Kontak"],
      navCta: "Hubungi Kami",
      intro: ["SELAMAT DATANG", "Hadir sebagai mitra terpercaya untuk produk kesehatan, kecantikan, dan pertanian modern berkualitas tinggi.", "Produk berkualitas", "Resmi & terpercaya", "Mitra Indonesia", "Kenali Perusahaan", "Bisnis Bersama Untuk Sejahtera"],
      hero: ["Mitra Reseller & Distributor Resmi Renner Syariah", "Solusi Kesehatan, Kecantikan, dan Pertanian Modern Berkualitas Tinggi", "Renner Syariah menghadirkan rangkaian produk pilihan untuk mendukung kebutuhan kesehatan, kecantikan, dan pertanian modern Anda — diracik dengan standar kualitas tinggi dan dipercaya oleh banyak pelanggan.", "Hubungi Masri Jono Via WhatsApp", "Lihat Produk"],
      trust: [["Produk Berkualitas", "Rangkaian produk pilihan dengan standar kualitas tinggi."], ["Resmi & Terpercaya", "Dipasarkan langsung oleh mitra reseller & distributor resmi."], ["Pilihan Produk Beragam", "Kesehatan, kecantikan, hingga pertanian modern dalam satu tempat."], ["Pelayanan Langsung", "Konsultasi & pemesanan langsung melalui WhatsApp."]],
      catalog: ["Katalog", "Pilihan Produk Renner Syariah", "Berikut beberapa produk unggulan yang menjadi media promosi untuk mengenalkan solusi kesehatan, kecantikan, dan pertanian modern."],
      products: [
        ["Pupuk Organik Teknologi Nano Kemasan Sachet.", "Nutrisi siap saji untuk tanaman, mempercepat panen, merangsang pembuahan luar musim, menghemat pupuk kimia hingga 100% dan pestisida hingga 80%, meningkatkan imun tanaman terhadap virus/bakteri.", ["Mempercepat pertumbuhan dan panen tanaman.", "Merangsang pembuahan di luar musim.", "Menghemat penggunaan pupuk kimia dan pestisida.", "Membantu meningkatkan imun tanaman."], "Tampilkan manfaat Pupuk PATEN"],
        ["Minuman Serbuk Rasa Apel.", "Detoksifikasi zat karsinogen/berbahaya dalam usus, melancarkan BAB (laksatif alami), membantu menyeimbangkan berat badan, sebagai prebiotik & sumber serat pangan.", ["Membantu membersihkan zat berbahaya dalam usus.", "Mendukung kelancaran buang air besar.", "Membantu menjaga keseimbangan berat badan.", "Menjadi sumber serat dan prebiotik."], "Tampilkan manfaat Renner FIBRA"],
        ["Minuman Nutrisi Colostrum Murni.", "Sumber protein & kalsium alami (untuk bayi hingga lansia), memelihara & meremajakan sel tubuh yang rusak, meningkatkan sistem kekebalan tubuh.", ["Menyediakan protein dan kalsium alami.", "Mendukung pemeliharaan dan peremajaan sel tubuh.", "Membantu menjaga sistem kekebalan tubuh.", "Dapat dikonsumsi mulai dari bayi hingga lansia."], "Tampilkan manfaat COLPRO"],
        ["Minuman Serbuk Rasa Apel Plus Ginseng.", "Meningkatkan stamina, vitalitas, dan kejantanan pria, melancarkan peredaran darah, mengatasi disfungsi seksual.", ["Membantu meningkatkan stamina dan vitalitas pria.", "Mendukung kelancaran peredaran darah.", "Membantu menjaga performa dan kebugaran tubuh."], "Tampilkan manfaat REVIT"],
        ["Serum Pencerah Wajah & Body Lotion.", "Mencerahkan kulit tubuh & area lipatan gelap, melembabkan, mengencangkan, menyamarkan flek hitam/bekas jerawat, melindungi dari sinar UV.", ["Membantu mencerahkan kulit dan area lipatan.", "Melembabkan serta membantu mengencangkan kulit.", "Menyamarkan flek hitam dan bekas jerawat.", "Membantu melindungi kulit dari sinar UV."], "Tampilkan manfaat Face & Body Serum"]
      ],
      about: ["Tentang", "Tentang Perusahaan", "Renner Syariah hadir sebagai brand dengan pilihan produk untuk kebutuhan kesehatan, kecantikan, dan pertanian. Halaman ini menyajikan informasi pengenalan brand dan katalog produk secara ringkas agar pengunjung dapat menemukan produk yang sesuai.", "Informasi produk, manfaat, kategori, dan legalitas ditampilkan sebagai panduan awal. Untuk informasi terbaru mengenai perusahaan, ketersediaan produk, dan ketentuan pembelian, silakan lakukan konfirmasi melalui kontak resmi yang tersedia di website ini.", "Masri Jono Mpeti berperan sebagai mitra reseller dan distributor yang membantu pelanggan memperoleh informasi produk serta menghubungkan calon pelanggan dengan layanan pemesanan.", "Untuk keputusan penggunaan produk, selalu perhatikan label, aturan pakai, nomor izin edar, dan petunjuk resmi pada kemasan. Hindari penggunaan klaim sebagai pengganti saran tenaga kesehatan.", "Hubungi Masri Jono Via WhatsApp"],
      cta: ["Tertarik dengan Produk Renner Syariah?", "Hubungi Masri Jono Mpeti untuk mendapatkan informasi produk dan pemesanan.", "Chat via WhatsApp"],
      footerRole: "Mitra Reseller & Distributor Resmi Renner Syariah"
    },
    en: {
      title: "Renner Syariah | Health, Beauty & Agriculture Products",
      description: "Renner Syariah offers quality health, beauty, and modern agriculture products, officially marketed by Masri Jono Mpeti, an official reseller and distributor partner.",
      nav: ["Home", "Products", "About", "Contact"],
      navCta: "Contact Us",
      intro: ["WELCOME", "Your trusted partner for high-quality health, beauty, and modern agriculture products.", "Quality products", "Official & trusted", "Indonesian partner", "Discover Our Company", "Business Together for Prosperity"],
      hero: ["Official Renner Syariah Reseller & Distributor Partner", "High-Quality Health, Beauty, and Modern Agriculture Solutions", "Renner Syariah offers selected products to support your health, beauty, and modern agriculture needs — made to high quality standards and trusted by many customers.", "Contact Masri Jono via WhatsApp", "View Products"],
      trust: [["Quality Products", "A selected range of products made to high quality standards."], ["Official & Trusted", "Sold directly by an official reseller and distributor partner."], ["Various Product Choices", "Health, beauty, and modern agriculture products in one place."], ["Direct Service", "Consultation and orders directly through WhatsApp."]],
      catalog: ["Catalog", "Renner Syariah Product Selection", "Featured products introducing modern solutions for health, beauty, and agriculture."],
      products: [
        ["Nano Technology Organic Fertilizer Sachet.", "Ready-to-use plant nutrition that helps speed up harvests, stimulate off-season fruiting, reduce chemical fertilizer use by up to 100% and pesticides by up to 80%, and improve plant immunity.", ["Speeds up plant growth and harvests.", "Stimulates off-season fruiting.", "Reduces chemical fertilizer and pesticide use.", "Helps improve plant immunity."], "Show Pupuk PATEN benefits"],
        ["Apple-Flavored Powder Drink.", "Helps detoxify harmful substances in the intestines, supports bowel regularity, helps balance body weight, and provides prebiotics and dietary fiber.", ["Helps cleanse harmful substances from the intestines.", "Supports regular bowel movements.", "Helps maintain balanced body weight.", "Provides dietary fiber and prebiotics."], "Show Renner FIBRA benefits"],
        ["Pure Colostrum Nutrition Drink.", "A natural source of protein and calcium for all ages, supporting cell maintenance and renewal and helping strengthen the immune system.", ["Provides natural protein and calcium.", "Supports cell maintenance and renewal.", "Helps support the immune system.", "Suitable from babies to seniors."], "Show COLPRO benefits"],
        ["Apple-Flavored Powder Drink with Ginseng.", "Helps improve men's stamina and vitality, supports blood circulation, and addresses sexual dysfunction.", ["Helps improve men's stamina and vitality.", "Supports healthy blood circulation.", "Helps maintain performance and physical fitness."], "Show REVIT benefits"],
        ["Brightening Face Serum & Body Lotion.", "Brightens body skin and dark areas, moisturizes, firms, helps reduce dark spots and acne marks, and protects from UV rays.", ["Helps brighten skin and dark areas.", "Moisturizes and helps firm the skin.", "Helps reduce dark spots and acne marks.", "Helps protect skin from UV rays."], "Show Face & Body Serum benefits"]
      ],
      about: ["About", "About the Company", "Renner Syariah is a brand offering products for health, beauty, and agriculture needs. This page provides a concise introduction to the brand and its product catalog so visitors can find suitable products.", "Product information, benefits, categories, and legal details are provided as an initial guide. For the latest company information, product availability, and purchase terms, please confirm through the official contact available on this website.", "Masri Jono Mpeti serves as a reseller and distributor partner who helps customers get product information and connects prospective customers with ordering services.", "Before using any product, always check the label, directions, registration number, and official instructions on the packaging. Product claims should not replace professional health advice.", "Contact Masri Jono via WhatsApp"],
      cta: ["Interested in Renner Syariah Products?", "Contact Masri Jono Mpeti for product information and orders.", "Chat via WhatsApp"],
      footerRole: "Official Renner Syariah Reseller & Distributor Partner"
    }
  };

  function setLastText(element, text) {
    const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (textNode) textNode.textContent = `\n            ${text}\n          `;
  }

  function applyLanguage(language) {
    const content = translations[language] || translations.id;
    currentLanguage = translations[language] ? language : "id";
    document.querySelectorAll("[data-id][data-en]").forEach((element) => {
      element.textContent = currentLanguage === "en" ? element.dataset.en : element.dataset.id;
    });
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link, index) => { link.textContent = content.nav[index]; });
    setLastText(document.getElementById("navCta"), content.navCta);
    const intro = document.querySelector(".company-intro-copy");
    intro.querySelector(".company-kicker").textContent = content.intro[0];
    intro.querySelector(".company-summary").textContent = content.intro[1];
    intro.querySelector(".company-motto").textContent = `"${content.intro[6]}"`;
    intro.querySelectorAll(".company-credentials span").forEach((item, index) => { item.textContent = content.intro[index + 2]; });
    intro.querySelector(".btn-company").textContent = content.intro[5];
    const hero = document.querySelector(".hero-text");
    hero.querySelector(".hero-role").textContent = content.hero[0];
    hero.querySelector(".hero-headline").textContent = content.hero[1];
    hero.querySelector(".hero-desc").textContent = content.hero[2];
    setLastText(document.getElementById("heroWaBtn"), content.hero[3]);
    hero.querySelector(".btn-outline").textContent = content.hero[4];
    document.querySelectorAll(".trust-card").forEach((card, index) => {
      card.querySelector("h3").textContent = content.trust[index][0];
      card.querySelector("p").textContent = content.trust[index][1];
    });
    const catalog = document.querySelector(".catalog .section-head");
    catalog.querySelector(".section-eyebrow").textContent = content.catalog[0];
    catalog.querySelector(".section-title").textContent = content.catalog[1];
    catalog.querySelector(".section-subtitle").textContent = content.catalog[2];
    document.querySelectorAll(".product-card").forEach((card, index) => {
      const product = content.products[index];
      card.querySelector(".product-tagline").textContent = product[0];
      card.querySelector(".product-desc").textContent = product[1];
      card.querySelector(".product-benefits h4").textContent = language === "en" ? "Product Benefits" : "Manfaat Produk";
      card.querySelectorAll(".product-benefits li").forEach((item, itemIndex) => { item.textContent = product[2][itemIndex]; });
      card.setAttribute("aria-label", product[3]);
      setLastText(card.querySelector(".product-order"), language === "en" ? "More Information" : "Informasi Selengkapnya");
    });
    const about = document.querySelector(".about-text");
    about.querySelector(".section-eyebrow").textContent = content.about[0];
    about.querySelector(".section-title").textContent = content.about[1];
    about.querySelectorAll("p").forEach((paragraph, index) => { paragraph.textContent = content.about[index + 2]; });
    setLastText(document.getElementById("aboutWaBtn"), content.about[6]);
    const cta = document.querySelector(".cta-inner");
    cta.querySelector("h2").textContent = content.cta[0];
    cta.querySelector("p").textContent = content.cta[1];
    setLastText(document.getElementById("ctaWaBtn"), content.cta[2]);
    document.querySelector(".footer-role").lastChild.textContent = `\n        ${content.footerRole}\n      `;
    document.querySelectorAll(".footer-links a").forEach((link, index) => { link.textContent = content.nav[index]; });
    document.documentElement.lang = language;
    document.title = content.title;
    document.querySelector('meta[name="description"]').setAttribute("content", content.description);
    document.querySelectorAll(".language-option").forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    localStorage.setItem("renner-language", language);
  }

  /* =====================================================
     HELPERS — WhatsApp link builder
     ===================================================== */
  function buildWaLink(message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  }

  const defaultMessage = `Halo ${CONTACT_NAME}, saya ingin bertanya tentang produk Renner...`;
  const defaultWaLink = buildWaLink(defaultMessage);

  // Set default WA links (hero, about, CTA section, footer, floating button)
  const defaultWaTargets = [
    "heroWaBtn",
    "aboutWaBtn",
    "ctaWaBtn",
    "footerWaBtn",
    "fabWaBtn",
    "navCta"
  ];
  defaultWaTargets.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("href", defaultWaLink);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });

  // Set social media links
  const socialLinks = {
    footerIgBtn: INSTAGRAM_URL,
    fabIgBtn: INSTAGRAM_URL,
    footerFbBtn: FACEBOOK_URL,
    fabFbBtn: FACEBOOK_URL,
    footerTtBtn: TIKTOK_URL,
    fabTtBtn: TIKTOK_URL
  };

  Object.entries(socialLinks).forEach(([id, url]) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });

  document.querySelectorAll(".language-option").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  const categoryButtons = document.querySelectorAll(".category-filter-btn");
  const productCards = document.querySelectorAll(".product-card");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.categoryFilter;
      categoryButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      productCards.forEach((card) => {
        const shouldShow = selectedCategory === "all" || card.dataset.category === selectedCategory;
        card.hidden = !shouldShow;
      });
    });
  });
  applyLanguage(localStorage.getItem("renner-language") || "id");

  // Product promo buttons — each opens WhatsApp to request more information about the product
  document.querySelectorAll(".product-order").forEach((btn) => {
    btn.addEventListener("click", () => {
      const productName = btn.getAttribute("data-product") || "";
      const message = currentLanguage === "en"
        ? `Hello ${CONTACT_NAME}, I would like to get more information about the product ${productName}.`
        : `Halo ${CONTACT_NAME}, saya ingin mendapatkan informasi selengkapnya mengenai produk ${productName}.`;
      window.open(buildWaLink(message), "_blank", "noopener,noreferrer");
    });
  });

  // Product cards reveal their benefits when selected.
  document.querySelectorAll(".product-card").forEach((card) => {
    const benefits = card.querySelector(".product-benefits");
    if (!benefits) return;

    function toggleBenefits() {
      const isOpen = card.classList.toggle("is-open");
      card.setAttribute("aria-expanded", String(isOpen));
      benefits.setAttribute("aria-hidden", String(!isOpen));
    }

    card.addEventListener("click", (event) => {
      if (event.target.closest(".product-order")) return;
      toggleBenefits();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleBenefits();
      }
    });
  });

  /* =====================================================
     NAVBAR — scroll effect
     ===================================================== */
  const navbar = document.getElementById("navbar");
  function updateNavbar() {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });

  /* =====================================================
     HAMBURGER MENU
     ===================================================== */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");

  function closeMenu() {
    hamburgerBtn.classList.remove("active");
    navLinks.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  hamburgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburgerBtn.classList.toggle("active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* =====================================================
     SMOOTH SCROLL for in-page anchor links
     ===================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const top = targetEl.getBoundingClientRect().top + window.scrollY - navHeight + 1;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  /* =====================================================
     INTERSECTION OBSERVER — fade-in-up reveal animation
     ===================================================== */
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));

  /* =====================================================
     BACK TO TOP BUTTON
     ===================================================== */
  const backToTopBtn = document.getElementById("backToTopBtn");
  function updateBackToTop() {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }
  updateBackToTop();
  window.addEventListener("scroll", updateBackToTop, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();