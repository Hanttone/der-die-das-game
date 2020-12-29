export const pageAnimations = {
  initial: {
    opacity: 0,
    x: '100vw',
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '-100vw',
    scale: 1.2,
  },
};

export const pageTransition = {
  type: 'spring',
  ease: 'easeInOut',
  stiffness: 300,
  damping: 25,
  duration: '0.15',
};
