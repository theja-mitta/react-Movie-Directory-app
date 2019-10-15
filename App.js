import React, { Component } from 'react';
import './App.css';
import Form from './Form';
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

  onHandleSubmit = e => {
    e.preventDefault();
      this.setState({
        items: [...this.state.items, {
          movieName: this.state.movieName,
          ratings: this.state.ratings,
          duration: this.state.duration
        }],
        movieName: '',
        ratings: '',
        duration: '',
        isValidated: false
      });
  }

  render () {
    return (
      <div>
        <Form 
          onHandleSubmit={this.onHandleSubmit} 
          onMovieChange={this.onMovieChange} 
          onRatingsChange={this.onRatingsChange} 
          onDurationChange={this.onDurationChange}
          formValues={this.state}
        />
        
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