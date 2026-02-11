import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { ApplicationDialog } from "@/components/ApplicationDialog";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FancyButton } from "@/components/FancyButton";
import heroImage from "@assets/IMG_9304_1770812530437.jpeg";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Epix Era - Playing Cards" 
            className="w-full h-full object-cover object-top"
            data-testid="img-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/70 via-[#0E0E0E]/40 to-[#0E0E0E] z-10" />
          <div className="absolute inset-0 bg-[#0E0E0E]/30 z-5" />
        </div>

        <div className="container relative z-20 px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeInUp} className="block text-[#C9A24D] tracking-[0.3em] text-sm uppercase mb-6">
              Welcome to The Epix Era
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6 text-white">
              For women entering <br/>
              <span className="italic text-[#F6F1EB]/90">their next chapter.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl text-[#F6F1EB]/90 max-w-2xl mx-auto font-serif italic mb-4">
              Not a pivot. A masterpiece.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[#C9A24D] max-w-2xl mx-auto font-light mb-12 tracking-wide">
              Where travel meets wholeness
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/experiences">
                <FancyButton variant="primary" showArrow data-testid="button-enter-era">
                  Enter Your Epix Era
                </FancyButton>
              </Link>
              <ApplicationDialog 
                trigger={
                  <FancyButton variant="primary" data-testid="button-book-experience">
                    Book an Experience
                  </FancyButton>
                }
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Shift */}
      <section className="py-32 bg-[#0E0E0E] relative">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8">You're not lost. <br/>You're between chapters.</h2>
            <div className="w-24 h-px bg-[#C9A24D] mx-auto mb-8" />
            <p className="text-xl leading-relaxed text-[#F6F1EB]/80 font-light">
              The old playbook doesn't work anymore. You've achieved the success, checked the boxes, and yet there's a quiet whisper asking for <i>more</i>. Not more stuff. More depth. More feeling. More <span className="text-[#C9A24D]">you</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Do */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="aspect-[3/4] overflow-hidden bg-white/5 relative group">
              <img 
                src="https://images.unsplash.com/photo-1493606274436-5388c42289eb?q=80&w=2600&auto=format&fit=crop" 
                alt="Minimalist Architecture" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-[#0E0E0E]/20" />
            </div>
          </motion.div>
          
          <div className="order-1 md:order-2">
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
                <h2 className="font-serif text-4xl md:text-5xl mb-6">I don't coach. <br/>I don't hustle. <br/><span className="text-[#6B0F1A]">I curate.</span></h2>
                <p className="text-[#F6F1EB]/70 mb-8 leading-relaxed">
                  We strip away the obligations that no longer serve you to reveal the masterpiece underneath. This isn't about fixing you. It's about revealing who you've always been waiting to become.
                </p>
                <Link href="/about">
                  <span className="inline-flex items-center text-[#C9A24D] uppercase tracking-widest text-sm hover:text-white transition-colors cursor-pointer group">
                    Read the Manifest <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
             </motion.div>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-32 bg-[#0E0E0E]">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">The Epix Era Reset</h2>
            <p className="text-[#F6F1EB]/60">A foundational shift for the modern woman.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Clarity on your next chapter",
              "Shedding obligation & guilt",
              "Designing a life of luxury & ease",
              "Curated personal brand alignment",
              "Exclusive network access",
              "Your legacy defined"
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 border border-white/5 hover:border-[#C9A24D]/50 transition-colors bg-[#050505]"
              >
                <div className="w-8 h-8 rounded-full bg-[#C9A24D]/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#C9A24D]" />
                </div>
                <span className="text-[#F6F1EB]/90 font-light">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/shop">
              <FancyButton variant="primary" showArrow data-testid="button-start-reset">
                Start The Reset — $97
              </FancyButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
