gsap.registerPlugin(ScrollTrigger);

/* LOADER */
gsap.to(".loader", {
  y: "-100%",
  duration: 1.2,
  ease: "power4.inOut",
  delay: 1,
});

/* NAV */
window.addEventListener("scroll", () => {
  document
    .querySelector(".nav")
    .classList.toggle("scrolled", window.scrollY > 50);
});

/* CURSOR */
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15,
  });
});

/* TEXT REVEAL */
const text = document.querySelector(".reveal-text");
const letters = text.innerText.split("");
text.innerText = "";

letters.forEach((l) => {
  const span = document.createElement("span");
  span.innerText = l === " " ? "\u00A0" : l;
  text.appendChild(span);
});

gsap.to(".reveal-text span", {
  opacity: 1,
  y: 0,
  stagger: 0.04,
  duration: 0.6,
  delay: 1.4,
});

/* HERO IMAGE */
gsap.from(".hero-img", {
  scale: 0.6,
  opacity: 0,
  duration: 1,
  delay: 1.6,
});

/* SECTIONS */
gsap.utils.toArray(".section").forEach((sec) => {
  gsap.from(sec, {
    opacity: 0,
    y: 120,
    duration: 1,
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    },
  });
});

/* SKILLS */
gsap.from(".skills span", {
  opacity: 0,
  y: 40,
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 70%",
  },
});

/* PROJECTS */
gsap.fromTo(".card",
  { opacity: 0, y: 80 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#projects",
      start: "top 75%",
    }
  }
);
/* PARALLAX */
gsap.to(".parallax", {
  backgroundPosition: "center 80%",
  scrollTrigger: {
    trigger: ".parallax",
    scrub: true,
  },
});

const tilt = document.querySelector(".tilt");

tilt.addEventListener("mousemove", (e) => {
  const rect = tilt.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = -(y - rect.height / 2) / 15;
  const rotateY = (x - rect.width / 2) / 15;

  gsap.to(tilt, {
    rotateX,
    rotateY,
    duration: 0.3,
  });
});

tilt.addEventListener("mouseleave", () => {
  gsap.to(tilt, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.6,
    ease: "power3.out",
  });
});

gsap.to(".hero-image-wrapper", {
  y: -40,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    scrub: true,
  },
});
