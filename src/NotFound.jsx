import React from 'react';

function NotFound() {
    return (
        <div className="gradient-background min-h-screen flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="font-panchang text-6xl font-bold mb-4">404</h1>
                <p className="font-panchang text-2xl mb-6">Page Not Found</p>
                <a href="/Portfolio/" className=" font-body font-bold underline">Back to home</a>
            </div>
        </div>
    );
}

export default NotFound;
