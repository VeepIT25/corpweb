
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [key, setKey] = useState(0); // Used to force iframe reload

  useEffect(() => {
    const handleIframeLoad = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      try {
        // Check if the loaded URL contains "formsubmit"
        if (iframe.contentWindow?.location.href.includes("formsubmit")) {
          toast({
            title: "Success!",
            description: "Your message has been sent successfully.",
          });
          // Reset the form by reloading it
          setKey(prev => prev + 1);
        }
      } catch (e) {
        // Cross-origin errors will be caught here, which is expected
        console.log("Cross-origin frame access");
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleIframeLoad);
      }
    };
  }, [toast]);

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
        Start Your Journey with VEEP
      </h2>
      <div id="zoho-form" className="w-full">
        <iframe
          key={key}
          ref={iframeRef}
          src="https://forms.zohopublic.com/ainveep1/form/ContactUsWebsite/formperma/_P6uBZr8eyB0YdjZWFQMIkWRNjh9JcsV71A_Tnwyio0"
          className="w-full min-h-[500px] border-none"
          title="VEEP Contact Form"
        />
      </div>
    </div>
  );
};

export default LeadForm;

