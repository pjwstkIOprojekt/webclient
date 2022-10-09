// Helper for improved cookie handling
export const getCookieValue = (key: string) => {
  const tmp = localStorage.getItem(key);
  return tmp === null ? "" : tmp;
};

export const setCookieValue = (key: string, value: string) => {
  if (getCookieConsentValue()) {
    localStorage.setItem(key, value);
  }
};

export const removeCookieValue = (key: string) => localStorage.removeItem(key);
export const acceptCookies = () => localStorage.setItem("cookieConsent", "true");
export const getCookieConsentValue = () => localStorage.getItem("cookieConsent") === "true";
