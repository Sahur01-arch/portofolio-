import "./style.css";
import "./frontend.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

// Inisialisasi AOS untuk animasi scroll
AOS.init({
  duration: 800,
  once: true,
});

// Animasi hero saat halaman load (GSAP)
const heroTimeline = gsap.timeline();

heroTimeline
  .from(".hero-card .photo", { opacity: 0, y: 30, duration: 0.8 })
  .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
  .from(".hero-card p", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
  .from(".btn-primary", { opacity: 0, scale: 0.8, duration: 0.5 }, "-=0.3");
