// Google Analytics 4 Event Tracking
// Tracks key conversion events for funnel analysis

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer: unknown[];
  }
}

// Track custom events
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// ===== CTA & BUTTON CLICKS =====

export const trackCtaClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    page_location: location,
  });
};

export const trackStartBuildClick = (location: string) => {
  trackEvent('start_build_click', {
    page_location: location,
  });
};

// ===== MODAL EVENTS =====

export const trackModalOpen = (modalName: string) => {
  trackEvent('modal_open', {
    modal_name: modalName,
  });
};

export const trackModalClose = (modalName: string) => {
  trackEvent('modal_close', {
    modal_name: modalName,
  });
};

// ===== FORM EVENTS =====

export const trackFormStart = (formName: string) => {
  trackEvent('form_start', {
    form_name: formName,
  });
};

export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
  });
};

// ===== CHECKOUT EVENTS =====

export const trackCheckoutStart = (packageName: string, value: number) => {
  trackEvent('begin_checkout', {
    currency: 'AUD',
    value: value,
    items: [{
      item_name: packageName,
      price: value,
    }],
  });
};

// ===== SCROLL & ENGAGEMENT =====

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};

// ===== CONTACT EVENTS =====

export const trackPhoneClick = (location: string) => {
  trackEvent('phone_click', {
    page_location: location,
  });
};

export const trackEmailClick = (location: string) => {
  trackEvent('email_click', {
    page_location: location,
  });
};

export const trackBookingClick = (location: string) => {
  trackEvent('booking_click', {
    page_location: location,
  });
};
