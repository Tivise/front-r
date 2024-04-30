import './scss/rivandy.scss';
import React from 'react';
import {useSelector } from 'react-redux';
import CardProfile from './CardProfile';

const Music = () => {
  const youtubeVideo1Id = 'L8TsXWboDvg'; // Remplacez par l'ID de votre vidéo YouTube
  const youtubeVideo2Id = 'PxgmXrPtxjc'; // Remplacez par l'ID de votre vidéo YouTube
  const youtubeVideo3Id = 'cjWNqFx3yCw'; // Remplacez par l'ID de votre vidéo YouTube
  const settings = useSelector(state => state);

  return (

    <section id="audio" >
      <CardProfile></CardProfile>
    </section>
  );
}

export default Music;
