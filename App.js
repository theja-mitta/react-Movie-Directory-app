import React, { Component } from 'react';
import './App.css';
import Table from './Table';


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

  onMovieChange = (e) => {
    this.setState({
      movieName: e.target.value
    })
  }

  onRatingsChange = (e) => {
    this.setState({
      ratings: e.target.value
    })
  }

  onDurationChange = (e) => {
    this.setState({
      duration: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if(((this.state.movieName) && (this.state.ratings) && (this.state.duration)) !== '') {
      this.state.items.push({
        movieName: this.state.movieName,
        ratings: this.state.ratings,
        duration: this.state.duration
      });
      console.log(this.state.items);
      this.setState({
        movieName: '',
        ratings: '',
        duration: ''
      })
    }
  }

  renderTable() {
    return (
      <table>
        <tr>
          <th>Movie Name</th>
          <th>Ratings</th>
          <th>Duration</th>
        </tr>
      </table>
    );
  }

  //  renderResult() {
  //   this.state.items.map(item => <div>{item.movieName}</div>);
  // }

  render () {
    return (
      <div>
        <form className="form"  onSubmit={this.handleSubmit}>
            <div><label>Movie Name</label><input type="text" id="name-input" onChange={this.onMovieChange}/></div>
            <div><label>Ratings</label><input type="text" id="ratings-input" onChange={this.onRatingsChange}/></div>
            <div><label>Duration</label><input type="text" id="duration-input" onChange={this.onDurationChange}/></div>
            <button id="submit-button">Submit</button>
        </form>
        
        <div id="search-input">
            <label>Search</label>
            <input type="text" id="name-input" />
        </div>
        <div id="directory-table">
          {this.renderTable()}
          {this.state.items.map(item => <div>{item.movieName},{item.ratings},{item.duration}</div>)}
        </div>
      </div>
    );
  }
}

export default App;