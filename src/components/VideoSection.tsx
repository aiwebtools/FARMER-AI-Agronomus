import YouTubeEmbed from './YoutubeEmbed';

const VideoSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Learn More About Agronomus</span>
            </h2>
            <p className="text-lg text-gray-300">
              Watch our detailed tutorial on how to get the most out of Agronomus AI
            </p>
          </div>
          
          <div className="glow-border rounded-lg">
            <div className="aspect-video">
              <YouTubeEmbed 
                videoId="fFbtPFkRERA" 
                autoplay={false} 
                muted={false}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
