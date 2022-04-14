import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
  };
   
    onchange = (e) => {
        this.setState({
            search: e.target.value,
        })
    }

    handleTeaxt = (e) => {
        if (e.key === "Enter") this.props.searchMovies(this.state.search);
    }
    
  render() {
    const { search } = this.state;
    return (
      <div className="search-bar">
        <input
          type="search"
          name="search"
          autoComplete="off"
          value={search}
          required
                onChange={this.onchange}
                onKeyUp={this.handleTeaxt}
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </div>
    );
  }
}

export default SearchBar;
