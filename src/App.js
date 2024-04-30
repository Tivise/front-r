import './scss/rivandy.scss';
import React, { useState } from 'react';
import {useSelector } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import FooterRivandy from './FooterRivandy';
import Accueil from './Accueil';
import SteamRedirect from './SteamRedirect';
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import MoreVideo from './MoreVideo';
import Universe from './Universe';
import Ranking from './Ranking';

function App() {


    const settings = useSelector(state => state);

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    

  return (
    <Router>
        <main className={settings.factionSelected === 1 || settings.factionSelected === 0 ? 'mainR' : 'mainD'}>
        <Header />
        <Route exact path="/">
            <Accueil />
        </Route>
        <Route path="/auth/steam/return">
            <SteamRedirect />
        </Route>
        <Route path="/universe">
            <Universe />
        </Route>
        <Route path="/ranking">
            <Ranking />
        </Route>
        </main>
    </Router>
  );
}

export default App;
