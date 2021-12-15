import React from "react";
const Filmovi = ({film, odabraniFilm, setOdabraniFilm})=>{
    const dodaj = (idx) => {
        setOdabraniFilm([...odabraniFilm, film[idx]]);
      };
    return(

        <>
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
        </>
    );

}
export default Filmovi;