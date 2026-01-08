import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const planes = [
  { id: 1, startY: "15%", duration: 8, delay: 0 },
  { id: 2, startY: "45%", duration: 10, delay: 3 },
  { id: 3, startY: "75%", duration: 7, delay: 6 },
];

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {planes.map((plane) => (
        <motion.div
          key={`plane-${plane.id}`}
          className="absolute text-[#C9A24D]/10"
          style={{ top: plane.startY }}
          initial={{ x: "-10%" }}
          animate={{ x: "110vw" }}
          transition={{
            duration: plane.duration,
            delay: plane.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Plane className="w-8 h-8 rotate-45" />
        </motion.div>
      ))}
    </div>
  );
}
