import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initGSAP() {
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  // global defaults
  gsap.defaults({ duration: 1.1, ease: "power3.out" });

  // Hero entrance timeline
  const heroTl = gsap.timeline();

  gsap.set(".anim-reveal", { y: 30, opacity: 0, willChange: "transform,opacity" });
  gsap.set(".hero-bg-blob", { scale: 1, opacity: 0.08 });

  heroTl
    .to(".hero-bg-blob", { opacity: 0.18, scale: 1.05, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" }, 0)
    .to(".hero-img", { x: 0, opacity: 1, y: 0, duration: 1.2 }, 0.2)
    .to(".hero-heading", { y: 0, opacity: 1, duration: 1.1 }, 0.4)
    .to(".hero-subtext", { y: 0, opacity: 1, duration: 1.1 }, 0.6)
    .to(".hero-cta", { y: 0, opacity: 1, duration: 1.1 }, 0.8);

  // Scroll reveal for generic elements
  ScrollTrigger.batch(".anim-reveal", {
    start: "top 85%",
    onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, stagger: 0.12, overwrite: true }),
    onLeaveBack: (batch) => gsap.to(batch, { y: 30, opacity: 0, stagger: 0.08, overwrite: true }),
  });

  // subtle parallax on scroll for hero image
  ScrollTrigger.create({
    trigger: "#home",
    start: "top top",
    end: "bottom top",
    scrub: 0.6,
    onUpdate: (self) => {
      const v = self.progress;
      gsap.to(".hero-img", { y: v * 40, overwrite: true, ease: "none" });
    },
  });
}
