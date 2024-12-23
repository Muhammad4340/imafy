export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhooks/clerk",
    "/api/webhooks/stripe",
    "/transformations/add/recolor",
    "/transformations/add/remove",
    "/transformations/add/fill",
    "/transformations/add/restore",
    "/transformations/add/removeBackground",
    "/profile",
    "/credits",
  ],
  debug: true,
  beforeAuth: async (req, evt) => {
    console.log("Cookies in request:", req.headers.get("cookie"));
  },
});


export const config = {
  matcher: ["/", "/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
