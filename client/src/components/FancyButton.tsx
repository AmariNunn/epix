import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface FancyButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "gold" | "red";
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
  "data-testid"?: string;
}

export function FancyButton({
  children,
  variant = "primary",
  className,
  onClick,
  showArrow = false,
  "data-testid": testId,
}: FancyButtonProps) {
  const baseStyles = "relative overflow-hidden px-8 py-4 text-lg font-medium tracking-wide uppercase transition-all duration-500 group cursor-pointer inline-flex items-center justify-center gap-3 min-w-[200px]";

  const variants = {
    primary: "bg-[#DC2626] text-white border-2 border-[#DC2626]",
    outline: "bg-transparent text-[#C9A24D] border-2 border-[#C9A24D]",
    gold: "bg-[#C9A24D] text-[#0E0E0E] border-2 border-[#C9A24D]",
    red: "bg-[#DC2626] text-white border-2 border-[#DC2626]",
  };

  const hoverVariants = {
    primary: "hover:bg-[#B91C1C] hover:border-[#B91C1C]",
    outline: "hover:bg-[#C9A24D] hover:text-[#0E0E0E]",
    gold: "hover:bg-transparent hover:text-[#C9A24D]",
    red: "hover:bg-[#B91C1C] hover:border-[#B91C1C]",
  };

  return (
    <motion.button
      onClick={onClick}
      data-testid={testId}
      className={cn(baseStyles, variants[variant], hoverVariants[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        initial={false}
        whileHover={{ translateX: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {showArrow && (
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        )}
      </span>

      <motion.span
        className="absolute bottom-0 left-0 h-[2px] bg-current"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
