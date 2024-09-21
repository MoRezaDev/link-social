export function processLinks(links) {
  if (!links) return [];
  return links.map((link) => {
    let content = "";

    if (link.type === "URL") {
      // Normalize the URL (remove protocol for easier matching)
      const normalizedUrl = link.url.replace(/^https?:\/\//, "");

      if (
        normalizedUrl.startsWith("www.instagram.com/") ||
        normalizedUrl.startsWith("instagram.com/")
      ) {
        content = "instagram";
      } else if (
        normalizedUrl.startsWith("www.linkedin.com/") ||
        normalizedUrl.startsWith("linkedin.com/")
      ) {
        content = "linkedin";
      }
      // Add more social media checks here (e.g., Twitter, Facebook, etc.)
      else if (
        normalizedUrl.startsWith("www.twitter.com/") ||
        normalizedUrl.startsWith("twitter.com/")
      ) {
        content = "twitter";
      } else if (
        normalizedUrl.startsWith("www.facebook.com/") ||
        normalizedUrl.startsWith("facebook.com/")
      ) {
        content = "facebook";
      } else {
        content = "other"; // Default for URLs that are not social links
      }
    } else if (link.type === "Email") {
      content = "email";
    } else if (link.type === "Phone") {
      content = "phone";
    } else if (link.type === "Whatsapp") {
      content = "whatsapp";
    } else if (link.type === "Telegram") {
      content = "telegram";
    }

    // Return a new link object with the added 'content' property
    return {
      ...link,
      content,
    };
  });
}

export function processLink(link) {
  let content = "";

  if (link.type === "URL") {
    // Normalize the URL (remove protocol for easier matching)
    const normalizedUrl = link.url.replace(/^https?:\/\//, "");

    if (
      normalizedUrl.startsWith("www.instagram.com/") ||
      normalizedUrl.startsWith("instagram.com/")
    ) {
      content = "instagram";
    } else if (
      normalizedUrl.startsWith("www.linkedin.com/") ||
      normalizedUrl.startsWith("linkedin.com/")
    ) {
      content = "linkedin";
    }
    // Add more social media checks here (e.g., Twitter, Facebook, etc.)
    else if (
      normalizedUrl.startsWith("www.twitter.com/") ||
      normalizedUrl.startsWith("twitter.com/")
    ) {
      content = "twitter";
    } else if (
      normalizedUrl.startsWith("www.facebook.com/") ||
      normalizedUrl.startsWith("facebook.com/")
    ) {
      content = "facebook";
    } else {
      content = "other"; // Default for URLs that are not social links
    }
  } else if (link.type === "Email") {
    content = "email";
  } else if (link.type === "Phone") {
    content = "phone";
  } else if (link.type === "Whatsapp") {
    content = "whatsapp";
  } else if (link.type === "Telegram") {
    content = "telegram";
  }

  // Return a new link object with the added 'content' property
  return {
    ...link,
    content,
  };
}
