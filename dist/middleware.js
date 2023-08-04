import { withAuth } from "next-auth/middleware";
export default withAuth({
    pages: {
        signIn: "/",
    },
});
export var config = {
    matcher: [
        "/profiles/:path*",
        "/Index/:path*",
        "/watch/:path*"
    ]
};