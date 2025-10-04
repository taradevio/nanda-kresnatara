import gsap from "gsap";

gsap.set(".mouse", { xPercent: -50, yPercent: -50 });
let xTo = gsap.quickTo(".mouse", "x", { duration: 0.3, ease: "power1" });
let yTo = gsap.quickTo(".mouse", "y", { duration: 0.3, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
});
