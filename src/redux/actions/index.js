export const changeFactionSelected = (newFactionSelected) => {
    return {
      type: 'CHANGE_FACTION_SELECTED',
      factionSelected: newFactionSelected
    };
  };
  
  export const changeLanguageSelected = (newLanguageSelected) => {
    return {
      type: 'CHANGE_LANGUAGE_SELECTED',
      languageSelected: newLanguageSelected
    };
  };

  export const changeSteamID = (newSteamID) => {
    return {
      type: 'STEAM_ID',
      steamID: newSteamID
    };
  };
