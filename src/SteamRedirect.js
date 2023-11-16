import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

import { useDispatch } from 'react-redux';
import { changeSteamID } from './redux/actions/index';

import axios from 'axios';

// Fonction pour extraire les paramètres de l'URL
function extractParams(url) {
  const queryString = url.split('?')[1];
  const params = new URLSearchParams(queryString);
  return Object.fromEntries(params.entries());
}


function SteamRedirect() {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleChangeSteamID= (steamID) => {
    dispatch(changeSteamID(steamID));
  };
  
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const params = queryString.parse(location.search);
    const steamID = params['openid.identity'].split('/').pop(); // Récupère le SteamID à partir de l'URL

    // Extraire les paramètres de l'URL de retour
    console.log(window.location.href);
    const openidParams = extractParams(window.location.href);
    console.log(openidParams);
    // Remplacer openid.mode=id_res par openid.mode=check_authentication
    openidParams['openid.mode'] = 'check_authentication';

    // Construire la nouvelle URL pour la vérification de l'authentification
    const verificationUrl = `https://steamcommunity.com/openid/login?${new URLSearchParams(openidParams).toString()}`;
    axios.get('https://rivandy.com:3002/auth/validate', {
      params: {
        verificationUrl: verificationUrl,
        steamID: steamID
      }
    })
    .then((response) => {
      const userInfo = response.data;
      console.log(userInfo);
      handleChangeSteamID(userInfo);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

      axios.get('https://rivandy.com:3003/game/GetGameUserInformation?steamID='+response.data.steamid)
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      })

      setRedirect(true);
    })
    .catch((error) => {
      console.error(error);
    });

  }, []);


  if(redirect){
    return <Redirect to="/"></Redirect>
  }
  else{
    return <p></p>
  }

}

export default SteamRedirect;