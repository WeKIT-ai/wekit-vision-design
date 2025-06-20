
// Animation utility classes and configurations
export const animations = {
  // Hover animations
  hover: {
    scale: 'hover:scale-105 transition-transform duration-300 ease-out',
    lift: 'hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-out',
    glow: 'hover:shadow-lg hover:shadow-purple-500/25 transition-shadow duration-300',
    bounce: 'hover:animate-bounce',
    rotate: 'hover:rotate-3 transition-transform duration-300',
    pulse: 'hover:animate-pulse',
  },
  
  // Entrance animations
  entrance: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-[slideUp_0.6s_ease-out]',
    slideLeft: 'animate-[slideLeft_0.6s_ease-out]',
    slideRight: 'animate-[slideRight_0.6s_ease-out]',
    zoomIn: 'animate-[zoomIn_0.5s_ease-out]',
    flipIn: 'animate-[flipIn_0.8s_ease-out]',
  },
  
  // Loading animations
  loading: {
    spin: 'animate-spin',
    ping: 'animate-ping',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
  },
  
  // Stagger delays for sequential animations
  stagger: {
    delay100: 'animation-delay-100',
    delay200: 'animation-delay-200',
    delay300: 'animation-delay-300',
    delay400: 'animation-delay-400',
    delay500: 'animation-delay-500',
  }
};

// Custom animation keyframes to be added to Tailwind config
export const customKeyframes = {
  slideUp: {
    '0%': { transform: 'translateY(50px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' }
  },
  slideLeft: {
    '0%': { transform: 'translateX(-50px)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' }
  },
  slideRight: {
    '0%': { transform: 'translateX(50px)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' }
  },
  zoomIn: {
    '0%': { transform: 'scale(0.8)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' }
  },
  flipIn: {
    '0%': { transform: 'rotateY(-90deg)', opacity: '0' },
    '100%': { transform: 'rotateY(0)', opacity: '1' }
  },
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' }
  },
  wiggle: {
    '0%, 100%': { transform: 'rotate(-3deg)' },
    '50%': { transform: 'rotate(3deg)' }
  }
};
