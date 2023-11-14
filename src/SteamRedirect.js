import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

import { useDispatch } from 'react-redux';
import { changeSteamID } from './redux/actions/index';

import axios from 'axios';


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

    axios.get(`https://rivandy.com:3002/GetSteamUserInformation?steamID=${steamID}`)
    .then((response) => {
      const userInfo = response.data;
      console.log(userInfo);
      handleChangeSteamID(userInfo);
      setRedirect(true);
    })
    .catch((error) => {
      console.error(error);
    });
  });


  if(redirect){
    return <Redirect to="/"></Redirect>
  }
  else{
    return <p></p>
  }

}

export default SteamRedirect;