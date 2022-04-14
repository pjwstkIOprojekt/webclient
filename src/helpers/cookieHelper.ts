// Helper for improved cookie handling
import { getCookieConsentValue } from "../components/CookieConsent";

export const getCookieValue = (key: string) => {
  const tmp = localStorage.getItem(key);
  return tmp === null ? "" : tmp;
};

export const setCookieValue = (key: string, value: string) => {
  if (getCookieConsentValue()) {
    localStorage.setItem(key, value);
  }
};

export const removeCookieValue = (key: string) => {
  localStorage.removeItem(key);
};
