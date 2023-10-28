import React, { ChangeEvent, Component } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

interface SearchBarState {
  searchTerm: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('search') || '',
    };
  }

  handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    this.props.onSearch(searchTerm.trim());

    localStorage.setItem('search', searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className="top-section">
        <input
          type="text"
          value={searchTerm}
          onChange={this.handleSearchInputChange}
          placeholder={searchTerm}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
