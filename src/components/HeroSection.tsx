
import { useEffect, useRef } from 'react';
import { Cpu, Database, Image, Search, Youtube } from 'lucide-react';
import YouTubeEmbed from './YoutubeEmbed';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const icons = heroRef.current.querySelectorAll('.floating-icon');
      icons.forEach((icon, index) => {
        const iconElement = icon as HTMLElement;
        const factor = (index + 1) * 5;
        const xOffset = (x - 0.5) * factor;
        const yOffset = (y - 0.5) * factor;
        
        iconElement.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Floating Icons */}
      <div className="floating-icon absolute top-1/4 left-1/4 text-agronomus-green/30 animate-float">
        <Search className="h-12 w-12" />
      </div>
      <div className="floating-icon absolute top-2/3 left-1/5 text-agronomus-blue/30 animate-float animation-delay-500">
        <Image className="h-10 w-10" />
      </div>
      <div className="floating-icon absolute top-1/3 right-1/4 text-agronomus-highlight/30 animate-float animation-delay-1000">
        <Database className="h-14 w-14" />
      </div>
      <div className="floating-icon absolute top-2/3 right-1/5 text-agronomus-green/30 animate-float animation-delay-1500">
        <Youtube className="h-8 w-8" />
      </div>
      <div className="floating-icon absolute top-1/2 right-1/3 text-agronomus-blue/30 animate-float animation-delay-2000">
        <Cpu className="h-16 w-16" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text */}
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="gradient-text">Agronomus:</span> Your AI Farming Expert
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Revolutionize your agricultural practices with cutting-edge AI technology. 
                Agronomus delivers expert advice, real-time data analysis, and personalized solutions 
                for all your farming needs.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://chatgpt.com/g/g-6o6ctHt6Z-agronomus-ai-farming-expert" className="btn-primary">
                Start Using Agronomus Now
              </a>
              <a href="#features" className="btn-secondary">
                Explore Features
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="glass-card p-3 rounded-lg">
                <div className="flex items-center">
                  <Search className="h-5 w-5 text-agronomus-green" />
                  <p className="ml-2 text-sm text-gray-300">Web Search</p>
                </div>
              </div>
              <div className="glass-card p-3 rounded-lg">
                <div className="flex items-center">
                  <Youtube className="h-5 w-5 text-agronomus-blue" />
                  <p className="ml-2 text-sm text-gray-300">Video Tutorials</p>
                </div>
              </div>
              <div className="glass-card p-3 rounded-lg">
                <div className="flex items-center">
                  <Image className="h-5 w-5 text-agronomus-highlight" />
                  <p className="ml-2 text-sm text-gray-300">Image Analysis</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="lg:w-1/2 glow-border rounded-lg animate-scale-in">
            <div className="aspect-video">
              <YouTubeEmbed 
                videoId="fFbtPFkRERA" 
                autoplay={true} 
                muted={true}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
