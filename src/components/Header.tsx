
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
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://chatgpt.com/g/g-6o6ctHt6Z-agronomus-ai-farming-expert" 
              className="btn-primary">USE Agronomus: AI Farming Expert Now</a>
            <a href="https://illuminous.lovable.app/" 
              className="nav-link">Try Illuminous World Data Explorer</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#disclaimer" className="nav-link">Disclaimer</a>
            <a href="https://www.aiwebtools.ai" className="nav-link">More AI Tools</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              onClick={() => setMobileMenuOpen(false)}>
              USE Agronomus Now
            </a>
            <a href="https://illuminous.lovable.app/" 
              className="text-gray-300 hover:text-agronomus-highlight"
              onClick={() => setMobileMenuOpen(false)}>
              Try Illuminous World Data Explorer
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
              onClick={() => setMobileMenuOpen(false)}>
              More AI Tools
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
