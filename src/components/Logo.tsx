
import { Sprout } from 'lucide-react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

const Logo = ({ className = '', showTagline = true }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-agronomus-green to-agronomus-blue rounded-full blur-lg opacity-70 animate-pulse-light"></div>
        <div className="relative bg-agronomus-dark rounded-full p-2 border border-agronomus-green/30">
          <Sprout className="h-7 w-7 text-agronomus-highlight" />
        </div>
      </div>
      <div className="ml-3">
        <h1 className="font-display text-xl font-bold text-white">
          Agronomus<span className="text-agronomus-green">:</span> <span className="text-agronomus-blue">AI</span>
        </h1>
        {showTagline && (
          <p className="text-xs text-gray-400 -mt-1">
            Presented by <a href="https://www.aiwebtools.ai" className="text-agronomus-accent hover:text-agronomus-highlight transition-colors">AiWebTools.Ai</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Logo;
