(() => {
  document.documentElement.classList.add("js");

  const WHATSAPP_PHONE = "5532998342555";
  const CTA_TIME_ZONE = "America/Sao_Paulo";
  const CTA_BUSINESS_OPEN_HOUR = 8;
  const CTA_BUSINESS_CLOSE_HOUR = 18;
  const CTA_PRIMARY_TEXT = "Falar no WhatsApp com a Dra. Rafaela";
  const FORM_DEFAULT_URGENCY = "Não informado.";
  const TESTIMONIAL_AUTOPLAY_DELAY = 6000;
  const TESTIMONIAL_TEXT_CLAMP_LINES = 3;
  const themeToggleButton = document.getElementById("theme-toggle");
  const mobileNavToggleButton = document.getElementById("mobile-nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const heroSection = document.querySelector(".hero, .page-hero");
  const contactSection = document.getElementById("contato");
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
  const officeAddress = document.getElementById("office-address");
  const copyAddressButton = document.getElementById("copy-address-button");
  const copyAddressStatus = document.getElementById("copy-address-status");

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

  if (officeAddress && copyAddressButton && copyAddressStatus) {
    const copyAddressLabel = copyAddressButton.querySelector(".contact-address-action-label");
    const defaultCopyAddressLabel =
      copyAddressLabel?.textContent?.trim() ?? copyAddressButton.textContent.trim();
    let copyAddressResetTimeoutId = 0;

    const normalizeAddress = (value) =>
      value
        .replace(/\s*\n\s*/g, ", ")
        .replace(/\s{2,}/g, " ")
        .trim();

    const setCopyAddressLabel = (label) => {
      if (copyAddressLabel) {
        copyAddressLabel.textContent = label;
      } else {
        copyAddressButton.textContent = label;
      }
    };

    const resetCopyAddressFeedback = () => {
      setCopyAddressLabel(defaultCopyAddressLabel);
      copyAddressButton.classList.remove("is-success", "is-error");
      copyAddressStatus.textContent = "";
    };

    const setCopyAddressFeedback = (label, status, stateClass) => {
      clearTimeout(copyAddressResetTimeoutId);
      setCopyAddressLabel(label);
      copyAddressButton.classList.remove("is-success", "is-error");

      if (stateClass) {
        copyAddressButton.classList.add(stateClass);
      }

      copyAddressStatus.textContent = status;
      copyAddressResetTimeoutId = window.setTimeout(() => {
        resetCopyAddressFeedback();
      }, 2000);
    };

    const copyTextToClipboard = async (text) => {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }

      const temporaryField = document.createElement("textarea");
      temporaryField.value = text;
      temporaryField.setAttribute("readonly", "");
      temporaryField.style.position = "absolute";
      temporaryField.style.left = "-9999px";
      document.body.appendChild(temporaryField);
      temporaryField.select();

      const didCopy = document.execCommand("copy");
      document.body.removeChild(temporaryField);

      if (!didCopy) {
        throw new Error("Clipboard copy failed.");
      }
    };

    copyAddressButton.addEventListener("click", async () => {
      const addressToCopy = normalizeAddress(officeAddress.innerText);

      try {
        await copyTextToClipboard(addressToCopy);
        setCopyAddressFeedback(
          "Copiado!",
          "Endereço copiado para a área de transferência.",
          "is-success",
        );
      } catch {
        setCopyAddressFeedback(
          "Não foi possível copiar",
          "Não foi possível copiar o endereço. Tente usar o Google Maps.",
          "is-error",
        );
      }
    });
  }

  const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));

  if (revealElements.length) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => {
        element.classList.add("is-revealed");
      });
    } else {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px 0px -8% 0px",
        },
      );

      revealElements.forEach((element) => {
        revealObserver.observe(element);
      });
    }
  }

  const animatedFaqItems = Array.from(document.querySelectorAll(".page-service .faq-item"));

  if (animatedFaqItems.length) {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileFaqQuery = window.matchMedia("(max-width: 767px)");

    const setFaqExpandedState = (summary, isOpen) => {
      summary.setAttribute("aria-expanded", String(isOpen));
    };

    const syncFaqAnswerHeight = (details, answer, inner) => {
      if (!details.open) {
        return;
      }

      answer.style.maxHeight = `${inner.scrollHeight}px`;
    };

    const scrollFaqIntoView = (details) => {
      if (!mobileFaqQuery.matches) {
        return;
      }

      details.scrollIntoView({
        behavior: reduceMotionQuery.matches ? "auto" : "smooth",
        block: "start",
      });
    };

    const setStaticFaqState = (details, summary, answer, inner, isOpen) => {
      details.open = isOpen;
      answer.style.maxHeight = isOpen ? `${inner.scrollHeight}px` : "0px";
      answer.style.opacity = isOpen ? "1" : "0";
      setFaqExpandedState(summary, isOpen);
    };

    const animateFaqToggle = (details, summary, answer, inner, shouldOpen) => {
      if (answer.dataset.animating === "true") {
        return;
      }

      const startHeight = answer.getBoundingClientRect().height;

      if (shouldOpen) {
        details.open = true;
      }

      const endHeight = shouldOpen ? inner.getBoundingClientRect().height : 0;

      answer.dataset.animating = "true";
      setFaqExpandedState(summary, shouldOpen);
      answer.style.maxHeight = `${startHeight}px`;
      answer.style.opacity = shouldOpen ? "0" : "1";

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          answer.style.maxHeight = `${endHeight}px`;
          answer.style.opacity = shouldOpen ? "1" : "0";
        });
      });

      const handleTransitionEnd = (event) => {
        if (event.propertyName !== "max-height") {
          return;
        }

        answer.removeEventListener("transitionend", handleTransitionEnd);
        answer.dataset.animating = "false";

        if (shouldOpen) {
          details.open = true;
          answer.style.maxHeight = `${inner.scrollHeight}px`;
          answer.style.opacity = "1";
          scrollFaqIntoView(details);
        } else {
          details.open = false;
          answer.style.maxHeight = "0px";
          answer.style.opacity = "0";
        }
      };

      answer.addEventListener("transitionend", handleTransitionEnd);
    };

    animatedFaqItems.forEach((details) => {
      const summary = details.querySelector("summary");
      const answer = details.querySelector(".faq-answer");
      const inner = answer?.querySelector(".faq-answer-inner");

      if (!summary || !answer || !inner) {
        return;
      }

      answer.dataset.animating = "false";
      const faqIndex = animatedFaqItems.indexOf(details) + 1;
      const summaryId = summary.id || `faq-summary-${faqIndex}`;
      const answerId = answer.id || `faq-answer-${faqIndex}`;

      summary.id = summaryId;
      answer.id = answerId;
      summary.setAttribute("aria-controls", answerId);
      answer.setAttribute("role", "region");
      answer.setAttribute("aria-labelledby", summaryId);
      setStaticFaqState(details, summary, answer, inner, details.open);

      summary.addEventListener("click", (event) => {
        event.preventDefault();

        if (reduceMotionQuery.matches) {
          const shouldOpen = !details.open;
          setStaticFaqState(details, summary, answer, inner, shouldOpen);

          if (shouldOpen) {
            scrollFaqIntoView(details);
          }

          return;
        }

        animateFaqToggle(details, summary, answer, inner, !details.open);
      });
    });

    window.addEventListener("resize", () => {
      animatedFaqItems.forEach((details) => {
        const answer = details.querySelector(".faq-answer");
        const inner = answer?.querySelector(".faq-answer-inner");

        if (!answer || !inner) {
          return;
        }

        syncFaqAnswerHeight(details, answer, inner);
      });
    });
  }

  if (mobileWhatsAppCta) {
    let isHeroVisible = Boolean(heroSection);
    let isContactVisible = false;
    let isFormEngaged = false;

    const setFloatingCtaVisibility = (shouldShow) => {
      mobileWhatsAppCta.classList.toggle("is-visible", shouldShow);
    };

    const syncFloatingCtaVisibility = () => {
      setFloatingCtaVisibility(!isHeroVisible && !isContactVisible && !isFormEngaged);
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
    if (mobileWhatsAppCtaStatus) {
      mobileWhatsAppCtaStatus.textContent = ctaStatus;
    }

    mobileWhatsAppCta.setAttribute("aria-label", `${CTA_PRIMARY_TEXT}. ${ctaStatus}.`);

    if (!heroSection) {
      isHeroVisible = false;
      syncFloatingCtaVisibility();
    } else if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          isHeroVisible = entry.isIntersecting;
          syncFloatingCtaVisibility();
        },
        {
          threshold: 0,
        },
      );

      observer.observe(heroSection);

      if (contactSection) {
        const contactObserver = new IntersectionObserver(
          ([entry]) => {
            isContactVisible = entry.isIntersecting;
            syncFloatingCtaVisibility();
          },
          {
            threshold: 0.15,
          },
        );

        contactObserver.observe(contactSection);
      }
    } else {
      const syncFloatingCtaOnScroll = () => {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const contactVisible = contactSection
          ? contactSection.getBoundingClientRect().top < window.innerHeight * 0.85
          : false;

        isHeroVisible = heroBottom > 0;
        isContactVisible = contactVisible;
        syncFloatingCtaVisibility();
      };

      syncFloatingCtaOnScroll();
      window.addEventListener("scroll", syncFloatingCtaOnScroll, { passive: true });
      window.addEventListener("resize", syncFloatingCtaOnScroll);
    }

    if (contactForm) {
      contactForm.addEventListener("focusin", () => {
        isFormEngaged = true;
        syncFloatingCtaVisibility();
      });

      contactForm.addEventListener("focusout", (event) => {
        const nextFocusedElement = event.relatedTarget;

        if (!nextFocusedElement || !contactForm.contains(nextFocusedElement)) {
          isFormEngaged = false;
          syncFloatingCtaVisibility();
        }
      });
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
    let pageStartIndices = [0];
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

    const getPageStartIndices = (cardsLength, visibleSlides) => {
      if (cardsLength <= visibleSlides) {
        return [0];
      }

      const starts = [];
      const lastValidStartIndex = cardsLength - visibleSlides;

      for (
        let startIndex = 0;
        startIndex <= lastValidStartIndex;
        startIndex += visibleSlides
      ) {
        starts.push(startIndex);
      }

      if (starts[starts.length - 1] !== lastValidStartIndex) {
        starts.push(lastValidStartIndex);
      }

      return starts;
    };

    const getNearestPageIndex = (firstVisibleIndex) => {
      if (!pageStartIndices.length) {
        return 0;
      }

      let nearestPageIndex = 0;
      let smallestDistance = Number.POSITIVE_INFINITY;

      pageStartIndices.forEach((pageStartIndex, pageIndex) => {
        const distance = Math.abs(pageStartIndex - firstVisibleIndex);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          nearestPageIndex = pageIndex;
        }
      });

      return nearestPageIndex;
    };

    const getTestimonialLineHeight = (text) => {
      const computedStyle = window.getComputedStyle(text);
      const parsedLineHeight = Number.parseFloat(computedStyle.lineHeight);

      if (Number.isFinite(parsedLineHeight)) {
        return parsedLineHeight;
      }

      const parsedFontSize = Number.parseFloat(computedStyle.fontSize);

      if (Number.isFinite(parsedFontSize)) {
        return parsedFontSize * 1.75;
      }

      return 24;
    };

    const hasHiddenTestimonialText = (text) => {
      const lineHeight = getTestimonialLineHeight(text);
      const clampHeight = lineHeight * TESTIMONIAL_TEXT_CLAMP_LINES;
      const estimatedLineCount = text.scrollHeight / lineHeight;

      return (
        estimatedLineCount > TESTIMONIAL_TEXT_CLAMP_LINES + 0.1 &&
        text.scrollHeight > clampHeight + 1
      );
    };

    const syncTestimonialToggle = (card, index) => {
      const text = card.querySelector(".testimonial-text");
      const toggle = card.querySelector(".testimonial-toggle");

      if (!text || !toggle) {
        return;
      }

      if (!text.id) {
        text.id = `testimonial-text-${index + 1}`;
      }

      toggle.setAttribute("aria-controls", text.id);

      const hasOverflow = hasHiddenTestimonialText(text);

      if (!hasOverflow) {
        card.classList.remove("is-expanded");
        card.classList.remove("has-hidden-content");
        toggle.hidden = true;
        toggle.textContent = "Ver mais";
        toggle.setAttribute("aria-expanded", "false");
        return;
      }

      const isExpanded = card.classList.contains("is-expanded");

      card.classList.toggle("has-hidden-content", !isExpanded);
      toggle.hidden = false;
      toggle.textContent = isExpanded ? "Ver menos" : "Ver mais";
      toggle.setAttribute("aria-expanded", String(isExpanded));
    };

    const syncTestimonialToggles = () => {
      testimonialCards.forEach((card, index) => {
        syncTestimonialToggle(card, index);
      });
    };

    const updateTrackPosition = () => {
      testimonialCarousel.style.setProperty("--testimonial-slides-per-view", String(slidesPerView));
      syncTestimonialToggles();

      const firstVisibleIndex = pageStartIndices[currentPage] ?? 0;
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
      const previousFirstVisibleIndex = pageStartIndices[currentPage] ?? 0;

      slidesPerView = getSlidesPerView();
      pageStartIndices = getPageStartIndices(testimonialCards.length, slidesPerView);
      totalPages = pageStartIndices.length;
      currentPage = getNearestPageIndex(previousFirstVisibleIndex);

      buildDots();
      updateTrackPosition();
    };

    testimonialCards.forEach((card, index) => {
      const toggle = card.querySelector(".testimonial-toggle");

      if (!toggle) {
        return;
      }

      toggle.addEventListener("click", () => {
        card.classList.toggle("is-expanded");
        syncTestimonialToggle(card, index);
        updateTrackPosition();
      });
    });

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

    window.addEventListener("load", () => {
      syncCarouselLayout();
    });

    if (document.fonts?.ready) {
      document.fonts.ready
        .then(() => {
          syncCarouselLayout();
        })
        .catch(() => {});
    }

    syncCarouselLayout();
    startAutoplay();
  }

  if (contactForm && termsCheckbox && formFeedback) {
    const fieldIds = ["nome", "telefone", "area", "prazo", "mensagem"];
    const fields = Object.fromEntries(
      fieldIds.map((id) => [id, document.getElementById(id)]),
    );
    const fieldErrorElements = Object.fromEntries(
      ["nome", "telefone", "area", "mensagem"].map((id) => [
        id,
        document.getElementById(`${id}-error`),
      ]),
    );
    const termsError = document.getElementById("terms-error");
    const requiredFieldMessages = {
      nome: "Informe seu nome completo para iniciar o atendimento.",
      telefone: "Informe seu telefone ou WhatsApp para retorno.",
      area: "Selecione a área de atuação desejada para seguir com o atendimento.",
      mensagem: "Descreva sua necessidade para seguir com o atendimento.",
    };

    const setFieldValidity = (field, isInvalid) => {
      if (!field) {
        return;
      }

      if (isInvalid) {
        field.setAttribute("aria-invalid", "true");
      } else {
        field.removeAttribute("aria-invalid");
      }
    };

    const clearInlineError = (fieldId) => {
      const errorElement = fieldErrorElements[fieldId];

      if (errorElement) {
        errorElement.hidden = true;
        errorElement.textContent = "";
      }

      setFieldValidity(fields[fieldId], false);
    };

    const showInlineError = (fieldId, message) => {
      const errorElement = fieldErrorElements[fieldId];

      if (errorElement) {
        errorElement.hidden = false;
        errorElement.textContent = message;
      }

      setFieldValidity(fields[fieldId], true);
    };

    const clearTermsError = () => {
      if (termsError) {
        termsError.hidden = true;
        termsError.textContent = "";
      }

      setFieldValidity(termsCheckbox, false);
    };

    const showTermsError = (message) => {
      if (termsError) {
        termsError.hidden = false;
        termsError.textContent = message;
      }

      setFieldValidity(termsCheckbox, true);
    };

    const clearAllInlineErrors = () => {
      Object.keys(fieldErrorElements).forEach(clearInlineError);
      clearTermsError();
    };

    const clearFeedback = () => {
      formFeedback.hidden = true;
      formFeedback.textContent = "";
      formFeedback.classList.remove("is-error");
    };

    const showError = (message, field, fieldId) => {
      formFeedback.hidden = false;
      formFeedback.textContent = message;
      formFeedback.classList.add("is-error");

      clearAllInlineErrors();

      if (fieldId && fieldErrorElements[fieldId]) {
        showInlineError(fieldId, message);
      } else if (field === termsCheckbox) {
        showTermsError(message);
      }

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

      const phoneDigits = digits.slice(2);
      const isMobileNumber = phoneDigits.length > 8;
      const firstBlock = isMobileNumber ? phoneDigits.slice(0, 5) : phoneDigits.slice(0, 4);
      const secondBlock = isMobileNumber ? phoneDigits.slice(5, 9) : phoneDigits.slice(4, 8);

      if (!firstBlock) {
        return `(${areaCode})`;
      }

      if (!secondBlock) {
        return `(${areaCode}) ${firstBlock}`;
      }

      return `(${areaCode}) ${firstBlock}-${secondBlock}`;
    };

    const openWhatsApp = (message) => {
      const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
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

    Object.values(fields).forEach((field) => {
      if (!field) {
        return;
      }

      const eventName = field.tagName === "SELECT" ? "change" : "input";
      field.addEventListener(eventName, () => {
        clearInlineError(field.id);

        if (formFeedback.classList.contains("is-error")) {
          clearFeedback();
        }
      });
    });

    termsCheckbox.addEventListener("change", () => {
      clearTermsError();

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
        area: fields.area?.value.trim() ?? "",
        prazo: fields.prazo?.value.trim() ?? "",
        mensagem: fields.mensagem?.value.trim() ?? "",
      };
      const firstMissingField = Object.entries(requiredFieldMessages).find(
        ([fieldId]) => !values[fieldId],
      );

      if (firstMissingField) {
        const [fieldId, message] = firstMissingField;
        showError(message, fields[fieldId], fieldId);
        return;
      }

      if (values.telefone.replace(/\D/g, "").length !== 11) {
        showError("Informe o telefone no formato (00) 00000-0000.", fields.telefone, "telefone");
        return;
      }

      if (!termsCheckbox.checked) {
        showError(
          "Aceite a política de privacidade e autorize o contato via WhatsApp para enviar sua mensagem.",
          termsCheckbox,
        );
        return;
      }

      const greeting =
        values.area === "Direito Trabalhista"
          ? "Olá. Preenchi o formulário do site e gostaria de orientação inicial em Direito Trabalhista."
          : values.area === "Direito de Trânsito"
            ? "Olá. Preenchi o formulário do site e gostaria de orientação inicial em Direito de Trânsito."
            : "Olá. Preenchi o formulário do site e gostaria de orientação inicial.";

      const message = [
        greeting,
        "",
        `Área: ${values.area}`,
        `Nome: ${values.nome}`,
        `Telefone / WhatsApp: ${values.telefone}`,
        `Prazo/urgência: ${values.prazo || FORM_DEFAULT_URGENCY}`,
        `Resumo: ${values.mensagem}`,
      ].join("\n");

      openWhatsApp(message);
    });
  }
})();
