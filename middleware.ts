import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const user = "admin";
const password = "test1";

export function middleware(request: NextRequest) {
    const auth = request.headers.get('authorization');
    if (auth) {
        const authValue = auth.split(' ')[1]
        const [u, p] = atob(authValue).split(':')
        if (u === user && p === password) {
            return NextResponse.next();
        }
    }
    return NextResponse.rewrite(new URL('/api/auth', request.url));
}

export const config = {
    matcher: ['/', '/api/auth:path*']
}
