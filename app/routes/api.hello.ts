/* Resource route: no component, it returns the response from loader */
export function loader() {
  return Response.json({
    message: "Hello from the Remix API (runs on the server)",
    at: new Date().toISOString(),
  });
}
