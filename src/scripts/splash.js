import gsap from "gsap";
import { SplitText } from "gsap/all";
gsap.registerPlugin(SplitText);

window.addEventListener("DOMContentLoaded", () => {
  //   document.querySelector(".main-content").classList.add("hidden");
  document.querySelector(".splash-text").classList.add("invisible");
  // document.querySelector(".main-content").classList.add("overflow-hidden");
  document.body.classList.add("overflow-hidden");

  gsap.set(".main-content", { opacity: 0 });

  let split = SplitText.create(".splash-text", { type: "chars" });
  setTimeout(() => {
    document.querySelector(".splash-text").classList.remove("invisible");
    gsap.from(split.chars, {
      opacity: 0,
      delay: 0.3,
      duration: 1,
      filter: "blur(15px)",
      stagger: 0.4,
      ease: "power3",
    });
  }, 500);

  //   gsap.to(split.chars, {
  //     opacity: 1,
  //     filter: "blur(10px)",
  //     duration: 0.5,
  //     stagger
  //   })

  setTimeout(() => {
    gsap.to(".splash-text", {
      opacity: 0,
      filter: "blur(15px)",
      delay: 0.3,
      duration: 0.9,
      ease: "power3",
      onComplete: () => {
        const tl = gsap.timeline({
          defaults: { duration: 0.8, ease: "power3" },
        });

        setTimeout(() => {
          // document.querySelector(".main-content").classList.remove("overflow-hidden");
          document.body.classList.remove("overflow-hidden");

          tl.to(".main-content", {
            opacity: 1,
            duration: 0.8,
            stagger: 0.5,
            ease: "power3",
          });

          //   gsap.to(".main-content", {
          //     opacity: 1,
          //     duration: 0.8,
          //     stagger: 0.5,
          //     ease: "power3",
          //   });
        }, 1500);
        gsap.to("#splash", {
          opacity: 0,
          y: "-100%",
          duration: 1.5,
          delay: 0.3,
          pointerEvents: "none",
          onComplete: () => {},
        });
      },
    });
  }, 5500);
});
