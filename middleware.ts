import { clerkMiddleware } from "@clerk/nextjs/server"
import { NextRequest } from "next/server";

export default clerkMiddleware(async (auth, request) => {
  function isPublicRoute(request: NextRequest) {
    const publicRoutes = ['/', '/api/webhooks/clerk', '/api/webhooks/stripe'];
    return publicRoutes.includes(request.url);
  }

  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
