import { Link } from "react-router";

function NotFound() {
    return (
        <div className="gradient-background min-h-screen flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="font-panchang text-6xl font-bold mb-4">404</h1>
                <p className="font-panchang text-2xl mb-6">Page Not Found</p>
                <Link to="/" className="font-body font-bold link-underline text-blue-400">
                    Back to home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
