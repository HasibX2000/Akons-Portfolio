// Remove the entire content of this file if it was only used for the mobile menu

$(document).ready(function () {
  // Animate hero elements
  $(".hero__title").animate({ opacity: 1, transform: "translateY(0)" }, 800);
  $(".hero__subtitle").delay(200).animate({ opacity: 1, transform: "translateY(0)" }, 800);
  $(".hero__cta-button").delay(400).animate({ opacity: 1, transform: "translateY(0)" }, 800);
  $(".hero__image-container").delay(400).animate({ opacity: 1, transform: "translateX(0)" }, 800);

  // Animate counter section
  $(".hero__counter-item").each(function (index) {
    $(this)
      .delay(200 * index)
      .animate({ opacity: 1, transform: "translateY(0)" }, 800);
  });

  // Animate quote section
  $(".hero__quote-section").delay(800).animate({ opacity: 1, transform: "translateY(0)" }, 800);

  // Counter animation
  $(".hero__counter").each(function () {
    var $this = $(this);
    var countTo = $this.attr("data-count");

    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: "swing",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });

  // Parallax effect on hero image
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $(".hero__image").css("transform", "translateY(" + scrollTop * 0.2 + "px)");
  });

  // Update copyright year
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});

// Mobile Menu Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get all necessary elements
  const mobileMenu = document.querySelector(".navbar-mobile");
  const mobileMenuToggle = document.querySelector("#mobileMenuToggle");
  const mobileMenuClose = document.querySelector(".navbar-mobile__close");
  const mobileMenuOverlay = document.querySelector(".navbar-overlay");
  const mobileMenuLinks = document.querySelectorAll(".navbar-mobile__link");

  // Toggle menu function
  function toggleMobileMenu() {
    const mobileMenu = document.querySelector(".navbar-mobile");
    const mobileMenuOverlay = document.querySelector(".navbar-overlay");

    if (!mobileMenu.classList.contains("active")) {
      // Opening menu
      mobileMenu.classList.add("active");
      mobileMenuOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
      // Closing menu - add delay to allow animations to complete
      mobileMenu.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      mobileMenuOverlay.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";

      mobileMenu.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");

      setTimeout(() => {
        document.body.style.overflow = "";
      }, 400); // Match transition duration
    }
  }

  // Toggle menu
  mobileMenuToggle.addEventListener("click", toggleMobileMenu);

  // Close menu
  mobileMenuClose.addEventListener("click", toggleMobileMenu);
  mobileMenuOverlay.addEventListener("click", toggleMobileMenu);

  // Close menu when clicking on links
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", toggleMobileMenu);
  });
});

// Navbar functionality
document.addEventListener("DOMContentLoaded", function () {
  // Active link handling
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function updateActiveLink() {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Header scroll class
  const header = document.getElementById("header");
  function updateHeader() {
    if (window.scrollY > 50) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse.classList.contains("show")) {
          document.querySelector(".navbar-toggler").click();
        }
      }
    });
  });

  // Event listeners
  window.addEventListener("scroll", function () {
    updateActiveLink();
    updateHeader();
  });

  // Initial call
  updateActiveLink();
  updateHeader();
});

// Initialize Testimonials Slider
const testimonialsSlider = new Swiper(".testimonials-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
