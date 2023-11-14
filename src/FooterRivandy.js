import './scss/rivandy.scss';
import React from 'react';
import {useSelector } from 'react-redux';
import Zoom from 'react-reveal/Zoom';

const FooterRivandy = () => {
  const settings = useSelector(state => state);

  return (

    <footer>
        <section id="left" className='flex column'>
            <img id="smallLogo" src="./img/rivandy-s.png"></img>
            <p>Rivandy 2023</p>
        </section>
        <ul id="center">
            <li><a target='_blank' href="https://youtube.com/@tivise5314">Youtube</a></li>
            <li><a target='_blank' href="https://discord.gg/RmubB8KhRW">Discord</a></li>
            <li><a href="mailto:contact@thomaspazder.fr">Contact</a></li>
        </ul>
        <section id="right"></section>
    </footer>
  );
}

export default FooterRivandy;
