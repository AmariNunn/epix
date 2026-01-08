import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import type { InsertApplication } from "@shared/schema";

export function useCreateApplication() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertApplication) => {
      const validated = api.applications.create.input.parse(data);
      const res = await fetch(api.applications.create.path, {
        method: api.applications.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
           const error = await res.json();
           try {
             const parsedError = api.applications.create.responses[400].parse(error);
             throw new Error(parsedError.message);
           } catch (e) {
             throw new Error(error.message || "Invalid application data");
           }
        }
        throw new Error('Failed to submit application');
      }
      return api.applications.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Application Received",
        description: "We will review your submission shortly.",
        className: "bg-[#0E0E0E] border-[#C9A24D] text-[#F6F1EB]"
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
