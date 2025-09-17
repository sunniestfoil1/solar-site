import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1
  });

  return { ref, isInView };
};

// Variantes de animação predefinidas
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

export const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Rotation + Scale (para icons/botões)
export const rotateScale = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -180
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8
    }
  }
};