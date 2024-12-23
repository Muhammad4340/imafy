import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
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
});


export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};
