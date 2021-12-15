import React from "react";
const Pretraga = ({filmovi, setSearchString})=>{

  const formSubmit = (event) => {
    event.preventDefault();
    setSearchString(event.target.searchString.value);
    //   console.log(event.target.searchString.value );
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
        </div>
        </>
    )
}
export default Pretraga;