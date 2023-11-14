import './scss/rivandy.scss';
import React, { useState } from 'react';
import Video from './Video';
import Faction from './Faction';
import {useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Jump from 'react-reveal/Jump';
import MoreVideo from './MoreVideo';
import FooterRivandy from './FooterRivandy';

function Accueil() {


    const settings = useSelector(state => state);
  const [activeVideo, setVideoActive] = useState(false);


  return (
        [<section id="main-section">
        <Fade><img id="bg-1" className={settings.factionSelected == 1 || settings.factionSelected == 0 ? null:'dark'} src="./img/bg1.png"></img></Fade>
          {activeVideo ? <Video></Video> : null }
          <article className="explore-section">
            <Jump forever duration={3500}>
                <button id={activeVideo ? "selected-explore-img":"explore-img"} onClick={() => setVideoActive(true)}>
                    <p id={activeVideo ? "selected-explore-p":null}>EXPLORE NOW</p>
                </button>
            </Jump>
            <aside className='aside-small'>
            <h2 className={settings.factionSelected == 1 || settings.factionSelected == 0 ? 'rivandy-color':'dechys-color'}><Zoom right cascade>THE CHOICE BELONGS TO YOU</Zoom></h2>
            <p>You have the choice to join the circle of Rivandy as a benevolent guardian or become a corrupted Dechy, seeking to sow chaos and absorb all souls for your own quest for power.</p>
            </aside>
          </article>
        </section>,
        <Faction></Faction>,
        <MoreVideo></MoreVideo>]
  );
}

export default Accueil;
