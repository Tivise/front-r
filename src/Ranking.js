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
  const [total, setTotal] = useState(0);


  const [filterName, setFilterName] = useState('');
  const [numberPerPage, setNumberPerPage] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasError, setHasError] = useState(false);

  let cpt = 0;

  useEffect(() => {
      const fetch = async () => {
        await axios.get(`https://rivandy.com:3003/game/GetRanking?pageNumber=${pageNumber}&filterName=${filterName}&numberPerPage=${numberPerPage}`).then((result) => {
            setRank(result.data.result);
            setTotal(result.data.total);
            setHasError(false)
        }).catch((e) => {
          setRank(null);
          setTotal(0);
          setHasError(true)
        })


      }
      fetch();      
  }, [filterName, numberPerPage, pageNumber]);

  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleNumberPerPageChange = (event) => {
    setNumberPerPage(event.target.value);
  };

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


              <aside className='filterPage'>
                <aside className='textFilter'>
                  <label>Filter</label>
                  <input type="text" value={filterName} onChange={handleFilterChange} />
                </aside>
                <aside className='numberPerPageFilter'>
                  <article>
                    { total / numberPerPage < pageNumber && pageNumber > 1? <button onClick={() => handlePageChange(pageNumber - 1)}>Previous</button> : null }
                    { pageNumber > 2 ? <button onClick={() => handlePageChange(1)}>1</button>: null}
                    { total / numberPerPage > pageNumber-1 && pageNumber > 1? <button onClick={() => handlePageChange(pageNumber - 1)}>{pageNumber - 1}</button>:null}
                    <button className='selectedPage' disabled> {pageNumber}</button>
                    { Math.ceil(total / numberPerPage) >= pageNumber+1 ?<button onClick={() => handlePageChange(pageNumber + 1)}>{pageNumber + 1}</button>: null}
                    {/* Vous pouvez ajouter autant de boutons de page supplémentaires que nécessaire */}
                    { total / numberPerPage > pageNumber ? <button onClick={() => handlePageChange(pageNumber + 1)}>Next</button> : null }

                  </article>
                  <select value={numberPerPage} onChange={handleNumberPerPageChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                  </select>

                </aside>

              </aside>


              <table id="tableRank" cellspacing="0">
              <tr className='tableTitles'><th>Place</th><th></th><th>Name</th><th>W - L</th></tr>
              {result}
              {hasError ? <p className='error'>We couldn't find any matches. Would you like to try another search?</p>: null}
            </table>
            </section>
          </section>
        </section>]
  );
}

export default Ranking;
