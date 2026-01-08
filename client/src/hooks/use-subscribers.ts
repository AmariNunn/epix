import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import type { InsertSubscriber } from "@shared/schema";

export function useCreateSubscriber() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const validated = api.subscribers.create.input.parse(data);
      const res = await fetch(api.subscribers.create.path, {
        method: api.subscribers.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400 || res.status === 409) {
          const error = await res.json();
          // Try to match the schema, but fallback gracefully if needed
          try {
            const parsedError = api.subscribers.create.responses[res.status === 409 ? 409 : 400].parse(error);
            throw new Error(parsedError.message);
          } catch (e) {
             throw new Error(error.message || "Failed to subscribe");
          }
        }
        throw new Error('Failed to join waitlist');
      }
      
      return api.subscribers.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the inner circle.",
        description: "You have been added to the waitlist.",
        variant: "default", 
        className: "bg-[#0E0E0E] border-[#C9A24D] text-[#F6F1EB]"
      });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
