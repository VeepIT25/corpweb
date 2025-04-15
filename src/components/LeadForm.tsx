
const LeadForm = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
        Start Your Journey with VEEP
      </h2>
      <div
        id="zoho-form"
        className="w-full"
      >
        {/* Replace the src URL below with your actual Zoho form embed URL */}
        <iframe
          src="YOUR_ZOHO_FORM_URL_HERE"
          style={{ border: "none" }}
          className="w-full min-h-[500px]"
          title="VEEP Lead Form"
        />
      </div>
    </div>
  );
};

export default LeadForm;
