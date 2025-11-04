export default async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.pathname === "/test1") {
    return Response.redirect("/test2", 302);
  }
  return fetch(request);
}
