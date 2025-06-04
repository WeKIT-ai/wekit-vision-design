
import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
  }
}

const TwaktoChat = () => {
  useEffect(() => {
    // Twakto chat widget script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_TAWK_TO_ID/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Add the script to the document head
    document.head.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      // Remove the script
      const existingScript = document.querySelector('script[src*="tawk.to"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Remove Tawk_API if it exists
      if (window.Tawk_API) {
        window.Tawk_API = undefined;
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default TwaktoChat;
