import React from 'react';

export default function Form(props) {
  return (
    <form className="form"  onSubmit={props.onHandleSubmit}>
        <div>
          <label>Movie Name</label>
          <input type="text" id="name-input" onChange={props.onMovieChange} required/>
        </div>
        <div>
          <label>Ratings</label>
          <input type="number" id="ratings-input" onChange={props.onRatingsChange} min="0" max="10" step="1" required/>
        </div>
        <div>
          <label>Duration</label>
          <input type="number" id="duration-input" onChange={props.onDurationChange} min="0" max="5" step="1" required/>
        </div>
        <button id="submit-button">Submit</button>
    </form>
  );
};