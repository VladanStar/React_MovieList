import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

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

  const formSubmit = (event) => {
    event.preventDefault();
    setSearchString(event.target.searchString.value);
    //   console.log(event.target.searchString.value );
  };

  const dodaj = (idx) => {
    setOdabraniFilm([...odabraniFilm, film[idx]]);
  };
  const obrisi = (idx) => {
    let temp = odabraniFilm;
    temp.splice(idx, 1);
    setOdabraniFilm([...temp]);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={(event) => formSubmit(event)}>
          <div className="input-group mt-3 mb-3">
            <input
              type="text"
              className="form-control searchString"
              name="searchString"
              placeholder="Serach"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-primary dgmPretraga"
              type="submit"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </form>
        <hr />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {film.map((element, idx) => {
                  return (
                    <div className="col">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src={element.Poster}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{element.Title}</h5>
                          <p className="card-text">
                            Tip: {element.Type} Godina: {element.Year}
                          </p>
                          <button
                            className="btn btn-primary"
                            onClick={()=>dodaj(idx)}
                          >
                            Dodaj u korpu
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-4">
              {odabraniFilm.map((element, idx) => {
                return (
                  <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={element.Poster}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{element.Title}</h5>
                        <p className="card-text">
                          Tip: {element.Type} Godina: {element.Year}
                        </p>
                        <button
                          className="btn btn-primary"
                          onClick={()=> obrisi(idx)}
                        >
                          Obrisi
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
