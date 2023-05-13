import React from "react";
import { useState, useEffect } from "react";
import SitcomCard from "../components/SitcomCard";

const Home = () => {

  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function fetchSeries() { 
       const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=b2a49b74bfee5799329f864836528f88`);
       const data = await response.json();
     setSeries(data.results);
  }

fetchSeries();
  }, []);

 return (
<div className="container">
    <h2 className="title">Melhores séries:</h2>
    <div className="sitcom-container">
    {series.length === 0 && <p>Carregando...</p>}
     {series.length > 0 && series.map((serie) => <SitcomCard key={serie.id} serie={serie}/>)}
        </div>
        </div>
    );
};

export default Home;