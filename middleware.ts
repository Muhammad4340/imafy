import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe', '/transformations(.*)'],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\\.[\\w]+$)"], // Abaikan file statis
  debug: true, // Aktifkan debug untuk log detail
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
