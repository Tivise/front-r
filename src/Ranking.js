import './scss/rivandy.scss';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Video from './Video';
import Faction from './Faction';
import {useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

function Ranking() {


  const settings = useSelector(state => state);
  const [classement, setRank] = useState(null);

  let cpt = 0;

  useEffect(() => {
    if (!classement){
      const fetch = async () => {
        const result = await axios.get("https://rivandy.com:3003/game/GetRanking");
        setRank(result.data);
      }
      fetch();      
    }
    
  });


  const result =  classement && classement.map((joueur) => {
    cpt++;
    return(
    <tr>
      <td key={cpt}>#{cpt}</td>
      <td className="rankingTeamName"><a target="_blank" href={joueur.steamprofile}><img src={joueur.avatarId}></img></a></td>
      <td><a target="_blank" href={joueur.steamprofile}>{joueur.username}</a></td>
      <td>{joueur.win} - {joueur.lose}</td>
      </tr>
    )
  });


  return (
        [<section id="main-section" className='maxHeight separator'>
        <Fade><img id="bg-1" className={settings.factionSelected === 1 || settings.factionSelected === 0 ? null:'dark'} src="./img/bg2.png"></img></Fade>
          <section id="universe-section">
            <img id="logo" src="./img/rivandy-s.png"></img>
            <section>
              <table id="tableRank" cellspacing="0">
              <tr><th>Place</th><th></th><th>Name</th><th>W - L</th></tr>
              {result}
            </table>
            </section>
          </section>
        </section>]
  );
}

export default Ranking;
