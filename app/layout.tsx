import React from "react";
import "./globals.css";

export const metadata = {
    title: "Portfolio - Aman Verma",
    description: "Backend Developer | Full-Stack Engineer | AI Integrator",
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}