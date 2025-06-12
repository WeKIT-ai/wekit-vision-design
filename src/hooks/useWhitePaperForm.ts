
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

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
      console.log('Submitting white paper form:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      // const response = await fetch('/api/white-paper-download', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      
      toast({
        title: "Success!",
        description: "Your white paper download will begin shortly. Check your email for additional resources.",
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
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
