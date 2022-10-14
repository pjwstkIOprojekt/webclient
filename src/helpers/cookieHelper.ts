// Helper for improved cookie handling
export const getCookieValue = (key: string) => localStorage.getItem(key) ?? "";

export const setCookieValue = (key: string, value: string) => {
  if (getCookieConsentValue()) {
    localStorage.setItem(key, value);
  }
};

export const removeCookieValue = (key: string) => localStorage.removeItem(key);
export const acceptCookies = () => localStorage.setItem("cookieConsent", "true");
export const getCookieConsentValue = () => localStorage.getItem("cookieConsent") === "true";
