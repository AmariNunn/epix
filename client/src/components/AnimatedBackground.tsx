import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import logoImage from "@assets/88A518D3-7625-49B7-98A2-1C5F1B5906B1_1767910408682.png";

const planes = [
  { id: 1, startY: "15%", duration: 8, delay: 0 },
  { id: 2, startY: "45%", duration: 10, delay: 3 },
  { id: 3, startY: "75%", duration: 7, delay: 6 },
];

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url(${logoImage})`,
          backgroundSize: "400px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
      
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
