
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { whitePaperSchema } from '@/lib/validation';
import { syncToZohoCRM } from '@/utils/zohoSync';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
}

interface UseWhitePaperFormReturn {
  isSubmitting: boolean;
  submitForm: (data: FormData) => Promise<void>;
}

export const useWhitePaperForm = (): UseWhitePaperFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (data: FormData): Promise<void> => {
    setIsSubmitting(true);
    
    try {
      // Validate input
      const result = whitePaperSchema.safeParse(data);
      if (!result.success) {
        toast({
          title: "Validation Error",
          description: result.error.errors[0].message,
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Sync to Zoho CRM (fire-and-forget)
      syncToZohoCRM({
        form_type: 'white-paper',
        first_name: result.data.firstName,
        last_name: result.data.lastName,
        email: result.data.email,
        company: result.data.organization || '',
        description: 'White paper download request',
      });
      
      toast({
        title: "Success!",
        description: "Your white paper download will begin shortly. Check your email for additional resources.",
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitForm
  };
};
