import React, { Component } from "react";
import Movies from "../Components/Movies";
import SearchBar from "../Components/SearchBar";

class Main extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
      fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ede81116&s=look")
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search }));   
 }

  searchMovies = (text) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ede81116&s=${text}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  
  render() {
    return (
      <div className="container">
        <SearchBar searchMovies={this.searchMovies }/>
        <Movies movies = {this.state.movies}  />
      </div>
    );
  }
}

export default Main;
