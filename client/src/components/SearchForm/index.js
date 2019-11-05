import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="film"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="film"
          list="films"
          type="text"
          className="form-control"
          placeholder="Search film or tv show"
          id="film"
        />
        <datalist id="films">
          {props.films.map(film => (
            <option value={film} key={film} />
          ))}
        </datalist>
        <button href="#results" type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
