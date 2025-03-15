browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    let url = new URL(details.url);
    if (url.searchParams.has("tl")) {
      url.searchParams.delete("tl");
      return { redirectUrl: url.toString() };
    }
  },
  { urls: ["*://www.reddit.com/*"] },
  ["blocking"]
);
