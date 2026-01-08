import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FancyButton } from "@/components/FancyButton";

export default function Shop() {
  const { toast } = useToast();

  const handlePurchase = () => {
    toast({
      title: "Redirecting to checkout...",
      description: "This is a demo action.",
      className: "bg-[#0E0E0E] border-[#C9A24D] text-[#F6F1EB]"
    });
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] pt-32 pb-20 relative">
      <AnimatedBackground />
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#050505] p-12 border border-white/5 relative"
          >
             <div className="absolute top-0 right-0 bg-[#C9A24D] text-[#0E0E0E] text-xs font-bold px-4 py-2 uppercase tracking-widest">
               Best Seller
             </div>
             
             <h1 className="font-serif text-4xl md:text-5xl mb-4">The Epix Era Reset™</h1>
             <p className="text-[#C9A24D] text-2xl font-light mb-8">$97.00</p>
             
             <p className="text-[#F6F1EB]/70 mb-8 leading-relaxed">
               A comprehensive digital guide and workbook designed to help you deconstruct your current obligations and reconstruct a life of purpose, luxury, and alignment. This is not a PDF; it's an intervention.
             </p>

             <ul className="space-y-4 mb-12">
               {[
                 "30-Day Digital Workbook",
                 "Audio Guidance Modules",
                 "The 'Saying No' Template Library",
                 "Vision Casting Framework"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-[#F6F1EB]/80 font-light">
                   <Check className="w-4 h-4 text-[#C9A24D]" /> {item}
                 </li>
               ))}
             </ul>

             <FancyButton 
              onClick={handlePurchase}
              variant="primary"
              showArrow
              className="w-full"
              data-testid="button-purchase"
            >
               Purchase Now
             </FancyButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4">Why you need this</span>
            <h2 className="font-serif text-3xl mb-6">Stop Waiting for Permission</h2>
            <p className="text-[#F6F1EB]/70 leading-relaxed mb-6">
              Most women wait for a crisis to change their lives. A breakup, a burnout, a health scare. 
            </p>
            <p className="text-[#F6F1EB]/70 leading-relaxed mb-6">
              The Reset is for the woman who is smart enough to change <i>before</i> she breaks. It is a proactive reclaiming of your time and energy.
            </p>
            
            <div className="mt-8 p-6 bg-white/5 italic text-[#F6F1EB]/80 border-l-2 border-[#C9A24D]">
              "This workbook completely changed how I view my weekends. I reclaimed 15 hours a week just by using the 'No' templates." — Sarah J.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
