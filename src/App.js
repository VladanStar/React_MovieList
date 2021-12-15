import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Pretraga from "./components/Pretraga/Pretraga";
import Filmovi from "./components/Filmovi/Filmovi";
import OdabraniFilmovi from "./components/OdabraniFilmovi/OdabraniFilmovi";

function App() {
  const [searchString, setSearchString] = useState("");
  const [film, setFilm] = useState([]);
  const [strana, setStrana] = useState(1);
  const [odabraniFilm, setOdabraniFilm] = useState([]);

  useEffect(() => {
    getData();
    console.log(film);
  }, [searchString, odabraniFilm]);

  const getData = () => {
    if (searchString !== "") {
      fetch(
        `https://www.omdbapi.com/?apikey=61e73a75&s=${searchString}&page=${strana}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.Search);
          //   film = data.Search;
          setFilm(data.Search);
        })
        .catch((error) => console.log(error));
    } else {
      setFilm([]);
    }
  };

 

 

  return (
    <>
    <Pretraga filmovi ={film} setSearchString={setSearchString}/>
     
        <hr />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
               <Filmovi film ={film} odabraniFilm={odabraniFilm} setOdabraniFilm={setOdabraniFilm}/>
              </div>
            </div>
            <div className="col-md-4">
             <OdabraniFilmovi odabraniFilm ={odabraniFilm} setOdabraniFilm={setOdabraniFilm}/>
            </div>
          </div>
     
      </div>
    </>
  );
}

export default App;
