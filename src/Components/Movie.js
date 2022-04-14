import React, { Component } from "react";

class Movie extends Component {
  state = {};
  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props;
    return (
      <div key={imdbID} className="card">
        <div className="card-img">
          <img src={Poster} alt="" />
        </div>
        <div className="card-info">
          <p>
            <span className="publish">Type:</span> {Type}
          </p>
          <h3>
            <span className="publishTitle">Name:</span> {Title}
          </h3>
          <p>
            <span className="publish">Published:</span> {Year}
          </p>
        </div>
      </div>
    );
  }
}

export default Movie;
