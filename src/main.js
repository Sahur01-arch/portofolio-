// Import css
import '../assets/css/style.css'; 

// import javascript
import '../javascript/backend.js';
import '../javascript/frontend.js';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);
AOS.init();


window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('*').forEach(el => {
      if (el.scrollWidth > document.documentElement.clientWidth) {
        el.style.outline = '3px solid red';
        console.log('OVERFLOW:', el.tagName, el.className, el.scrollWidth + 'px');
      }
    });
  }, 500); // delay biar AOS/GSAP animasi selesai render duluan
});
