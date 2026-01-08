import { motion } from "framer-motion";
import { Plane, Globe } from "lucide-react";

const planes = [
  { id: 1, startY: "15%", duration: 25, delay: 0 },
  { id: 2, startY: "45%", duration: 30, delay: 8 },
  { id: 3, startY: "75%", duration: 22, delay: 15 },
];

const globes = [
  { id: 1, top: "20%", left: "10%", size: 24, duration: 12 },
  { id: 2, top: "60%", left: "85%", size: 20, duration: 15 },
  { id: 3, top: "80%", left: "25%", size: 16, duration: 10 },
  { id: 4, top: "35%", left: "90%", size: 22, duration: 18 },
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

      {globes.map((globe) => (
        <motion.div
          key={`globe-${globe.id}`}
          className="absolute text-[#C9A24D]/8"
          style={{ top: globe.top, left: globe.left }}
          animate={{ rotate: 360 }}
          transition={{
            duration: globe.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Globe style={{ width: globe.size, height: globe.size }} />
        </motion.div>
      ))}
    </div>
  );
}
