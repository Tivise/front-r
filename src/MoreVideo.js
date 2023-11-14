import './scss/rivandy.scss';
import React from 'react';
import VideoPlayer from './VideoPlayer';
import {useSelector } from 'react-redux';
import Zoom from 'react-reveal/Zoom';

const MoreVideo = () => {
  const youtubeVideo1Id = 'L8TsXWboDvg'; // Remplacez par l'ID de votre vidéo YouTube
  const youtubeVideo2Id = 'PxgmXrPtxjc'; // Remplacez par l'ID de votre vidéo YouTube
  const youtubeVideo3Id = 'cjWNqFx3yCw'; // Remplacez par l'ID de votre vidéo YouTube
  const settings = useSelector(state => state);

  return (

    <section id="moreVideo">
            <article className='flex'>
              <aside><VideoPlayer videoId={youtubeVideo1Id} isAutoPlay={false}  width={960} height={540} /></aside>
              <aside className='flex column'>
                <article id="video2"><VideoPlayer videoId={youtubeVideo2Id} isAutoPlay={false}  width={640} height={360} /></article>
                <article id="video3"><VideoPlayer videoId={youtubeVideo3Id} isAutoPlay={false}  width={640} height={360} /></article>
              </aside>
            </article>
            <article className="explore-section">
                <aside>
                <h2 className={settings.factionSelected == 1 || settings.factionSelected == 0 ? 'rivandy-color':'dechys-color'}><Zoom right cascade>More videos...</Zoom></h2>
                <p>Discover Rivandy by watching the latest game videos and feel free to join our social networks!</p>
                </aside>
            </article>
        </section>
  );
}

export default MoreVideo;
