(() => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const mobileNavToggleButton = document.getElementById("mobile-nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
    });
  }

  if (mobileNavToggleButton && mobileNav) {
    mobileNavToggleButton.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");

      mobileNavToggleButton.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        mobileNavToggleButton.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
