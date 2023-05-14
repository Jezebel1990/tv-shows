import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SitcomCard = ({serie, showLink = true }) => {
  return (
    <div className='sitcom-card'>
<img src={`https://image.tmdb.org/t/p/w500/` + serie.poster_path} alt={serie.name}/>
    <h2>{serie.name}</h2> 
<p>
  <FaStar /> {serie.vote_average}
</p>
{showLink && <Link to={`/serie/${serie.id}`}>Detalhes
  </Link>}
    </div>
  )
}

export default SitcomCard;
