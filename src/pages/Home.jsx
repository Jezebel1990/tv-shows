import React from "react";
import { useState, useEffect } from "react";
import './SitcomGrid.css';
import SitcomCard from "../components/SitcomCard";

const sitcom = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

  const [series, setSeries] = useState([]);

  const getSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSeries(data.results);
  };


  useEffect(() => {
    const series = `${sitcom}top_rated?${apiKey}`;
    console.log(series);
    getSeries(series);
  }, []);


 return (
<div className="container">

    <h1 className="title"><span>Melhores séries:</span></h1>
    <div className="sitcom-container">
    {series.length === 0 && <p>Carregando...</p>}
     {series.length > 0 && series.map((serie) => <SitcomCard key={serie.id} serie={serie}/>)}
        </div>
        </div>
    );
};

export default Home;