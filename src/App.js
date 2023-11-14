import './scss/rivandy.scss';
import React, { useState } from 'react';
import {useSelector } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import FooterRivandy from './FooterRivandy';
import Accueil from './Accueil';
import SteamRedirect from './SteamRedirect';

import Particles from "react-particles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import MoreVideo from './MoreVideo';
import Universe from './Universe';

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
        <main className={settings.factionSelected == 1 || settings.factionSelected == 0 ? 'mainR' : 'mainD'}>
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
        <FooterRivandy></FooterRivandy>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: settings.factionSelected == 1 || settings.factionSelected == 0 ? "#ffd000" : "#ff0015",
                    },
                    links: {
                        color: settings.factionSelected == 1 || settings.factionSelected == 0 ? "#ffd000": "#ff0015",
                        distance: 0,
                        enable: false,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 5,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: settings.factionSelected == 1 || settings.factionSelected == 0 ? 5: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        </main>
    </Router>
  );
}

export default App;
