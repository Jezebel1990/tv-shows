import { useState, useEffect } from "react";

const tvURL = import.meta.env.VITE_API;
const api_key = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topTv, setTopTv] = useState([]);
  
  const getTopRatedTv = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setTopTv(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${tvURL}top_rated?${api_key}`;
    getTopRatedTv(topRatedUrl);
  }, []);

 return (
    <div className="container">
    <h2 className="title">Melhores séries:</h2>
    <div className="sitcom-container">
    {topTv.length === 0 && <p>Carregando...</p>}
     {topTv.length > 0 && topTv.map((tv) => <p>{tv.name}</p>)}
        </div>
        </div>
    );
};

export default Home;