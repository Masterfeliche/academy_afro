
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function HoverLift({ children, className }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
