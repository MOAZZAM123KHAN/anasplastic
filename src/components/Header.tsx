
import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Advantages', href: '#advantages' },
    { name: 'Global Reach', href: '#global' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center animate-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Anaspaltic
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button className="gradient-primary text-white hover:opacity-90 transition-opacity animate-glow">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 gradient-primary text-white">
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
