import { motion } from 'framer-motion';

export default function LoadingSVG() {
  const svgVariants = {
    hidden: { rotate: -360 },
    visible: {
      rotate: 0,
      transition: { duration: 3 },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathlenght: 0,
    },
    visible: {
      opacity: 1,
      pathlenght: 1,
      transition: {
        duration: 3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="117.446"
      height="110.656"
      viewBox="0 0 117.446 110.656"
      variants={svgVariants}
      initial="hidden"
      animate="visible">
      <motion.path
        d="M2620.571,909.514c2.05,5.08,5.192-7.653,5.667-17.472s-.486-22.121,2.972-21.2-1.992,34.129,3.691,41.717,16.175-13.209,19.042-11.365-13.445,18.049-6.689,20.34,23.446,2.339,23.446,4.978-28.028-3.414-23.446,4.591,43.557,25.058,41.772,27.43-45.666-24.112-50.332-22.538,14.647,41.461,11.825,43.335-9.6-32.911-17.911-36.129-12.477,23.259-15.335,23.259,6.564-25.989,3.182-24.267-27.041,26.069-29,24.267,25.347-26.174,23.313-28.75-16.142,2.6-17.892-1.716,20.768-.314,14.965-6.453-39.215-15.463-38.178-18.1,31.559,11.759,38.178,10.094-12.412-14.428-11.7-16.754,15.99,11.6,17.138,6.66-4.46-24.008-2.509-24.008S2618.521,904.433,2620.571,909.514Z"
        transform="translate(-2570.653 -869.783)"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />
    </motion.svg>
  );
}
