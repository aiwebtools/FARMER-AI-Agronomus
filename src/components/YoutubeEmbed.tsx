
import React, { useEffect, useRef } from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  autoplay?: boolean;
  muted?: boolean;
  quality?: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  autoplay = true,
  muted = true, // Changed default to true for better UX
  quality = 'hd1080',
  className = ''
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Create YouTube Player API script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    // Clean up
    return () => {
      tag.remove();
    };
  }, []);

  // Ensure correct parameters for iframe embed
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&vq=${quality}&rel=0&showinfo=0&modestbranding=1&enablejsapi=1`;

  return (
    <div className={`video-container relative w-full ${className}`}>
      <iframe
        ref={iframeRef}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        style={{ minHeight: "315px" }}
      />
    </div>
  );
};

export default YouTubeEmbed;
