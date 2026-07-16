// ----------------------------------------------------
// 1. DICTIONARY TRANSLATIONS (EN & ID)
// ----------------------------------------------------
const translations = {
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-experience": "Experience",
    "nav-contact": "Contact",
    
    // Home Page
    "hero-greet": "Hello, I'm",
    "hero-title": "Frontend Developer",
    "hero-desc": "Crafting beautiful, high-performance, and responsive web experiences with modern tech stacks.",
    "hero-cta-project": "View Projects",
    "hero-cta-contact": "Let's Talk",

    // About Page
    "about-title": "About Me",
    "about-subtitle": "Who I Am",
    "about-p1": "I am a passionate Frontend Developer specializing in building interactive and scalable web applications. I love turning complex problems into simple, beautiful, and intuitive designs.",
    "about-p2": "With a strong focus on performance and accessibility, I bridge the gap between design and development to deliver high-quality digital experiences.",

    // Skills Page
    "skills-title": "My Skills",
    "skills-subtitle": "Technical Expertise",
    "skills-category-1": "Frontend Core",
    "skills-category-2": "Frameworks & Tools",

    // Projects Page
    "projects-title": "Featured Projects",
    "project-1-title": "E-Commerce Dashboard",
    "project-1-desc": "A responsive analytics dashboard built with modern CSS grids, charts, and dark theme support.",
    "project-2-title": "Smart Task Manager",
    "project-2-desc": "A task manager application featuring drag-and-drop, persistent state, and sleek UI animations.",

    // Experience Page
    "exp-title": "My Journey",
    "exp-1-date": "2024 - Present",
    "exp-1-role": "Senior Frontend Developer",
    "exp-1-company": "Tech Innovators Studio",
    "exp-1-desc": "Led a team of frontend devs to rebuild an enterprise SaaS platform, improving web performance by 40%.",
    "exp-2-date": "2021 - 2024",
    "exp-2-role": "Web Developer",
    "exp-2-company": "Digital Agency X",
    "exp-2-desc": "Developed custom responsive layouts, interactive user interfaces, and optimized SEO structures.",

    // Contact Page
    "contact-title": "Get In Touch",
    "contact-name-label": "Your Name",
    "contact-email-label": "Your Email",
    "contact-msg-label": "Your Message",
    "contact-btn": "Send Message",
  },
  id: {
    // Navigation
    "nav-home": "Beranda",
    "nav-about": "Tentang",
    "nav-skills": "Keahlian",
    "nav-projects": "Proyek",
    "nav-experience": "Pengalaman",
    "nav-contact": "Kontak",
    
    // Home Page
    "hero-greet": "Halo, saya",
    "hero-title": "Frontend Developer",
    "hero-desc": "Menciptakan pengalaman web yang indah, berkinerja tinggi, dan responsif dengan teknologi modern.",
    "hero-cta-project": "Lihat Proyek",
    "hero-cta-contact": "Hubungi Saya",

    // About Page
    "about-title": "Tentang Saya",
    "about-subtitle": "Siapa Saya",
    "about-p1": "Saya adalah seorang Frontend Developer yang bersemangat dalam membangun aplikasi web yang interaktif dan skalabel. Saya senang mengubah masalah rumit menjadi desain yang sederhana, indah, dan intuitif.",
    "about-p2": "Dengan fokus kuat pada performa dan aksesibilitas, saya menjembatani kesenjangan antara desain dan pengembangan untuk menghadirkan pengalaman digital berkualitas tinggi.",

    // Skills Page
    "skills-title": "Keahlian Saya",
    "skills-subtitle": "Keahlian Teknis",
    "skills-category-1": "Inti Frontend",
    "skills-category-2": "Kerangka Kerja & Alat",

    // Projects Page
    "projects-title": "Proyek Pilihan",
    "project-1-title": "Dashboard E-Commerce",
    "project-1-desc": "Dasbor analitik responsif yang dibangun dengan CSS grid modern, grafik, dan dukungan tema gelap.",
    "project-2-title": "Pengelola Tugas Pintar",
    "project-2-desc": "Aplikasi pengelola tugas yang dilengkapi fitur drag-and-drop, status persisten, dan animasi UI yang mulus.",

    // Experience Page
    "exp-title": "Perjalanan Saya",
    "exp-1-date": "2024 - Sekarang",
    "exp-1-role": "Senior Frontend Developer",
    "exp-1-company": "Tech Innovators Studio",
    "exp-1-desc": "Memimpin tim frontend dev untuk membangun kembali platform SaaS perusahaan, meningkatkan performa web sebesar 40%.",
    "exp-2-date": "2021 - 2024",
    "exp-2-role": "Web Developer",
    "exp-2-company": "Digital Agency X",
    "exp-2-desc": "Mengembangkan tata letak responsif kustom, antarmuka pengguna interaktif, dan struktur SEO yang dioptimalkan.",

    // Contact Page
    "contact-title": "Hubungi Saya",
    "contact-name-label": "Nama Anda",
    "contact-email-label": "Email Anda",
    "contact-msg-label": "Pesan Anda",
    "contact-btn": "Kirim Pesan",
  }
};

// ----------------------------------------------------
// 2. STATE MANAGEMENT & DOM INITIALIZATION
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation (Hamburger Menu Toggle)
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-item").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // Highlight Active Page Link
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-item").forEach(link => {
    // Ambil nilai href
    const href = link.getAttribute("href");
    if (currentPath.includes(href) || (currentPath === "/" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Language Switching Setup
  const langToggleBtn = document.getElementById("lang-toggle");
  let currentLang = localStorage.getItem("portfolio_lang") || "en";

  // Jalankan render translasi pertama kali
  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "id" : "en";
      localStorage.setItem("portfolio_lang", currentLang);
      applyLanguage(currentLang);
    });
  }
});

// ----------------------------------------------------
// 3. TRANSLATION ENGINE FUNCTION
// ----------------------------------------------------
function applyLanguage(lang) {
  // Ambil semua elemen HTML yang memiliki atribut data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];

    if (translation) {
      // Jika elemen berupa form input / textarea, ubah placeholder-nya
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", translation);
      } else {
        // Elemen biasa, ubah teks kontennya
        el.innerHTML = translation;
      }
    }
  });

  // Update visual text pada tombol navigasi bahasa
  const langToggleBtn = document.getElementById("lang-toggle");
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === "en" ? "ID" : "EN";
  }
}