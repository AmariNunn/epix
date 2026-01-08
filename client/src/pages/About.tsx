import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] pt-32 pb-20">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#C9A24D] uppercase tracking-widest text-sm font-medium mb-4 block">The Philosophy</span>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-12">
            I design experiences—<br/>
            <span className="text-[#F6F1EB]/50">not lives that feel like obligations.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            {/* Unsplash abstract portrait */}
            <div className="aspect-[3/4] bg-white/5 relative overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-80"
              />
            </div>
          </div>
          
          <div className="md:col-span-7 space-y-8 text-lg font-light leading-relaxed text-[#F6F1EB]/80">
            <p>
              For years, I followed the script. I built the career, I nurtured the relationships, I maintained the image. But beneath the polished surface, I was drowning in "shoulds."
            </p>
            <p>
              I realized that true luxury isn't about what you own—it's about how you experience your time. It's about autonomy. It's about the audacity to say no to the good so you can say yes to the <span className="text-[#C9A24D] italic">epix</span>.
            </p>
            <p>
              My work is dedicated to the woman who is ready to stop performing and start living. We don't just fix your schedule; we redesign your entire relationship with existence.
            </p>
            
            <div className="pt-8 border-t border-white/10">
              <h3 className="font-serif text-2xl text-white mb-2">Join me in the arena.</h3>
              <p className="text-sm text-[#F6F1EB]/60">Founder, The Epix Era™</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
