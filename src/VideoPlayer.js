import React from 'react';

const VideoPlayer = ({ videoId, isAutoPlay, height, width }) => {
  const videoUrl = "https://www.youtube.com/embed/" + videoId + "?version=3" + (isAutoPlay ? "&autoplay=1" : "&autoplay=0") + "&controls=0&showinfo=0&loop=1&modestbranding=1";


  return (
      <iframe 
        src={videoUrl}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        width={width}
        autoplay
        height={height}
      />
  );
}

export default VideoPlayer;