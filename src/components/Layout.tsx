import Link from 'next/link';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary text-secondary font-mono">
      <header className="fixed top-0 left-0 w-full z-10 bg-primary bg-opacity-70 backdrop-blur-sm border-b border-accent shadow-lg">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-8">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Experience', '/experience'],
              ['Projects', '/projects'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-lg font-bold hover:text-accent transition-colors duration-300 relative group"
                >
                  {label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default Layout;
