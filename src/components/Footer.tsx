
import { Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-agronomus-dark/80 backdrop-blur-lg border-t border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Logo and Description */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400 mt-4">
              Advanced AI technology for modern agriculture, providing expert guidance and data-driven solutions for all your farming needs.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-6o6ctHt6Z-agronomus-ai-farming-expert" 
                  className="text-gray-400 hover:text-agronomus-highlight transition-colors"
                >
                  Use Agronomus Now
                </a>
              </li>
              <li>
                <a 
                  href="https://illuminous.lovable.app/" 
                  className="text-gray-400 hover:text-agronomus-highlight transition-colors"
                >
                  Try Illuminous World Data Explorer
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-agronomus-highlight transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-agronomus-highlight transition-colors"
                >
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  className="text-gray-400 hover:text-agronomus-highlight transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-gray-400 hover:text-agronomus-highlight transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  className="text-gray-400 hover:text-agronomus-highlight transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="flex items-center text-gray-400 hover:text-agronomus-highlight transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="flex items-center text-gray-400 hover:text-agronomus-highlight transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-agronomus-green to-agronomus-blue text-white font-semibold py-2 px-5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="hover:text-agronomus-highlight transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-gray-500 hover:text-agronomus-highlight transition-colors text-sm"
            >
              Made with ❤️ for Agriculture
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
