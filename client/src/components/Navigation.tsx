import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experiences", label: "Experiences" },
  { href: "/shop", label: "Shop" },
];

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E0E]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-serif font-bold tracking-widest cursor-pointer text-[#F6F1EB] hover:text-[#C9A24D] transition-colors">
            EPIX ERA
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
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
        
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              size="icon"
              variant="ghost"
              data-testid="button-mobile-menu"
              className="text-[#F6F1EB] hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs bg-[#0E0E0E] border-l border-[#C9A24D]/20"
          >
            <SheetHeader className="border-b border-[#C9A24D]/20 pb-6">
              <SheetTitle className="text-[#F6F1EB] font-serif tracking-widest text-left">
                EPIX ERA
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 mt-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link href={link.href}>
                    <span
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block py-4 px-2 text-lg tracking-widest uppercase cursor-pointer transition-all duration-300 border-l-2",
                        location === link.href
                          ? "text-[#C9A24D] border-[#C9A24D] pl-4"
                          : "text-[#F6F1EB]/60 border-transparent hover:text-[#F6F1EB] hover:border-[#F6F1EB]/30 hover:pl-4"
                      )}
                      data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-8 left-6 right-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#C9A24D]/30 to-transparent mb-6" />
              <p className="text-[#F6F1EB]/40 text-xs tracking-widest text-center">
                Design boldly. Live intentionally.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
