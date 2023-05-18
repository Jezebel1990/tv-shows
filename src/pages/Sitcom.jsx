import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { BsFillFileEarmarkTextFill } from 'react-icons/bs';

import { TbLanguage, TbWorld } from 'react-icons/tb';

import { MdDateRange, MdMovieFilter } from 'react-icons/md';
import SitcomCard from "../components/SitcomCard";

import './Sitcom.css'

const series = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Sitcom = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  const getSerie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSerie(data);
  };

const convertDate = (dateCurrency) => {
  const dateParts = dateCurrency.split('-');
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];
    const brazilianDate = `${day}/${month}/${year}`;
    return brazilianDate;
}




  useEffect(() =>{
    const sitcom = `${series}${id}?${apiKey}`;
    getSerie(sitcom);
  },[]);

    return (
      <div className="sitcom-page">
        {serie && (
        <>
        <SitcomCard serie={serie} showLink={false} />
        <p className="tagline">{serie.tagline}</p>

        <div className="info">
        <h3>
          <MdMovieFilter /> Nome original:
        </h3>
      <p>{serie.original_name}</p>
      </div>


<div className="info">
  <h3>
    <TbWorld /> País de origem:
  </h3>
<p>{serie.origin_country}</p>
</div>

<div className="info">
  <h3>
    <TbLanguage /> Idioma:
  </h3>
<p>{serie.original_language}</p>
</div>

<div className="info">
  <h3>
    <MdDateRange /> Primeiro episódio:
  </h3>
<p>{convertDate(serie.first_air_date)}</p>
</div>

<div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{serie.overview}</p>
          </div>

        </>
    )}
    </div>
    );
    
  
};

export default Sitcom;