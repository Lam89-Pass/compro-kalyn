document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  AOS.init({ duration: 1000, once: true });

  // --- ELEMENTS ---
  const preloader = document.getElementById("preloader");
  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-outline");
  const txtElement = document.querySelector(".typewriter");
  const sections = document.querySelectorAll("section[id]");
  const desktopNavItems = document.querySelectorAll(".nav-item");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");
  const backToTop = document.getElementById("backToTop");

  // --- PRELOADER ---
  window.addEventListener("load", () => {
    document.getElementById("preloader-bar").style.width = "100%";
    setTimeout(() => preloader.classList.add("opacity-0", "invisible"), 1000);
  });

  // --- CUSTOM CURSOR ---
  window.addEventListener("mousemove", (e) => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    outline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
  });

  // --- TYPEWRITER ---
  if (txtElement) {
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    let wordIndex = 0,
      txt = "",
      isDeleting = false;
    function type() {
      const current = wordIndex % words.length,
        fullTxt = words[current];
      txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);
      txtElement.innerHTML = txt;
      let typeSpeed = isDeleting ? 75 : 150;
      if (!isDeleting && txt === fullTxt) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && txt === "") {
        isDeleting = false;
        wordIndex++;
        typeSpeed = 500;
      }
      setTimeout(type, typeSpeed);
    }
    type();
  }

  // --- SCROLL LOGIC ---
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((s) => {
      if (pageYOffset >= s.offsetTop - 200) current = s.getAttribute("id");
    });
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100) current = "kontak";

    desktopNavItems.forEach((item) => item.classList.toggle("text-red-600", item.getAttribute("href") === `#${current}`));
    mobileNavItems.forEach((item) => item.classList.toggle("text-red-600", item.getAttribute("href") === `#${current}`));

    if (window.scrollY > 400) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
  });

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // --- FAQ ACCORDION ---
  document.querySelectorAll(".faq-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement,
        ans = item.querySelector(".faq-answer");
      if (ans.style.maxHeight) {
        ans.style.maxHeight = null;
        item.classList.remove("bg-red-600/5");
      } else {
        ans.style.maxHeight = ans.scrollHeight + "px";
        item.classList.add("bg-red-600/5");
      }
    });
  });
});
