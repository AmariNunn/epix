import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experiences", label: "Experiences" },
    { href: "/shop", label: "Shop" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E0E]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-serif font-bold tracking-widest cursor-pointer text-[#F6F1EB] hover:text-[#C9A24D] transition-colors">
            EPIX ERA
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={cn(
                "relative text-sm tracking-widest uppercase cursor-pointer transition-colors duration-300",
                location === link.href ? "text-[#C9A24D]" : "text-[#F6F1EB]/60 hover:text-[#F6F1EB]"
              )}>
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-[#C9A24D]"
                  />
                )}
              </span>
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button could go here - hidden for minimalist desktop focus */}
      </div>
    </nav>
  );
}
