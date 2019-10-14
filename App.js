import React, { Component } from 'react';
import './App.css';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      ratings: '',
      duration: '',
      isValidated: false,
      items: []
    }
  }

  onMovieChange = e => {
    this.setState({
      movieName: e.target.value.toLowerCase()
    })
  }

  onRatingsChange = e => {
    this.setState({
      ratings: e.target.value.toLowerCase()
    })
  }

  onDurationChange = e => {
    this.setState({
      duration: e.target.value.toLowerCase()
    })
  }

  handleSubmit = e => {
    e.preventDefault();
      this.setState({
        items: [...this.state.items, {
          movieName: this.state.movieName,
          ratings: this.state.ratings,
          duration: this.state.duration
        }]
      });
  }

  render () {
    return (
      <div>
        <form className="form"  onSubmit={this.handleSubmit}>
            <div>
              <label>Movie Name</label>
              <input type="text" id="name-input" onChange={this.onMovieChange} required/>
            </div>
            <div>
              <label>Ratings</label>
              <input type="number" id="ratings-input" onChange={this.onRatingsChange} min="0" step="1" required/>
            </div>
            <div>
              <label>Duration</label>
              <input type="number" id="duration-input" onChange={this.onDurationChange} min="0" step="1" required/>
            </div>
            <button id="submit-button">Submit</button>
        </form>
        
        <div id="search-input">
            <label>Search</label>
            <input type="text" id="name-input" />
        </div>

        <div id="directory-table">
          <TableHeader />
          <TableBody items={this.state.items}/>
        </div>

        <div id="no-result">
          {this.state.items.length ? '' : "NO MOVIES FOUND"}
        </div>
      </div>
    );
  }
}

export default App;