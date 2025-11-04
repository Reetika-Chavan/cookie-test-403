export default async function handler(request) {
  const modifiedUrl = new URL(request.url);
  const route = modifiedUrl.pathname;

  if (route === "/test1") {
    modifiedUrl.pathname = "/test2";
    return Response.redirect(modifiedUrl, 301);
  }

  return fetch(request);
}
