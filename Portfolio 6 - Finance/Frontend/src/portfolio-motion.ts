import { gsap } from 'gsap';
import Lenis from 'lenis';
import { animate } from 'motion/mini';

const previewOffset = 'translateY(8px) scale(.985)';
const previewEase = [.22, .75, .25, 1] as const;

function reveal(element: HTMLElement, done: () => void) {
  const tween = gsap.fromTo(element, { opacity: 0, y: 8 }, {
    opacity: 1,
    y: 0,
    duration: .26,
    ease: 'power3.out',
    onComplete: () => {
      element.style.removeProperty('opacity');
      element.style.removeProperty('transform');
      done();
    },
  });
  return { cancel: () => tween.revert() };
}

function preview(element: HTMLElement, opening: boolean) {
  return animate(element, opening ? {
    opacity: [0, 1],
    transform: [previewOffset, 'none'],
  } : {
    opacity: 0,
    transform: previewOffset,
  }, { duration: opening ? .22 : .16, ease: previewEase });
}

function scroll(top: number, duration: number, done: () => void) {
  const lenis = new Lenis({ smoothWheel: false, syncTouch: false, autoResize: false, autoRaf: false });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let active = true;
  const cancel = () => {
    if (!active) return;
    active = false;
    cancelAnimationFrame(frame);
    lenis.destroy();
  };
  const finish = () => {
    cancel();
    done();
  };
  const tick = (time: number) => {
    if (reduced.matches) {
      finish();
      return;
    }
    lenis.raf(time);
    if (active) frame = requestAnimationFrame(tick);
  };

  lenis.raf(performance.now());
  lenis.scrollTo(top, {
    duration: duration / 1000,
    easing: (progress) => progress * progress * (3 - 2 * progress),
    onComplete: finish,
  });
  if (active) frame = requestAnimationFrame(tick);
  return cancel;
}

export const portfolioMotion = { reveal, preview, scroll };

declare global {
  interface Window {
    tapidMotion?: typeof portfolioMotion;
  }
}
