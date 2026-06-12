import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initProjectsAnimation = ({
  section,
  overview,
  showcase,
  track,
}) => {
  if (!section || !overview || !showcase || !track) return;

  if (window.innerWidth < 768) return;

  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.trigger === section) {
      trigger.kill();
    }
  });

  const updateTransformOrigin = () => {
    const firstCard = overview.querySelector(".project-card");
    if (!firstCard) return;
    const rect = firstCard.getBoundingClientRect();
    gsap.set(showcase, {
      transformOrigin: `${rect.left + rect.width / 2}px ${
        rect.top + rect.height / 2
      }px`,
    });
  };

  updateTransformOrigin();
  ScrollTrigger.addEventListener("refreshInit", updateTransformOrigin);

  gsap.set(showcase, {
    autoAlpha: 0,
    scale: 0.2,
    pointerEvents: "none",
  });

  gsap.set(track, { x: 0 });

  const horizontalDistance = track.scrollWidth - window.innerWidth;
  const transitionDistance = window.innerHeight * 0.5;

  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${transitionDistance + horizontalDistance}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  tl.to(overview, {
    x: window.innerWidth,
    autoAlpha: 0,
    duration: 0.5,
    ease: "power2.inOut",
  });

  tl.to(
    showcase,
    {
      autoAlpha: 1,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.35"
  );

  tl.to({}, { duration: 0.3 });

  tl.to(track, {
    x: () => -horizontalDistance,
    duration: 1.2,
  });

  return () => {
    ScrollTrigger.removeEventListener("refreshInit", updateTransformOrigin);
    tl.scrollTrigger?.kill();
    tl.kill();
  };
};
