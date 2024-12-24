import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  export default authMiddleware({
  debug: true,
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe', '/transformations(.*)'],
});
   
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
