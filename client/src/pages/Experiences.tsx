import { motion } from "framer-motion";
import { ApplicationDialog } from "@/components/ApplicationDialog";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FancyButton } from "@/components/FancyButton";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    id: 1,
    title: "Proposal & Romance",
    subtitle: "Orchestrated Intimacy",
    description: "For moments that define a lifetime. We handle the logistics; you simply show up and fall in love all over again.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Solo Travel",
    subtitle: "Radical Autonomy",
    description: "A journey back to yourself. Curated itineraries for the woman traveling alone, but never lonely. Safety, luxury, and serendipity combined.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2921&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Lifestyle Reset",
    subtitle: "The Total Overhaul",
    description: "A 3-month immersion to redesign your environment, your habits, and your mindset. The ultimate investment in your future self.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2940&auto=format&fit=crop"
  }
];

export default function Experiences() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] pt-32 pb-20 relative">
      <AnimatedBackground />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-20"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Curated Experiences</h1>
          <p className="text-xl text-[#F6F1EB]/60 font-light max-w-2xl">
            We don't sell packages. We create memories that become part of your legacy. Select an experience to begin the conversation.
          </p>
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <div className="absolute inset-0 bg-[#6B0F1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <span className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4 block">{exp.subtitle}</span>
                <h2 className="font-serif text-4xl mb-6">{exp.title}</h2>
                <div className="w-16 h-px bg-white/20 mb-8" />
                <p className="text-[#F6F1EB]/70 text-lg leading-relaxed mb-8 font-light">
                  {exp.description}
                </p>
                <ApplicationDialog 
                  defaultInterest={exp.title}
                  trigger={
                    <Button variant="outline" className="border-[#F6F1EB]/20 text-[#F6F1EB] hover:bg-[#F6F1EB] hover:text-[#0E0E0E] px-8 py-6 rounded-none min-w-[180px]">
                      Inquire Now
                    </Button>
                  }
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
