import { Component } from 'react';

import './App.css';

import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

interface AppState {
  searchResults: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  }[];
  error: string | null;
  loading: boolean;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchResults: [],
      error: null,
      loading: false,
    };
  }

  handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === '') {
      this.fetchSearchResults('');
    } else {
      this.fetchSearchResults(searchTerm.trim());
    }
  };

  fetchSearchResults = (searchTerm: string) => {
    this.setState({ loading: true });
    fetch(`https://swapi.dev/api/people/?search=${searchTerm}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          this.setState({
            searchResults: data.results,
            error: null,
            loading: false,
          });
        } else {
          this.setState({
            searchResults: [],
            error: 'No results found',
            loading: false,
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({
          searchResults: [],
          error: error.message,
          loading: false,
        });
      });
  };

  render() {
    const { searchResults, error, loading } = this.state;

    return (
      <div className="container">
        <h1>Search StarWars People</h1>
        <SearchBar onSearch={this.handleSearch} />
        <SearchResult results={searchResults} error={error} loading={loading} />
      </div>
    );
  }
}

export default App;
