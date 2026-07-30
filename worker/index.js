export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (!response.headers.get("content-type")?.includes("text/html")) {
      return response;
    }

    const socialImage = new URL("/og.png", request.url).href;
    return new HTMLRewriter()
      .on('meta[property="og:image"], meta[name="twitter:image"]', {
        element(element) {
          element.setAttribute("content", socialImage);
        },
      })
      .transform(response);
  },
};
