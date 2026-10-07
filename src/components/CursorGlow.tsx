import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export const CursorGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, { damping: 28, stiffness: 260, mass: 0.25 });
  const y = useSpring(cursorY, { damping: 28, stiffness: 260, mass: 0.25 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveGlow = (event: PointerEvent) => {
      cursorX.set(event.clientX - 96);
      cursorY.set(event.clientY - 96);
      setIsVisible(true);
    };
    const hideGlow = () => setIsVisible(false);

    window.addEventListener("pointermove", moveGlow);
    document.documentElement.addEventListener("pointerleave", hideGlow);

    return () => {
      window.removeEventListener("pointermove", moveGlow);
      document.documentElement.removeEventListener("pointerleave", hideGlow);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed top-0 left-0 z-50 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl"
    />
  );
};
