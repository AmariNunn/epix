import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertApplicationSchema, type InsertApplication } from "@shared/schema";
import { useCreateApplication } from "@/hooks/use-applications";
import { useState } from "react";

interface ApplicationDialogProps {
  trigger?: React.ReactNode;
  defaultInterest?: string;
}

export function ApplicationDialog({ trigger, defaultInterest = "General Inquiry" }: ApplicationDialogProps) {
  const [open, setOpen] = useState(false);
  const { mutate, isPending } = useCreateApplication();

  const form = useForm<InsertApplication>({
    resolver: zodResolver(insertApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: defaultInterest,
      message: ""
    }
  });

  const onSubmit = (data: InsertApplication) => {
    mutate(data, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">Apply Now</Button>}
      </DialogTrigger>
      <DialogContent className="bg-[#0E0E0E] border-[#C9A24D]/20 text-[#F6F1EB] max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#C9A24D]">Application Request</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-[#F6F1EB]/60">Full Name</label>
            <Input 
              {...form.register("name")}
              className="bg-white/5 border-white/10 focus:border-[#C9A24D]"
            />
            {form.formState.errors.name && (
              <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-[#F6F1EB]/60">Email Address</label>
            <Input 
              {...form.register("email")}
              className="bg-white/5 border-white/10 focus:border-[#C9A24D]"
            />
            {form.formState.errors.email && (
              <p className="text-red-400 text-xs">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-[#F6F1EB]/60">Interest</label>
            <Input 
              {...form.register("interest")}
              className="bg-white/5 border-white/10 focus:border-[#C9A24D]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider text-[#F6F1EB]/60">Your Story (Brief)</label>
            <Textarea 
              {...form.register("message")}
              className="bg-white/5 border-white/10 focus:border-[#C9A24D] min-h-[100px]"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-none h-12 mt-4"
            data-testid="button-submit-application"
          >
            {isPending ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
