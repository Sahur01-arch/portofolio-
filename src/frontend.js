document.querySelectorAll(".about-box").forEach(box => {
  box.addEventListener("mouseenter", () => {
    gsap.to(box, {y: -6, scale: 1.02, duration: 0.3, ease: "power2.out"});
  });
  box.addEventListener("mouseleave", () => {
    gsap.to(box, {y: 0, scale: 1, duration: 0.3, ease: "power2.out"})
  });
}); 
