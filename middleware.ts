import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/sign-up','/sign-in', '/','/contact','/projects','/projects/(.*)','/api/uploadthing'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
