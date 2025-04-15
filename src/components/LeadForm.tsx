import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleIframeLoad = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      try {
        if (iframe.contentWindow?.location.href.includes("formsubmit")) {
          toast({
            title: "Success!",
            description: "Your message has been sent successfully.",
          });
          setKey(prev => prev + 1);
        }

        const iframeDoc = iframe.contentWindow?.document;
        if (iframeDoc) {
          const style = iframeDoc.createElement('style');
          style.textContent = `
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
              background: transparent !important;
              max-width: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .zf-tempContDiv input[type="text"],
            .zf-tempContDiv input[type="email"],
            .zf-tempContDiv textarea,
            .zf-tempContDiv select {
              border-radius: 0.375rem !important;
              border: 1px solid #e2e8f0 !important;
              padding: 0.5rem 0.75rem !important;
              width: 100% !important;
              background-color: white !important;
              font-size: 0.875rem !important;
            }
            .zf-submitColor {
              background-color: #da7229 !important;
              border-radius: 0.375rem !important;
              padding: 0.5rem 1rem !important;
              color: white !important;
              border: none !important;
              cursor: pointer !important;
              transition: background-color 0.2s !important;
              width: 100% !important;
              margin-top: 1rem !important;
            }
            .zf-submitColor:hover {
              background-color: #b35618 !important;
            }
            .zf-form-sBox {
              padding: 0 !important;
              background: transparent !important;
              border: none !important;
            }
            .zf-templateWrapper {
              padding: 0 !important;
              max-width: 100% !important;
            }
            .zf-signatureField {
              display: none !important;
            }
            .zf-termsMsg {
              display: none !important;
            }
            .zf-template {
              background: transparent !important;
              max-width: 100% !important;
            }
            .zf-subContWrap {
              margin: 0 !important;
              padding: 0 !important;
            }
            .zf-tempContDiv label {
              color: #374151 !important;
              font-size: 0.875rem !important;
              margin-bottom: 0.25rem !important;
            }
            .zf-salutation {
              display: none !important;
            }
            .zf-poweredBy,
            .zf-frmBottomIcons,
            .zf-information,
            .zf-descFld {
              display: none !important;
            }
            .zf-templateContainer {
              margin-bottom: 0 !important;
            }
            .zf-submitWrapper {
              margin: 0 !important;
              padding: 0 !important;
            }
          `;
          iframeDoc.head.appendChild(style);
        }
      } catch (e) {
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
          className="w-full min-h-[400px] border-none"
          title="VEEP Contact Form"
        />
      </div>
    </div>
  );
};

export default LeadForm;
