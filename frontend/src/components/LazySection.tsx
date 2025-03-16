import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { motion } from 'framer-motion';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function LazySection({ children, className }: LazySectionProps) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <motion.section
      ref={ref as unknown as React.RefObject<HTMLElement>    }
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={className}
    >

      {isVisible && children}
    </motion.section>
    );
} 