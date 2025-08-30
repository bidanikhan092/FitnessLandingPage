Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 0.8, range: [0, 30] },
    b: { value: -0.99, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.1626849010639404 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.92, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 0.5, range: [0.1, 5] },
    displaceAmount: { value: 0.1 },
    masker: { value: true },
    maskVal: { value: 1.09, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.08, range: [0, 2], _gsap: { id: 5 } },
    discard_threshold: { value: 0.49, range: [0, 1] },
    antialias_threshold: { value: 0.04, range: [0, 0.1] },
    noise_height: { value: 0.37, range: [0, 2] },
    noise_scale: { value: 19.85, range: [0, 100] },
  },
  gooey: true,
});
let tabels = document.querySelectorAll(".workout");
let headings = document.querySelectorAll(".heading");
let index = 0;
let isAnimating = false;
const imageAnimate = () => {
  if (!isAnimating) {
    isAnimating = true;

    gsap.to(tabels[index], {
      top: "-=100%",
      ease: Expo.easeInOut,
      duration: 1,
      onComplete: function () {
        gsap.set(this._targets[0], { top: "100%" });
      },
    });

    gsap.to(headings[index], {
      top: "-=100%",
      ease: Expo.easeInOut,
      duration: 1,
      onComplete: function () {
        gsap.set(this._targets[0], { top: "100%" });
      },
    });

    index = index === headings.length - 1 ? 0 : index + 1;

    gsap.to(tabels[index], {
      top: "-=100%",
      ease: Expo.easeInOut,
      duration: 1,
    });

    gsap.to(headings[index], {
      top: "-=100%",
      ease: Expo.easeInOut,
      duration: 1,
      onComplete: () => {
        isAnimating = false;
      },
    });
  } else {
    return;
  }
};
document.querySelector(".sect2").addEventListener("click", imageAnimate);
document.querySelector(".sect2").addEventListener("select", imageAnimate);

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
  menuBtn.addEventListener("click", () => {
    if (navLinks.style.opacity == "0") {
      gsap.to(navLinks, {
        top: "66%",
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to(navLinks, {
        top: "80%",
        opacity: 0,
        duration: 0.5,
      });
    }
  });
}
const mediaQueryMob = window.matchMedia("(max-width: 480px)");

if (mediaQueryMob.matches) {
  menuBtn.addEventListener("click", () => {
    if (navLinks.style.opacity == 0) {
      gsap.to(navLinks, {
        top: "66%",
        opacity: 1,
        duration: 0.5,
      });
    } else {
      gsap.to(navLinks, {
        top: "80%",
        opacity: 0,
        duration: 0.5,
      });
    }
  });
}