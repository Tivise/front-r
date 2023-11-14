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

function Universe() {


    const settings = useSelector(state => state);
  const [activeVideo, setVideoActive] = useState(false);


  return (
        [<section id="main-section" className='maxHeight separator'>
        <Fade><img id="bg-1" className={settings.factionSelected === 1 || settings.factionSelected === 0 ? null:'dark'} src="./img/bg2.png"></img></Fade>
          {activeVideo ? <Video></Video> : null }
          <section id="universe-section">
            <img id="logo" src="./img/rivandy-s.png"></img>
            <h3>Battle royale - Dungeon Crawler - In a world of reincarnation, the circle of Rivandy protects innocent souls from the corrupt Dechys</h3>
            <section>
              <h4>OVERVIEW</h4>
              <p><b>Rivandy</b> is an online Battle Royale &amp; Dungeon Crawler set in a 3D open world. The game is centred on 2 game modes: the Dungeon Crawler mode allows you to unlock creatures. The other lets you play against opponents as you climb the rankings: Battle Royale.</p>
              <ul>
                <li>Battle royale: Players are dropped onto an island/vast map where they must battle each other until only one survivor or team remains. The game must support a significant number of players simultaneously (30-100 players). The PvE Dungeons (Sanctuaries) aspect allows players to unlock reincarnations as well as exclusive rewards.</li>
                <li>Dungeon Crawler: The PvE dungeons aspect (Sanctuaries) allows players to unlock reincarnations. To obtain a reincarnation/spirit, you need to finish the dungeon without dying. To put it simply, there's an infinite variety of dungeons with a real objective and real difficulty.</li>
              </ul>
              <p>The two modes complement each other as one allows you to unlock your creatures, and the other enables you to face off against online players.</p>
              <img src="./img/modes.png"></img>
            </section>
            <section>
              <p>In this game, you play 2 characters at once: a character and a reincarnation (a spirit).  A character is a humanoid entity with 4 spells. A reincarnation is a spirit, creature or monster that also has 4 spells. The gameplay is such that the player can easily transform between his reincarnation and his entity to take advantage of its two particularities.</p>
              <img src="./img/char.gif"></img>
              <img src="./img/spirit.gif"></img>
            </section>
            <section>
              <h4>HISTORY</h4>
              <p>Every human being possesses within them a spirit called "reincarnation." Over time, humans have discovered how to transform themselves, reincarnating into various creatures and monsters. However, some individuals have developed an insatiable thirst for power, seeking to capture souls to strengthen their reincarnation and thus become the most powerful entity in the world. These souls, once gathered, can unleash immense powers and bring about cataclysmic consequences for the world. Amidst this cosmic conflict, the mystical circle of Rivandy emerges as the benevolent guardian of innocent souls, like an angel descended from the heavens. Their sacred mission is to protect the small spirits and preserve them from the corrupt ambitions of power-hungry individuals. Rivandy, an enigmatic and safe sanctuary, remains hidden from the eyes of the human world to safeguard fragile souls and maintain the balance of the world. However, dark and corrupted figures known as the Dechys have emerged. Their sole desire is to destroy Rivandy's benevolent circle and seize all souls to satisfy their thirst for absolute power. These Dechys target innocent souls and magical creatures to absorb them and increase their malevolent power. Polemos, the center of the conflict, is a mythical place where the final battle between the Rivandy circle, the corrupted Dechys, and the normal spirits unfolds every time the sun rises. It is a place where destinies intertwine, where powerful spirits clash to decide the fate of humanity and the preservation of the balance between light and darkness.</p>
              <p>Rivandy immerses you into a fantastical world where you embody a reincarnated spirit, tasked with defending innocent souls against the onslaught of malevolent Dechys. You have the choice to join the circle of Rivandy as a benevolent guardian or become a corrupted Dechy, seeking to sow chaos and absorb all souls for your own quest for power. In the competitive Battle Royale, you will fight for supremacy as either a guardian or a Dechy in mysterious arenas where scattered souls will be the keys to your power. Explore Rivandy's magical world, engage in PvE dungeons to unlock new spirits, and form alliances with other players to protect or destroy the sacred circle. As the sun rises, the epic battle for control of Polemos begins, marking the climax of the war between good and evil. Your destiny will be in your hands, and your choice will determine the future of the world of Rivandy. Rivandy is an immersive experience that blends competitive Battle Royale, PvE dungeon exploration, and an epic conflict between benevolent guardians and corrupted Dechys. Will you be the protective guardian or the corrupter of destinies? <br></br><br></br>The decision is yours. The battle for power and balance starts here.</p>
            </section>
          </section>
        </section>]
  );
}

export default Universe;
