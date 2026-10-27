/**
 * Helper to dispatch Google Ads Conversion for Contato
 */
export const trackContactConversion = () => {
  try {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
        send_to: 'AW-18309678858/xLGpCN-D6asdEIqO3ppE',
        value: 1.0,
        currency: 'BRL',
      });
    }
  } catch {
    // silently ignore if analytics blocked
  }
};
