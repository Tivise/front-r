import './scss/rivandy.scss';
import React, { useEffect, useState } from 'react';
import {useSelector } from 'react-redux';
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


function Header() {

  const location = useLocation();
  const { pathname } = location;
  const settings = useSelector(state => state);


  return (
        <header id="menu-rivandy">
        <Bounce top cascade>
          <section id="m-left">
            <a href=""><img id={settings.factionSelected === 1 || settings.factionSelected === 0 ? "rivandy-logo": "rivandy-logoD"} src={ process.env.PUBLIC_URL + (settings.factionSelected === 1 || settings.factionSelected === 0 ? "/img/rivandy.png": "/img/rivandyd.png")}></img></a>          
          </section>

          <section id="m-center">

            <ul>
              <li><Link className={pathname === '/' ? ((settings.factionSelected === 1 || settings.factionSelected === 0 ? 'rivandy-color':'dechys-color') + ' selected-link') : null} to="/">Home</Link></li>
              <li><Link className={pathname === '/universe' ? ((settings.factionSelected === 1 || settings.factionSelected === 0 ? 'rivandy-color':'dechys-color') + ' selected-link') : null} to="/universe">Universe</Link></li>
              <li><Link className={pathname === '/news' ? ((settings.factionSelected === 1 || settings.factionSelected === 0 ? 'rivandy-color':'dechys-color') + ' selected-link') : 'disabled-link'} to="/">News</Link></li>
              <li><Link className={pathname === '/downloads' ? ((settings.factionSelected === 1 || settings.factionSelected === 0 ? 'rivandy-color':'dechys-color') + ' selected-link') : 'disabled-link'} to="/">Download</Link></li>
            </ul>
          </section>

          <section id="m-right">

            {settings.steamId == null ?
              <a id="steam-link" href="https://rivandy.com:3002/auth/steam">
                <img id="steam-icon" src={process.env.PUBLIC_URL + "/img/steam.png"}></img>
              </a> :
              <article>
                <img id="avatarImg" src={settings.steamId.avatarmedium}></img>
                <a id="avatarName" href={settings.steamId.profileurl} target="_blank">{settings.steamId.personaname}</a>
              </article>
            }
          </section>
          </Bounce>
        </header>
  );
}

export default Header;
