import React from "react";
const OdabraniFilmovi =({odabraniFilm, setOdabraniFilm})=>{
    const obrisi = (idx) => {
        let temp = odabraniFilm;
        temp.splice(idx, 1);
        setOdabraniFilm([...temp]);
      };

    return (
        <>
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
        </>
    )
}
export default OdabraniFilmovi;