const normalizeUrl = (url?: string) => {
  if (!url) return "";
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
};

export const BASE_URL =
  normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
  normalizeUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
  "https://sterlingtaxpartner.in";
