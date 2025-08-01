import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-darker text-white text-center py-4 mt-8 border-t border-cyber-border">
      <p>&copy; {new Date().getFullYear()} Cyber Glitch. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
