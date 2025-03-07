
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs: FAQItem[] = [
    {
      question: "What is Agronomus AI Farming Expert?",
      answer: "Agronomus is an advanced AI assistant specialized in agriculture that provides expert advice, data analysis, and personalized solutions for all farming needs. It combines web searches, image analysis, and interactive guidance to deliver comprehensive agricultural support."
    },
    {
      question: "How does Agronomus use web search?",
      answer: "For every interaction, Agronomus performs real-time web searches to gather the most current and relevant agricultural information. This ensures that all advice and recommendations are based on up-to-date research and practices from trusted sources."
    },
    {
      question: "Can Agronomus analyze images of my crops or soil?",
      answer: "Yes, Agronomus has advanced image analysis capabilities that can diagnose plant diseases, assess soil quality, identify pests, and evaluate overall crop health. Simply upload images and Agronomus will provide detailed analysis and actionable recommendations."
    },
    {
      question: "How does the YouTube tutorial feature work?",
      answer: "Agronomus automatically searches for and provides relevant, playable YouTube tutorial videos that demonstrate agricultural techniques, equipment usage, or solutions to specific farming challenges. These visual guides complement the written advice for more effective learning."
    },
    {
      question: "Is Agronomus suitable for small-scale or large commercial farming?",
      answer: "Agronomus is designed to assist farmers of all scales, from home gardeners to large commercial operations. Its recommendations are tailored to your specific context, resources, and goals, making it valuable regardless of your operation's size."
    },
    {
      question: "Does Agronomus consider regional differences in agriculture?",
      answer: "Yes, Agronomus takes into account geographical location, climate conditions, soil types, and regional agricultural practices when providing advice. This ensures that recommendations are locally relevant and practically applicable."
    },
    {
      question: "What types of agricultural data can Agronomus analyze?",
      answer: "Agronomus can analyze various types of agricultural data including soil test results, crop yield records, weather patterns, market prices, pest prevalence, irrigation metrics, and more. This comprehensive analysis helps in making informed farming decisions."
    },
    {
      question: "How do I get started with Agronomus?",
      answer: "To start using Agronomus, simply click on the 'USE Agronomus: AI Farming Expert Now' button at the top of the page. No special setup or technical knowledge is required. You can immediately begin asking questions and receiving expert agricultural guidance."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-agronomus-blue/50 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about Agronomus and how it can help with your agricultural needs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg mb-4 overflow-hidden"
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-display font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-agronomus-green flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-agronomus-accent flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
