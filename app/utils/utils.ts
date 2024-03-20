export const clientOsName = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/android/.test(userAgent)) {
    return "Android";
  } else if (/iphone|ipad|ipod/.test(userAgent)) {
    return "iOS";
  } else if (/macintosh|mac os x/.test(userAgent)) {
    return "Mac";
  } else if (/windows/.test(userAgent)) {
    return "Windows";
  } else if (/linux/.test(userAgent)) {
    return "Linux";
  } else if (/cros/.test(userAgent)) {
    return "Chromebook";
  } else {
    return "Unknown";
  }
};

enum osTypes {
  "Android" = "Android",
  "iOS" = "iOS",
  "Mac" = "Mac",
  "Windows" = "Windows",
  "Chromebook" = "Chromebook",
  "Unknown" = "Unknown",
  "Linux" = "Linux",
}

export const isMobileDevice = () => {
  const osName: `${osTypes}` = clientOsName();

  if (["Windows", "Mac", "Linux"].some((item) => item === osName)) {
    return false;
  }
  return true;
};
