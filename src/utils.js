import CryptoJS from "crypto-js";

export const formatDateTime = (dateStr) => {
  const date = new Date(dateStr);
  return {
    date: date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }),
    time: date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
  };
};

export const calculateDaylight = (sunrise, sunset) => {
  const sunriseTime = sunrise * 1000;
  const sunsetTime = sunset * 1000;
  const daylightMs = sunsetTime - sunriseTime;
  const nightMs = 24 * 60 * 60 * 1000 - daylightMs;

  return {
    daylight: daylightMs / (60 * 60 * 1000),
    night: nightMs / (60 * 60 * 1000),
  };
};

export const encryptData = (plainData) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(plainData),
    import.meta.env.VITE_CRYTOJS_SECRET_CODE
  ).toString();
};

export const decryptData = (encryptedData) => {
  const decryptedData = CryptoJS.AES.decrypt(
    encryptedData,
    import.meta.env.VITE_CRYTOJS_SECRET_CODE
  ).toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
};
