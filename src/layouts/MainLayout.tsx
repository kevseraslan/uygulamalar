import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="app-container">
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    )
}
