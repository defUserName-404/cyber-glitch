"use client";

import Link from 'next/link';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary text-secondary font-mono">
      <header className="fixed top-0 left-0 w-full z-10 bg-primary bg-opacity-80 backdrop-blur-md border-b-2 border-accent shadow-2xl">
        <nav className="container mx-auto px-6 py-4 flex justify-center space-x-10">
          {[['Home', '/'], ['About', '/about'], ['Experience', '/experience'], ['Projects', '/projects'], ['Contact', '/contact']].map(([title, url]) => (
            <Link key={title} href={url} className="text-xl font-bold uppercase tracking-wider text-secondary hover:text-accent transition-all duration-300 relative group overflow-hidden py-1"
               > {title}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute top-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
                <span className="absolute top-0 left-0 h-full w-0.5 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></span>
                <span className="absolute top-0 right-0 h-full w-0.5 bg-accent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            </Link>
          ))}
        </nav>
      </header>
      <main className="pt-24">{children}</main>
    </div>
  );
};

export default Layout;