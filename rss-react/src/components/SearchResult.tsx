import React from 'react';

interface SearchResultProps {
  results: {
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

const SearchResult: React.FC<SearchResultProps> = ({
  results,
  error,
  loading,
}) => {
  return (
    <div className="bottom-section">
      {loading ? (
        <p>Loading data ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : results.length === 0 ? (
        <p>Nothing found</p>
      ) : (
        results &&
        results.map((result, index) => (
          <div key={index} className="item">
            <h2>{result.name}</h2>
            <p>Height: {result.height}</p>
            <p>Mass: {result.mass}</p>
            <p>Hair Color: {result.hair_color}</p>
            <p>Skin Color: {result.skin_color}</p>
            <p>Eye Color: {result.eye_color}</p>
            <p>Birth Year: {result.birth_year}</p>
            <p>Gender: {result.gender}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResult;
