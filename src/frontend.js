document.querySelectorAll(".about-box").forEach(box => {
  box.addEventListener("mouseenter", () => {
    gsap.to(box, {y: -6, scale: 1.02, duration: 0.3, ease: "power2.out"});
  });
  box.addEventListener("mouseleave", () => {
    gsap.to(box, {y: 0, scale: 1, duration: 0.3, ease: "power2.out"})
  });
}); 

const toggleBtn = document.querySelector("#theme-toggle");
const photo = document.querySelector(".photo");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  
  const isDark = document.body.classList.contains("dark-theme")

  photo.src = isDark
  ? "/src/assets-img/profile-dark.jpg"
  : "/src/assets-img/profile-light.jpg";
  toggleBtn.textContent = isDark ? "☀️Change Theme":"🌙 Change Theme"
})
