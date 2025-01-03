import { NextRequest, NextResponse } from 'next/server';
import { auth } from './auth';

export async function middleware(request: NextRequest) {
	const session = await auth();

	const protectedRoutes = ['/'];
	const currentPath = request.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.includes(currentPath);

	if (isProtectedRoute) {
		if (!session?.user) {
			return NextResponse.redirect(new URL('/login', request.url));
		}
	}

	if (request.nextUrl.pathname.startsWith('/login') && session?.user) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
};
