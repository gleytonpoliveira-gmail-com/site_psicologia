/**
 * Global click conversion tracking for Google Ads (Contato / WhatsApp)
 */
export const gtag_report_conversion = (url?: string): boolean => {
  try {
    if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
        send_to: 'AW-18309678858/xLGpCN-D6asdEIqO3ppE',
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
