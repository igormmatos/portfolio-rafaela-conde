(() => {
  const themeToggleButton = document.getElementById("theme-toggle");

  if (!themeToggleButton) {
    return;
  }

  themeToggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
})();
