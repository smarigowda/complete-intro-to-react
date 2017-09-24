import React from 'react';
import styled from 'styled-components';
import preload from '../data.json';
import ShowCard from './ShowCard';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Search = () => (
  <Wrapper className="search">
    { preload.shows.map(show => (
      <ShowCard key={show.imdbID} show={show} />
    ))}
  </Wrapper>
);

export default Search;
