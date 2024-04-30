import './scss/rivandy.scss';
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import {useSelector } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Character from './Character';

const MoreVideo = () => {
  const youtubeVideo1Id = 'L8TsXWboDvg'; // Remplacez par l'ID de votre vidéo YouTube
  const youtubeVideo2Id = 'PxgmXrPtxjc'; // Remplacez par l'ID de votre vidéo YouTube
  const youtubeVideo3Id = 'cjWNqFx3yCw'; // Remplacez par l'ID de votre vidéo YouTube
  const settings = useSelector(state => state);

  const [charId, setCharId] = useState(0);

  return (

    <section id="characters">
      <Fade spy={settings.factionSelected}><img id="bg-2" src={settings.factionSelected === 2 ? "./img/charSelectionBg.png" : settings.factionSelected === 1 ? "./img/charSelectionBg.png": "./img/charSelectionBg.png"}></img></Fade>
      <Character charId={charId}></Character>
      <nav className='navigationSelection'>
        <aside>
        </aside>
        <ul>
          <li className={charId != 0 ? "disabled": null} onClick={() => setCharId(0)}><img src="./img/niklaus-web-icon.png"></img></li>
          <li className={charId != 1 ? "disabled": null} onClick={() => setCharId(1)}><img src="./img/lycia-web-icon.png"></img></li>
          <li className={charId != 2 ? "disabled": null} onClick={() => setCharId(2)}><img src="./img/kimka-web-icon.png"></img></li>
          <li className={charId != 3 ? "disabled": null} onClick={() => setCharId(3)}><img src="./img/kemo-web-icon.png"></img></li>
          <li className={charId != 4 ? "disabled": null} onClick={() => setCharId(4)}><img src="./img/guldir-web-icon.png"></img></li>
          <li className={charId != 5 ? "disabled": null} onClick={() => setCharId(5)}><img src="./img/elza-web-icon.png"></img></li>
          <li className={charId != 6 ? "disabled": null} onClick={() => setCharId(6)}><img src="./img/serbas-web-icon.png"></img></li>
          <li className={charId != 7 ? "disabled": null} onClick={() => setCharId(7)}><img src="./img/jasper-web-icon.png"></img></li>
        </ul>
      </nav>
    </section>
  );
}

export default MoreVideo;
