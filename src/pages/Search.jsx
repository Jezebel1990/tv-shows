import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SitcomCard from "../components/SitcomCard";

const search = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./SitcomGrid.css";

const Search = () => {
    const [searchParams] = useSearchParams();

    const [series, setSeries] = useState([]);
    const query = searchParams.get("q");

const getSearchedSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSeries(data.results);
};

       useEffect(() => {
               const searchWithQueryURL = (
                `${search}?${apiKey}&query=${query}`);
             getSearchedSeries(searchWithQueryURL);
      }, [query]);


return (
<div className="container">
 <h2 className="title">
    Resultados para: <span className="query-text">{query}</span>
 </h2>
<div className="sitcom-container">
    {series.length > 0 &&
     series.map((serie) => <SitcomCard key={serie.id} serie={serie} />)}
</div>
</div>
    );
};

export default Search;