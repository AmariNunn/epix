import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FancyButton } from "@/components/FancyButton";
import { useState } from "react";

import hoodieCreamFront from "@assets/99AB4F80-7D0A-4CCE-9ECE-4C271D6C4BEA_1767910525812.png";
import hoodieCreamBack from "@assets/A6A4BBBD-7831-425C-9B07-F8A21F66F5FC_1767910525813.png";
import hoodieBlackFront from "@assets/394D7934-E712-4729-B1FA-B8C9C1D20EF6_1767910525813.png";
import hoodieBlackBack from "@assets/F06A2444-8B37-4B30-A7F3-728D67CFE5DC_1767910525814.png";

const products = [
  {
    id: 1,
    name: "The Sovereign Hoodie",
    subtitle: "Champagne Edition",
    price: 128,
    description: "Premium heavyweight cotton blend. Designed for the woman who moves through the world with intention.",
    frontImage: hoodieCreamFront,
    backImage: hoodieCreamBack,
    features: ["100% Premium Cotton", "Oversized Fit", "Gold Embroidered Logo", "Signature Back Print"]
  },
  {
    id: 2,
    name: "The Obsidian Hoodie",
    subtitle: "Midnight Edition",
    price: 128,
    description: "Bold. Unapologetic. For nights that turn into stories and mornings that feel like new beginnings.",
    frontImage: hoodieBlackFront,
    backImage: hoodieBlackBack,
    features: ["100% Premium Cotton", "Oversized Fit", "Gold Embroidered Logo", "Crimson Back Print"]
  }
];

export default function Shop() {
  const { toast } = useToast();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const handlePurchase = (productName: string) => {
    toast({
      title: "Added to cart",
      description: `${productName} - Redirecting to checkout...`,
      className: "bg-[#0E0E0E] border-[#C9A24D] text-[#F6F1EB]"
    });
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] pt-32 pb-20 relative">
      <AnimatedBackground />
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4 block">The Collection</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Epix Era Essentials</h1>
          <p className="text-[#F6F1EB]/60 max-w-xl mx-auto">Curated pieces for women who design their lives with intention.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#050505] border border-white/5 overflow-hidden group"
            >
              <div 
                className="relative aspect-square overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <motion.img
                  src={product.frontImage}
                  alt={`${product.name} Front`}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ opacity: hoveredProduct === product.id ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img
                  src={product.backImage}
                  alt={`${product.name} Back`}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-4 left-4 text-xs text-[#F6F1EB]/40 uppercase tracking-widest">
                  Hover to see back
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-[#C9A24D] text-sm uppercase tracking-widest">{product.subtitle}</span>
                <h3 className="font-serif text-2xl mt-2 mb-2">{product.name}</h3>
                <p className="text-[#C9A24D] text-xl font-light mb-4">${product.price}.00</p>
                <p className="text-[#F6F1EB]/60 text-sm leading-relaxed mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#F6F1EB]/70 text-sm">
                      <Check className="w-3 h-3 text-[#C9A24D]" /> {feature}
                    </li>
                  ))}
                </ul>

                <FancyButton
                  variant="primary"
                  onClick={() => handlePurchase(product.name)}
                  className="w-full"
                  data-testid={`button-buy-${product.id}`}
                >
                  Add to Cart
                </FancyButton>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#050505] border border-white/5 p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#C9A24D] text-[#0E0E0E] text-xs font-bold px-4 py-2 uppercase tracking-widest mb-6">
                Digital Product
              </div>
              <h2 className="font-serif text-4xl mb-4">The Epix Era Reset</h2>
              <p className="text-[#C9A24D] text-2xl font-light mb-6">$97.00</p>
              <p className="text-[#F6F1EB]/70 mb-8 leading-relaxed">
                A comprehensive digital guide and workbook designed to help you deconstruct your current obligations and reconstruct a life of purpose, luxury, and alignment.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "30-Day Digital Workbook",
                  "Audio Guidance Modules",
                  "The 'Saying No' Template Library",
                  "Vision Casting Framework"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#F6F1EB]/80">
                    <Check className="w-4 h-4 text-[#C9A24D]" /> {item}
                  </li>
                ))}
              </ul>
              <FancyButton
                variant="gold"
                showArrow
                onClick={() => handlePurchase("The Epix Era Reset")}
                data-testid="button-purchase-reset"
              >
                Purchase Now
              </FancyButton>
            </div>
            
            <div className="hidden lg:block">
              <div className="p-8 bg-white/5 italic text-[#F6F1EB]/80 border-l-2 border-[#C9A24D]">
                "This workbook completely changed how I view my weekends. I reclaimed 15 hours a week just by using the 'No' templates."
                <span className="block mt-4 text-sm text-[#F6F1EB]/50 not-italic">— Sarah J.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
