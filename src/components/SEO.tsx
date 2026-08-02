import { useEffect } from "react";

const BASE_URL = "https://elyonware.com";
const SOCIAL_IMAGE_URL = `${BASE_URL}/elyonware-logo.png`;

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEO({
  title,
  description,
  path,
  image,
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}) {
  useEffect(() => {
    const fullTitle = title;
    const canonical = `${BASE_URL}${path}`;
    const imageUrl = image ?? SOCIAL_IMAGE_URL;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setCanonical(canonical);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Elyonware");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
  }, [title, description, path, image, noindex]);

  return null;
}
