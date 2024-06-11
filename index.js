// top text scroll event

gsap.to(".text-wrapper", {
  ease: "ease-in",
  scrollTrigger: {
    trigger: ".text-wrapper",
    pin: true,
    end: "+=2500",
    scrub: 1,
  },
  scale: 0.8,
  opacity: 0,
});

// circle sticky
$(".circle-wrapper").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".sticky-circle img");
  let targettext = $(".sticky-circle p");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      //trigger element - viewport
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });
  tl.fromTo(
    targetElement,
    {
      width: "20em",
      height: "30em",
      borderRadius: "20em",
      duration: 3,
    },
    {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
      duration: 3,
    }
  );
  tl.fromTo(
    targettext,
    {
      opacity: 0,
      duration: 3,
    },
    {
      opacity: 1,
      duration: 3,
    }
  );
});

gsap.to(".sticky1", {
  scrollTrigger: {
    trigger: ".mobile-app-text1 ",
    pin: true,
    end: "+=2000",
    scrub: 1,
  },
  display: "none",
});
gsap.to(".sticky2", {
  scrollTrigger: {
    trigger: ".mobile-app-text2 ",
    pin: true,
    end: "+=2000",
    scrub: 1,
  },
  display: "none",
});
gsap.to(".sticky3", {
  scrollTrigger: {
    trigger: ".mobile-app-text3 ",
    pin: true,
    end: "+=2000",
    scrub: 1,
  },
});

// text event
gsap.set(".mobile-app-text1 .word", { width: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".mobile-app-text1 .word",
      scrub: 1,
      start: "top top",
      end: "+=1000",
    },
  })
  .to(".mobile-app-text1 .word", {
    width: "100%",
    duration: 1,
    ease: "none",
    stagger: 5,
  });

gsap.set(".mobile-app-text2 .word", { width: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".mobile-app-text2 .word",
      scrub: 1,
      start: "top top",
      end: "+=1000",
    },
  })
  .to(".mobile-app-text2 .word", {
    width: "100%",
    duration: 1,
    ease: "none",
    stagger: 5,
  });

gsap.set(".mobile-app-text3 .word", { width: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".mobile-app-text3 .word",
      scrub: 1,
      start: "top top",
      end: "+=1000",
    },
  })
  .to(".mobile-app-text3 .word", {
    width: "100%",
    duration: 1,
    ease: "none",
    stagger: 5,
  });
const sections = gsap.utils.toArray(".horizon-container");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizon-cotainer-wrapper",
    pin: true,
    scrub: 1,
    end: "+=1000",
  },
});
gsap.to(".horizon-cotainer-wrapper", {
  ease: "none",
  scrollTrigger: {
    trigger: ".container2",
    pin: true,
    scrub: 1,
    end: "+=2000",
  },
});

gsap.to(".op", {
  ease: "none",
  scrollTrigger: {
    trigger: ".img-wrapper",
    scrub: 1,
    end: "+=1000",
  },
  opacity: 1,
});

gsap.to(".dogrun-wrapper", {
  x: 1000,
  ease: "none",
  scrollTrigger: {
    trigger: ".dogrun-wrapper img",
    scrub: 1,
    end: "+=1000",
  },
});

const goToup = document.querySelector(".top");
$(".top").on("click", (e) => {
  e.preventDefault();
  // $('html, body').animate({scrollTop:0},300);
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
