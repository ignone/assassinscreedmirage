window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });

  $("[scrub-each-word]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page-wrapper",
        start: "top center",
        scrub: false,
        delay: 0.5,
      },
    });
    tl.from(
      $(this).find(".word"),
      {
        opacity: 0.2,
        duration: 0.1,
        ease: "power2.out",
        stagger: { each: 0.07 },
      },
      3
    );
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});

// Code for the Card Flip Animation
if (window.innerWidth < 991) {
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".card");
    function toggleActiveClass(target) {
      elements.forEach((element) => {
        if (element === target) {
          element.classList.toggle("active");
        } else {
          element.classList.remove("active");
        }
      });
    }
    elements.forEach((element) => {
      element.addEventListener("click", (event) => {
        toggleActiveClass(event.currentTarget);
        event.stopPropagation();
      });
    });
    document.addEventListener("click", () => {
      elements.forEach((element) => {
        element.classList.remove("active");
      });
    });
  });
}

// Nav ↔︎ Section Sync
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(max-width: 991px)": function () {
    // Nav0 (Experience)
    let nav0 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section.cc-experience",
        toggleActions: "play none none reverse ",
        start: "25% 50%",
        end: "25% 50%",
      },
    });
    nav0.to(".nav__link", { x: "0%", duration: 0.3 }, 0);
    nav0.to(".nav__arrow-left", { opacity: 0, duration: 0 }, 0);

    // Nav1 (Characters)
    let nav1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section.cc-characters",
        toggleActions: "play none none reverse ",
        start: "25% 50%",
        end: "25% 50%",
      },
    });
    nav1.to(".nav__link", { x: "-100%", duration: 0.3 }, 0);
    nav1.to(".nav__arrow-left", { opacity: 1, duration: 0 }, 0);

    // Nav2 (Locations)
    let nav2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section.cc-locations",
        toggleActions: "play none none reverse ",
        start: "25% 50%",
        end: "25% 50%",
      },
    });
    nav2.to(".nav__link", { x: "-200%", duration: 0.3 }, 0);

    // Nav3 (Weapons)
    let nav3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section.cc-weapons",
        toggleActions: "play none none reverse ",
        start: "25% 50%",
        end: "25% 50%",
      },
    });
    nav3.to(".nav__link", { x: "-300%", duration: 0.3 }, 0);

    // Nav4 (Factions)
    let nav4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section.cc-factions",
        toggleActions: "play none none reverse ",
        start: "25% 50%",
        end: "25% 50%",
      },
    });
    nav4.to(".nav__link", { x: "-400%", duration: 0.3 }, 0);
    nav4.to(".nav__arrow-right", { opacity: 1, duration: 0 }, 0);

    // Nav5 (Game)
    let nav5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section.cc-game",
        toggleActions: "play none none reverse ",
        start: "top 75%",
        end: "top 75%",
      },
    });
    nav5.to(".nav__link", { x: "-500%", duration: 0.3 }, 0);
    nav5.to(".nav__arrow-right", { opacity: 0, duration: 0 }, 0);
  },
});
