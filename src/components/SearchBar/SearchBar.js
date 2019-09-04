import React, { Component } from "react";

class SearchBar extends Component {
  state = { input: "" };

  onChangeHandler = e => {
    this.setState({ input: e.target.value });
  };

  onFormSubmit = e => {
    this.props.onFormSubmit(this.state.input);

    e.preventDefault();
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label htmlFor="videoSearch">Search </label>
          <input
            type="text"
            name="videoSearch"
            value={this.state.input}
            onChange={this.onChangeHandler}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
