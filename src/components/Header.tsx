
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-agronomus-dark/90 backdrop-blur-lg shadow-lg' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="https://chatgpt.com/g/g-6o6ctHt6Z-agronomus-ai-farming-expert" 
              className="btn-primary text-sm py-2 px-4 lg:py-3 lg:px-6" 
              target="_blank" 
              rel="noopener noreferrer">
              USE Agronomus Now
            </a>
            <a href="https://chatgpt.com/g/g-68d6c0b6cecc8191b38e0d9cf099769d-farm-finder-gpt" 
              className="nav-link text-xs lg:text-sm whitespace-nowrap"
              target="_blank" 
              rel="noopener noreferrer">
              Use Farm Finder GPT
            </a>
            <a href="#faq" className="nav-link text-xs lg:text-sm">FAQ</a>
            <a href="#disclaimer" className="nav-link text-xs lg:text-sm">Disclaimer</a>
            <a href="https://www.aiwebtools.ai" 
              className="nav-link text-xs lg:text-sm"
              target="_blank" 
              rel="noopener noreferrer">
              More AI Tools
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card mx-4 mt-3 rounded-lg animate-fade-in">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="https://chatgpt.com/g/g-6o6ctHt6Z-agronomus-ai-farming-expert" 
              className="btn-primary text-center"
              onClick={() => setMobileMenuOpen(false)}
              target="_blank" 
              rel="noopener noreferrer">
              USE Agronomus Now
            </a>
            <a href="https://chatgpt.com/g/g-68d6c0b6cecc8191b38e0d9cf099769d-farm-finder-gpt" 
              className="text-gray-300 hover:text-agronomus-highlight"
              onClick={() => setMobileMenuOpen(false)}
              target="_blank" 
              rel="noopener noreferrer">
              Use Farm Finder GPT
            </a>
            <a href="#faq" 
              className="text-gray-300 hover:text-agronomus-highlight"
              onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
            <a href="#disclaimer" 
              className="text-gray-300 hover:text-agronomus-highlight"
              onClick={() => setMobileMenuOpen(false)}>
              Disclaimer
            </a>
            <a href="https://www.aiwebtools.ai" 
              className="text-gray-300 hover:text-agronomus-highlight"
              onClick={() => setMobileMenuOpen(false)}
              target="_blank" 
              rel="noopener noreferrer">
              More AI Tools
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
