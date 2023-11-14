import './scss/rivandy.scss';
import React from 'react';
import VideoPlayer from './VideoPlayer';

const Video = () => {
  const youtubeVideoId = 'K2UcCOu65hA'; // Remplacez par l'ID de votre vidéo YouTube

  return (
    <article id="video-wrapper">
      <VideoPlayer videoId={youtubeVideoId} isAutoPlay={true} width={960} height={540} />
    </article>
  );
}

export default Video;
