import React from 'react';
import { useEffect, useState } from 'react';

const VideoPlayer = ({ videoId, isAutoPlay, height, width }) => {
  const videoUrl = "https://www.youtube.com/embed/" + videoId + "?version=3" + (isAutoPlay ? "&autoPlay=1" : "&autoPlay=0") + "&controls=0&showinfo=0&loop=1&modestbranding=1";

  const [isWidthLessThan1300, setIsWidthLessThan1300] = useState(window.innerWidth < 1300);



  const handleResize = () => {
    setIsWidthLessThan1300(window.innerWidth < 1300);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
      <iframe 
        src={videoUrl}
        title="YouTube Video Player"
        allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        width={isWidthLessThan1300 ? width/(isAutoPlay ? 2:1.2) : width}
        autoplay
        height={isWidthLessThan1300 ? height/(isAutoPlay ? 2:1.2) : height}
      />
  );
}

export default VideoPlayer;