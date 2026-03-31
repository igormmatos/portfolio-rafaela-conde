(() => {
  const WHATSAPP_PHONE = "5532998342555";
  const CTA_TIME_ZONE = "America/Sao_Paulo";
  const CTA_BUSINESS_OPEN_HOUR = 8;
  const CTA_BUSINESS_CLOSE_HOUR = 18;
  const CTA_PRIMARY_TEXT = "Comece agora seu pré-atendimento via WhatsApp";
  const TESTIMONIAL_AUTOPLAY_DELAY = 6000;
  const themeToggleButton = document.getElementById("theme-toggle");
  const mobileNavToggleButton = document.getElementById("mobile-nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const heroSection = document.querySelector(".hero");
  const mobileWhatsAppCta = document.querySelector(".mobile-whatsapp-cta");
  const mobileWhatsAppCtaStatus = document.getElementById("mobile-whatsapp-cta-status");
  const testimonialCarousel = document.querySelector(".testimonial-carousel");
  const testimonialTrack = testimonialCarousel?.querySelector(".testimonial-track");
  const testimonialCards = testimonialTrack
    ? Array.from(testimonialTrack.querySelectorAll(".testimonial-card"))
    : [];
  const testimonialDots = document.getElementById("testimonial-dots");
  const testimonialPrevButton = document.getElementById("testimonial-prev");
  const testimonialNextButton = document.getElementById("testimonial-next");
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

  if (mobileWhatsAppCta && mobileWhatsAppCtaStatus) {
    const setFloatingCtaVisibility = (shouldShow) => {
      mobileWhatsAppCta.classList.toggle("is-visible", shouldShow);
    };

    const getSaoPauloBusinessStatus = () => {
      try {
        const formatter = new Intl.DateTimeFormat("pt-BR", {
          timeZone: CTA_TIME_ZONE,
          weekday: "short",
          hour: "2-digit",
          hour12: false,
        });
        const parts = formatter.formatToParts(new Date());
        const weekdayPart = parts.find((part) => part.type === "weekday")?.value ?? "";
        const hourPart = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
        const normalizedWeekday = weekdayPart.replace(".", "").toLowerCase();
        const isBusinessDay = ["seg", "ter", "qua", "qui", "sex"].includes(normalizedWeekday);
        const isBusinessHour =
          hourPart >= CTA_BUSINESS_OPEN_HOUR && hourPart < CTA_BUSINESS_CLOSE_HOUR;

        return isBusinessDay && isBusinessHour ? "Fale agora" : "Agende seu horário";
      } catch {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const isBusinessDay = day >= 1 && day <= 5;
        const isBusinessHour = hour >= CTA_BUSINESS_OPEN_HOUR && hour < CTA_BUSINESS_CLOSE_HOUR;

        return isBusinessDay && isBusinessHour ? "Fale agora" : "Agende seu horário";
      }
    };

    const ctaStatus = getSaoPauloBusinessStatus();
    mobileWhatsAppCtaStatus.textContent = ctaStatus;
    mobileWhatsAppCta.setAttribute("aria-label", `${CTA_PRIMARY_TEXT}. ${ctaStatus}.`);

    if (!heroSection) {
      setFloatingCtaVisibility(true);
    } else if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setFloatingCtaVisibility(!entry.isIntersecting);
        },
        {
          threshold: 0,
        },
      );

      observer.observe(heroSection);
    } else {
      const syncFloatingCtaOnScroll = () => {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setFloatingCtaVisibility(heroBottom <= 0);
      };

      syncFloatingCtaOnScroll();
      window.addEventListener("scroll", syncFloatingCtaOnScroll, { passive: true });
      window.addEventListener("resize", syncFloatingCtaOnScroll);
    }
  }

  if (
    testimonialCarousel &&
    testimonialTrack &&
    testimonialDots &&
    testimonialPrevButton &&
    testimonialNextButton &&
    testimonialCards.length
  ) {
    let slidesPerView = 1;
    let currentPage = 0;
    let totalPages = 0;
    let autoplayIntervalId = 0;
    let autoplayResumeTimeoutId = 0;

    const getSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        return 3;
      }

      if (window.innerWidth >= 768) {
        return 2;
      }

      return 1;
    };

    const stopAutoplay = () => {
      if (autoplayIntervalId) {
        window.clearInterval(autoplayIntervalId);
        autoplayIntervalId = 0;
      }
    };

    const clearAutoplayResume = () => {
      if (autoplayResumeTimeoutId) {
        window.clearTimeout(autoplayResumeTimeoutId);
        autoplayResumeTimeoutId = 0;
      }
    };

    const pauseAutoplay = () => {
      stopAutoplay();
      clearAutoplayResume();
    };

    const startAutoplay = () => {
      stopAutoplay();
      clearAutoplayResume();

      if (totalPages <= 1) {
        return;
      }

      autoplayIntervalId = window.setInterval(() => {
        goToPage(currentPage + 1);
      }, TESTIMONIAL_AUTOPLAY_DELAY);
    };

    const scheduleAutoplayResume = () => {
      stopAutoplay();
      clearAutoplayResume();

      if (totalPages <= 1) {
        return;
      }

      autoplayResumeTimeoutId = window.setTimeout(() => {
        startAutoplay();
      }, TESTIMONIAL_AUTOPLAY_DELAY);
    };

    const buildDots = () => {
      testimonialDots.innerHTML = "";

      for (let pageIndex = 0; pageIndex < totalPages; pageIndex += 1) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "testimonial-dot";
        dot.setAttribute("aria-controls", "testimonial-track");
        dot.setAttribute("aria-label", `Ir para a página ${pageIndex + 1} dos depoimentos`);
        dot.addEventListener("click", () => {
          goToPage(pageIndex);
          scheduleAutoplayResume();
        });
        testimonialDots.append(dot);
      }
    };

    const updateDots = () => {
      Array.from(testimonialDots.children).forEach((dot, index) => {
        const isActive = index === currentPage;
        dot.classList.toggle("is-active", isActive);
        if (isActive) {
          dot.setAttribute("aria-current", "page");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
    };

    const updateTrackPosition = () => {
      testimonialCarousel.style.setProperty("--testimonial-slides-per-view", String(slidesPerView));

      const firstVisibleIndex = currentPage * slidesPerView;
      const firstVisibleCard = testimonialCards[firstVisibleIndex];
      const offset = firstVisibleCard?.offsetLeft ?? 0;

      testimonialTrack.style.transform = `translateX(-${offset}px)`;
      updateDots();
    };

    const goToPage = (nextPage) => {
      if (!totalPages) {
        return;
      }

      currentPage = (nextPage + totalPages) % totalPages;
      updateTrackPosition();
    };

    const syncCarouselLayout = () => {
      const previousFirstVisibleIndex = currentPage * slidesPerView;

      slidesPerView = getSlidesPerView();
      totalPages = Math.ceil(testimonialCards.length / slidesPerView);
      currentPage = Math.min(Math.floor(previousFirstVisibleIndex / slidesPerView), totalPages - 1);

      buildDots();
      updateTrackPosition();
    };

    testimonialPrevButton.addEventListener("click", () => {
      goToPage(currentPage - 1);
      scheduleAutoplayResume();
    });

    testimonialNextButton.addEventListener("click", () => {
      goToPage(currentPage + 1);
      scheduleAutoplayResume();
    });

    testimonialCarousel.addEventListener("mouseenter", pauseAutoplay);
    testimonialCarousel.addEventListener("mouseleave", scheduleAutoplayResume);
    testimonialCarousel.addEventListener("focusin", pauseAutoplay);
    testimonialCarousel.addEventListener("focusout", (event) => {
      const nextFocusedElement = event.relatedTarget;

      if (!nextFocusedElement || !testimonialCarousel.contains(nextFocusedElement)) {
        scheduleAutoplayResume();
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopAutoplay();
        clearAutoplayResume();
      } else {
        scheduleAutoplayResume();
      }
    });

    window.addEventListener("resize", () => {
      syncCarouselLayout();
    });

    syncCarouselLayout();
    startAutoplay();
  }

  if (contactForm && termsCheckbox && formFeedback) {
    const fieldIds = ["nome", "telefone", "email", "cidade", "area", "mensagem"];
    const fields = Object.fromEntries(
      fieldIds.map((id) => [id, document.getElementById(id)]),
    );
    const requiredFieldMessages = {
      nome: "Informe seu nome completo para iniciar o atendimento.",
      telefone: "Informe seu telefone ou WhatsApp para retorno.",
      area: "Selecione a área de atuação desejada para seguir com o atendimento.",
      mensagem: "Descreva sua necessidade para seguir com o atendimento.",
    };

    const clearFeedback = () => {
      formFeedback.hidden = true;
      formFeedback.textContent = "";
      formFeedback.classList.remove("is-error");
    };

    const showError = (message, field) => {
      formFeedback.hidden = false;
      formFeedback.textContent = message;
      formFeedback.classList.add("is-error");

      if (field) {
        field.focus();
      }
    };

    const formatPhoneNumber = (value) => {
      const digits = value.replace(/\D/g, "").slice(0, 11);

      if (!digits) {
        return "";
      }

      if (digits.length <= 2) {
        return `(${digits}`;
      }

      const areaCode = digits.slice(0, 2);

      if (digits.length <= 3) {
        return `(${areaCode}) ${digits.slice(2)}`;
      }

      const ninthDigit = digits.slice(2, 3);
      const firstBlock = digits.slice(3, 7);
      const secondBlock = digits.slice(7, 11);

      if (!firstBlock) {
        return `(${areaCode}) ${ninthDigit}`;
      }

      if (!secondBlock) {
        return `(${areaCode}) ${ninthDigit}.${firstBlock}`;
      }

      return `(${areaCode}) ${ninthDigit}.${firstBlock}-${secondBlock}`;
    };

    const formatEmailValue = (value) => value.replace(/\s+/g, "").toLowerCase();

    const openWhatsApp = (message) => {
      const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
      const popup = window.open(url, "_blank", "noopener,noreferrer");

      if (!popup) {
        window.location.href = url;
      }
    };

    if (fields.telefone) {
      fields.telefone.addEventListener("input", () => {
        fields.telefone.value = formatPhoneNumber(fields.telefone.value);
      });
    }

    if (fields.email) {
      fields.email.addEventListener("input", () => {
        fields.email.value = formatEmailValue(fields.email.value);
      });
    }

    Object.values(fields).forEach((field) => {
      if (!field) {
        return;
      }

      const eventName = field.tagName === "SELECT" ? "change" : "input";
      field.addEventListener(eventName, () => {
        if (formFeedback.classList.contains("is-error")) {
          clearFeedback();
        }
      });
    });

    termsCheckbox.addEventListener("change", () => {
      if (formFeedback.classList.contains("is-error")) {
        clearFeedback();
      }
    });

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      clearFeedback();

      const values = {
        nome: fields.nome?.value.trim() ?? "",
        telefone: fields.telefone?.value.trim() ?? "",
        email: fields.email?.value.trim() ?? "",
        cidade: fields.cidade?.value.trim() ?? "",
        area: fields.area?.value.trim() ?? "",
        mensagem: fields.mensagem?.value.trim() ?? "",
      };
      const firstMissingField = Object.entries(requiredFieldMessages).find(
        ([fieldId]) => !values[fieldId],
      );

      if (firstMissingField) {
        const [fieldId, message] = firstMissingField;
        showError(message, fields[fieldId]);
        return;
      }

      if (values.telefone.replace(/\D/g, "").length !== 11) {
        showError("Informe o telefone no formato (00) 0.0000-0000.", fields.telefone);
        return;
      }

      if (fields.email && values.email && !fields.email.checkValidity()) {
        showError("Informe um e-mail válido ou deixe esse campo em branco.", fields.email);
        return;
      }

      if (!termsCheckbox.checked) {
        showError(
          "Aceite a política de privacidade e autorize o contato via WhatsApp para enviar sua mensagem.",
          termsCheckbox,
        );
        return;
      }

      const detailLines = [];

      detailLines.push(`Área de atuação desejada: ${values.area}`);
      detailLines.push(`Nome: ${values.nome}`);
      detailLines.push(`Telefone / WhatsApp: ${values.telefone}`);
      if (values.email) detailLines.push(`E-mail: ${values.email}`);
      if (values.cidade) detailLines.push(`Cidade/UF: ${values.cidade}`);
      detailLines.push("Mensagem:");
      detailLines.push(values.mensagem);

      const message = ["Olá, Dra. Rafaela! Você poderia me ajudar com meu caso?", "", ...detailLines]
        .join("\n");

      openWhatsApp(message);
    });
  }
})();
