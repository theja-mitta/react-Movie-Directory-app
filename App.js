import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


class App extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.state = {
      movieName: '',
      ratings: '',
      duration: '',
      isValidated: false,
      items: [],
      filteredItems: []
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

  onSearchHandle = e => {
    if(this.searchInput.current.value.length > 1 && this.state.items.length) {
      this.movieSearch();
    } else if(this.searchInput.current.value.length <= 1) {
      this.setState({
        filteredItems: []
      })
    }
  }

  movieSearch() {
    this.setState({
      filteredItems: this.state.items.filter(movie => {
        if(movie.movieName.startsWith(this.searchInput.current.value)) {
          return true;
        }
          return false;
      })
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
      <div className="app">
        <Form 
          onHandleSubmit={this.onHandleSubmit} 
          onMovieChange={this.onMovieChange} 
          onRatingsChange={this.onRatingsChange} 
          onDurationChange={this.onDurationChange}
          formValues={this.state}
        />
        
        <div id="search-input">
            <label>Search</label>
            <input type="text" id="name-input"   
            placeholder="Enter movie name" 
            onChange={this.onSearchHandle} 
            ref={this.searchInput} />
            <div className="search-result">
              {(this.state.filteredItems.length) ? <span class="success">{this.state.filteredItems.length} searches found</span> : <span className="error">No search made yet!!!</span>}
            </div>
        </div>

        <div id="directory-table">
          <TableHeader />
          <TableBody items={this.state.items} filteredItems={this.state.filteredItems}/>
        </div>

        <div id="no-result">
          {this.state.items.length ? '' : <span className="error">NO MOVIES FOUND !!!</span>}
        </div>
      </div>
    );
  }
}

export default App;