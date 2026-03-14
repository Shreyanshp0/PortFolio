export const sharpEase = [0.2, 0.9, 0.2, 1]

export const sectionReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.22, delay, ease: sharpEase },
})

export const staggerGrid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.02,
    },
  },
}

export const staggerItem = (rotate = 0) => ({
  hidden: { opacity: 0, y: 40, rotate },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.22,
      ease: sharpEase,
    },
  },
})

export const cardLift = {
  whileHover: {
    x: -4,
    y: -4,
    boxShadow: '8px 8px 0 var(--shadow-color)',
    transition: { duration: 0.16, ease: sharpEase },
  },
  whileTap: {
    x: 0,
    y: 0,
    transition: { duration: 0.12, ease: sharpEase },
  },
}

export const mechanicalButton = {
  whileHover: {
    x: -2,
    y: -2,
    boxShadow: '7px 7px 0 var(--shadow-color)',
    transition: { duration: 0.15, ease: sharpEase },
  },
  whileTap: {
    x: 2,
    y: 2,
    boxShadow: '0px 0px 0 var(--shadow-color)',
    transition: { duration: 0.1, ease: sharpEase },
  },
}

export const tagPop = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.15, delay, ease: sharpEase },
})
