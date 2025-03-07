
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Rodriguez",
      role: "Commercial Farmer",
      content: "Agronomus transformed my approach to crop management. The real-time data analysis and tailored recommendations increased my yield by 28% in just one growing season. The YouTube tutorials were especially helpful for implementing new irrigation techniques.",
      rating: 5,
      location: "California, USA"
    },
    {
      id: 2,
      name: "Aisha Patel",
      role: "Agricultural Researcher",
      content: "As a researcher, I appreciate Agronomus's ability to process complex data sets and provide evidence-based recommendations. It's like having a research assistant that never sleeps. The image analysis feature accurately identified a rare nutrient deficiency in our test crops.",
      rating: 5,
      location: "Karnataka, India"
    },
    {
      id: 3,
      name: "Thomas Müller",
      role: "Sustainable Farming Advocate",
      content: "Agronomus has been instrumental in helping small-scale farmers in our community transition to more sustainable practices. The step-by-step guidance and regional adaptations make complex agricultural concepts accessible to everyone.",
      rating: 4,
      location: "Bavaria, Germany"
    },
    {
      id: 4,
      name: "Sophia Chen",
      role: "Organic Farm Owner",
      content: "The pest management recommendations from Agronomus helped us maintain our organic certification while effectively controlling an aphid infestation. The AI suggested companion planting configurations that created a natural balance in our ecosystem.",
      rating: 5,
      location: "Tasmania, Australia"
    },
  ];

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Success Stories</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            See how farmers and agricultural professionals around the world are using Agronomus to transform their operations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-700 ease-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass-card rounded-lg p-8 relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-agronomus-green/5 to-agronomus-blue/5 rounded-lg pointer-events-none"></div>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-300 italic mb-6">" {testimonial.content} "</blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                      <p className="text-sm text-agronomus-accent">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-agronomus-metal/80 rounded-full p-2 text-white hover:bg-agronomus-green/80 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-agronomus-metal/80 rounded-full p-2 text-white hover:bg-agronomus-green/80 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-agronomus-green' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
