import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest) {
	const token = req.cookies.get("access_token")?.value;

	if (!token && req.nextUrl.pathname !== "/sign-in") {
		return NextResponse.redirect(new URL("/sign-in", req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/add-author", "/add-book"],
};
