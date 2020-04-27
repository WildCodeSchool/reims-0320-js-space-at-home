import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button type="submit" className="searchButton">
          <i className="buttonImage" />
        </button>
      </div>
    );
  }
}

export default SearchBar;
