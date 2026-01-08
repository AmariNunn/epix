import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema, type InsertSubscriber } from "@shared/schema";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const { mutate, isPending } = useCreateSubscriber();
  
  const form = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" }
  });

  const onSubmit = (data: InsertSubscriber) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <h3 className="font-serif text-3xl md:text-4xl mb-6">Join the Inner Circle</h3>
          <p className="text-[#F6F1EB]/60 mb-8 max-w-md font-light">
            Receive curated insights on designing your next chapter. No spam, only essence.
          </p>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4 max-w-md">
            <Input 
              {...form.register("email")}
              placeholder="Your email address" 
              className="bg-transparent border-white/10 focus:border-[#C9A24D] text-[#F6F1EB] rounded-none h-12"
            />
            <Button 
              type="submit" 
              disabled={isPending}
              className="bg-[#C9A24D] text-[#0E0E0E] hover:bg-[#B08D3F] rounded-none h-12 px-8 font-medium"
            >
              {isPending ? "Joining..." : "Join"}
            </Button>
          </form>
          {form.formState.errors.email && (
            <p className="mt-2 text-red-400 text-sm">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-[#C9A24D] mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-[#F6F1EB]/60">
                <li><Link href="/about" className="hover:text-[#F6F1EB] cursor-pointer transition-colors" data-testid="link-footer-about">About</Link></li>
                <li><Link href="/experiences" className="hover:text-[#F6F1EB] cursor-pointer transition-colors" data-testid="link-footer-experiences">Experiences</Link></li>
                <li><Link href="/shop" className="hover:text-[#F6F1EB] cursor-pointer transition-colors" data-testid="link-footer-shop">Shop</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-[#C9A24D] mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-[#F6F1EB]/60">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F6F1EB] cursor-pointer transition-colors" data-testid="link-footer-instagram">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F6F1EB] cursor-pointer transition-colors" data-testid="link-footer-linkedin">LinkedIn</a></li>
                <li><a href="mailto:hello@epixera.com" className="hover:text-[#F6F1EB] cursor-pointer transition-colors" data-testid="link-footer-email">Email</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-xs text-[#F6F1EB]/30 font-light">
            © {new Date().getFullYear()} The Epix Era™. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
