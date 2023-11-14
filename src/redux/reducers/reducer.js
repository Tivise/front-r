const initialState = {
    factionSelected: 1,
    languageSelected: 'en'
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_FACTION_SELECTED":
            return{
                ...state,
                factionSelected: action.factionSelected,   
        };

        case "CHANGE_LANGUAGE_SELECTED":
            return{
                ...state,
                languageSelected: action.languageSelected,   
        };

        case "STEAM_ID":
            return{
                ...state,
                steamId: action.steamID,   
        };
        default:
            return state;
    }
  };
  
  export default reducer