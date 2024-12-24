import { authMiddleware } from '@clerk/nextjs';

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
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
