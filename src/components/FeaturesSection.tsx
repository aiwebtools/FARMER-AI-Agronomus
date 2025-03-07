
import { 
  Search, Image, Database, Youtube, MessageSquare, 
  Globe, BarChart, FileCode, FileQuestion, Download
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-card p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-agronomus-green/10 group">
      <div className="rounded-full bg-agronomus-dark p-3 w-14 h-14 flex items-center justify-center border border-agronomus-green/20 mb-4 group-hover:border-agronomus-highlight/50 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="h-7 w-7 text-agronomus-green" />,
      title: "Real-time Web Search",
      description: "Automatically searches the web for the most up-to-date agricultural information and research."
    },
    {
      icon: <Youtube className="h-7 w-7 text-agronomus-blue" />,
      title: "Video Tutorials",
      description: "Provides playable YouTube tutorials for visual learning and practical demonstrations."
    },
    {
      icon: <Image className="h-7 w-7 text-agronomus-highlight" />,
      title: "Image Analysis",
      description: "Diagnoses plant diseases, soil quality, and crop health through advanced image recognition."
    },
    {
      icon: <Database className="h-7 w-7 text-agronomus-green" />,
      title: "Data Analysis",
      description: "Processes and interprets complex agricultural data to provide actionable insights."
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-agronomus-blue" />,
      title: "Interactive Guidance",
      description: "Engages in conversational interaction to provide personalized agricultural advice."
    },
    {
      icon: <Globe className="h-7 w-7 text-agronomus-highlight" />,
      title: "Location-Aware",
      description: "Tailors recommendations based on geographical location and local environmental conditions."
    },
    {
      icon: <BarChart className="h-7 w-7 text-agronomus-green" />,
      title: "Yield Optimization",
      description: "Suggests strategies to increase crop yields based on current practices and conditions."
    },
    {
      icon: <FileCode className="h-7 w-7 text-agronomus-blue" />,
      title: "Custom Solutions",
      description: "Develops bespoke solutions for specific agricultural challenges and farm management."
    },
    {
      icon: <FileQuestion className="h-7 w-7 text-agronomus-highlight" />,
      title: "Continuous Learning",
      description: "Asks targeted questions to gather necessary information for better assistance."
    },
    {
      icon: <Download className="h-7 w-7 text-agronomus-green" />,
      title: "Detailed Resources",
      description: "Creates comprehensive guides and downloadable resources for offline reference."
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-agronomus-green/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-agronomus-blue/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Advanced Capabilities</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Agronomus leverages cutting-edge AI technology to provide comprehensive agricultural assistance,
            combining multiple data sources and analysis methods for optimized farming solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
