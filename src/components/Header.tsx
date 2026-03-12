
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Sheet, SheetContent, SheetTitle } from './ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  const navLinks = [
    {
      href: "https://chatgpt.com/g/g-6o6ctHt6Z-agronomus-ai-farming-expert",
      label: "USE Agronomus Now",
      isPrimary: true,
      external: true,
    },
    {
      href: "https://chatgpt.com/g/g-68d6c0b6cecc8191b38e0d9cf099769d-farm-finder-gpt",
      label: "Use Farm Finder GPT",
      external: true,
    },
    { href: "#faq", label: "FAQ" },
    { href: "#disclaimer", label: "Disclaimer" },
    {
      href: "https://aiwebtools.lovable.app/?via=aiwebtools",
      label: "More AI Tools",
      external: true,
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-agronomus-dark/90 backdrop-blur-lg shadow-lg' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={link.isPrimary ? "btn-primary text-sm py-2 px-4 lg:py-3 lg:px-6" : "nav-link text-xs lg:text-sm whitespace-nowrap"}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 -mr-2 active:scale-95 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sheet for smooth slide-in */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent
          side="right"
          className="w-[85vw] max-w-sm bg-agronomus-dark/95 backdrop-blur-xl border-l border-white/10 p-0"
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col pt-12 px-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={
                  link.isPrimary
                    ? "btn-primary text-center py-3 px-6 text-base"
                    : "text-gray-300 hover:text-agronomus-highlight py-3 px-4 rounded-lg hover:bg-white/5 transition-all text-base"
                }
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
