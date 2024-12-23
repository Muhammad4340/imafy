import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/api/webhooks/clerk',
    '/api/webhooks/stripe',
    '/transformations/add/recolor', // Tambahkan rute ini
  ],
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", 
    "/",                          
    "/(api|trpc)(.*)",            
    "/transformations/add/recolor",
    "/transformations/add/remove",
    "/transformations/add/fill",
    "/transformations/add/restore",
    "/transformations/add/removeBackground",
    "/profile",
    "/credits",
  ],
};

