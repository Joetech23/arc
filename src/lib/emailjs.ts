export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  contactTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT_ID ?? "",
  quoteTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export const emailjsReady = () =>
  Boolean(
    emailjsConfig.serviceId &&
      emailjsConfig.publicKey &&
      (emailjsConfig.contactTemplateId || emailjsConfig.quoteTemplateId)
  );
