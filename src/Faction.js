import './scss/rivandy.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFactionSelected, changeLanguageSelected } from './redux/actions/index';
import RubberBand from 'react-reveal/RubberBand';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Faction = () => {


  const dispatch = useDispatch();

  const settings = useSelector(state => state);

  const handleChangeFaction = (factionId) => {
    dispatch(changeFactionSelected(factionId));
  };


  return (
    <section id="faction-section" onClick={() => console.log(settings)}>

      <Fade spy={settings.factionSelected}><img id="bg-2" src={settings.factionSelected == 2 ? "./img/bgD.png" : settings.factionSelected == 1 ? "./img/bgR.png": "./img/bgR.png"}></img></Fade>
      <article className="explore-section">
            
            <RubberBand when={settings.factionSelected == 1}><aside className='aside-rivandy-circle aside-small' onClick={() => handleChangeFaction(1)}>
            <img id="rivandy-circle-logo" src={settings.factionSelected == 1 ? "./img/rivandy-circle-h.png":"./img/rivandy-circle.png"}></img>
            <h2 className={settings.factionSelected == 1 ? 'rivandy-color':''}><RubberBand right cascade when={settings.factionSelected == 1}>THE RIVANDY CIRCLE</RubberBand></h2>
            <p className={settings.factionSelected == 1 ? 'apparition':''}><Zoom duration={2000} right cascade when={settings.factionSelected == 1}>The mystical circle of Rivandy emerges as the benevolent guardian of innocent souls, like an angel descended from the heavens. Their sacred mission is to protect the small spirits and preserve them from the corrupt ambitions of power-hungry individuals.</Zoom></p>
            </aside></RubberBand>
            
            <RubberBand when={settings.factionSelected == 2}><aside className='aside-dechys aside-small' onClick={() => handleChangeFaction(2)}>
              <img id="dechys-logo" src={settings.factionSelected == 2 ? "./img/dechys-h.png" : "./img/dechys.png"}></img>
              <h2 className={settings.factionSelected == 2 ? 'dechys-color':''}><RubberBand right cascade when={settings.factionSelected == 2}>THE DECHYS</RubberBand></h2>
              <p className={settings.factionSelected == 2 ? 'apparition':''}><Zoom duration={2000} right cascade when={settings.factionSelected == 2}>Their sole desire is to destroy Rivandy's benevolent circle and seize all souls to satisfy their thirst for absolute power. These Dechys target innocent souls and magical creatures to absorb them and increase their malevolent power.</Zoom></p>
            </aside></RubberBand>
      </article>
    </section>
  );
}

export default Faction;
