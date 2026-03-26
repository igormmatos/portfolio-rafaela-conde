(() => {
  const WHATSAPP_PHONE = "5532998342555";
  const GENERIC_WHATSAPP_MESSAGE = "Olá, Dra. Rafaela. Gostaria de falar sobre meu caso.";
  const themeToggleButton = document.getElementById("theme-toggle");
  const mobileNavToggleButton = document.getElementById("mobile-nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const contactForm = document.getElementById("contact-form");
  const termsCheckbox = document.getElementById("terms");
  const formFeedback = document.getElementById("form-feedback");

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

  if (contactForm && termsCheckbox && formFeedback) {
    const fieldIds = ["nome", "telefone", "email", "cidade", "mensagem"];
    const fields = Object.fromEntries(
      fieldIds.map((id) => [id, document.getElementById(id)]),
    );

    const clearFeedback = () => {
      formFeedback.hidden = true;
      formFeedback.textContent = "";
      formFeedback.classList.remove("is-error");
    };

    const openWhatsApp = (message) => {
      const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
      const popup = window.open(url, "_blank", "noopener,noreferrer");

      if (!popup) {
        window.location.href = url;
      }
    };

    termsCheckbox.addEventListener("change", () => {
      if (termsCheckbox.checked) {
        clearFeedback();
      }
    });

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!termsCheckbox.checked) {
        formFeedback.hidden = false;
        formFeedback.textContent = "Aceite os termos para enviar sua mensagem pelo WhatsApp.";
        formFeedback.classList.add("is-error");
        termsCheckbox.focus();
        return;
      }

      clearFeedback();

      const values = {
        nome: fields.nome?.value.trim() ?? "",
        telefone: fields.telefone?.value.trim() ?? "",
        email: fields.email?.value.trim() ?? "",
        cidade: fields.cidade?.value.trim() ?? "",
        mensagem: fields.mensagem?.value.trim() ?? "",
      };

      const detailLines = [];

      if (values.nome) detailLines.push(`Nome: ${values.nome}`);
      if (values.telefone) detailLines.push(`Telefone / WhatsApp: ${values.telefone}`);
      if (values.email) detailLines.push(`E-mail: ${values.email}`);
      if (values.cidade) detailLines.push(`Cidade/UF: ${values.cidade}`);
      if (values.mensagem) {
        detailLines.push("Mensagem:");
        detailLines.push(values.mensagem);
      }

      const message = detailLines.length
        ? ["Olá, Dra. Rafaela! Recebi uma solicitação pelo site.", "", ...detailLines].join("\n")
        : GENERIC_WHATSAPP_MESSAGE;

      openWhatsApp(message);
    });
  }
})();
