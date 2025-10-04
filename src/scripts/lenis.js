import Lenis from "lenis";

const lenis = new Lenis({
	autoRaf: true,
})

// lenis.on('scroll', (e) => {
//     console.log(e)
// })

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
console.log(requestAnimationFrame)