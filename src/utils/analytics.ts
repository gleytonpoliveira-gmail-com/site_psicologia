/**
 * Global click conversion tracking for Google Analytics 4 and Google Ads (Contato / WhatsApp)
 */
export const gtag_report_conversion = (url?: string): boolean => {
  try {
    if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;

      // 1. Google Ads Conversion
      gtag('event', 'conversion', {
        send_to: 'AW-18309678858/xLGpCN-D6asdEIqO3ppE',
        value: 1.0,
        currency: 'BRL',
      });

      // 2. Google Analytics 4 Conversion Events (Key Events / Eventos Principais)
      gtag('event', 'generate_lead', {
        event_category: 'Contato',
        event_label: 'WhatsApp Agendamento',
        value: 1.0,
        currency: 'BRL',
      });

      gtag('event', 'contato_whatsapp', {
        event_category: 'Engajamento',
        event_label: 'Agendamento WhatsApp',
        value: 1.0,
        currency: 'BRL',
      });

      // 3. GA4 generic conversion event for testing
      gtag('event', 'conversion', {
        event_category: 'Leads',
        event_label: 'Contato',
        value: 1.0,
        currency: 'BRL',
      });
    }
  } catch {
    // silently ignore if analytics blocked
  }
  return true;
};

// Expose on window for inline HTML onclick handlers
if (typeof window !== 'undefined') {
  (window as unknown as { gtag_report_conversion: typeof gtag_report_conversion }).gtag_report_conversion = gtag_report_conversion;
}

export const trackContactConversion = () => {
  gtag_report_conversion();
};
