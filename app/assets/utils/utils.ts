const clientOsName = () => {
  const userAgent = navigator.userAgent;

  if (/(android)/i.test(userAgent)) {
    return "Android";
  } else if (/(iphone|ipad|ipod)/i.test(userAgent)) {
    return "iOS";
  } else if (/(mac)/i.test(userAgent)) {
    return "Mac";
  } else if (/(windows)/i.test(userAgent)) {
    return "Windows";
  } else if (/(cros)/i.test(userAgent)) {
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
}

export const isNotMobileDevice = () => {
  const osName: `${osTypes}` = clientOsName();

  if (["Windows", "Mac"].indexOf(osName) < 0) {
    return true;
  }
  return false;
};
