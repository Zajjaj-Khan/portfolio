import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/sign-up','/sign-in', '/','/contact','/projects'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
