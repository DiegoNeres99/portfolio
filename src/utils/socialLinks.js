export function isValidSocialProfile(url, platform) {
  if (!url || typeof url !== "string") return false;

  try {
    const parsed = new URL(url);
    const normalizedPath = parsed.pathname.replace(/\/+$/, "");

    if (platform === "github") {
      return parsed.hostname.includes("github.com") && normalizedPath.length > 0;
    }

    if (platform === "linkedin") {
      return parsed.hostname.includes("linkedin.com") && normalizedPath.length > 0;
    }

    if (platform === "instagram") {
      return parsed.hostname.includes("instagram.com") && normalizedPath.length > 0;
    }

    return normalizedPath.length > 0;
  } catch {
    return false;
  }
}
