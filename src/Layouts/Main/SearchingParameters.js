import React, { useState } from 'react';
import TileParameter from './SearchingParameters/TileParameter';
import FilterParameter from './SearchingParameters/FilterParameter';
import styled from 'styled-components'

function SearchingParameters() {

  return (
      <StyledComponent>
        <TileParameter />
        <FilterParameter />
      </StyledComponent>
  );
}

export default SearchingParameters;

const StyledComponent = styled.section`
display: flex;
position: relative;
width: 90%;
/* border: 0.2rem solid black; */
border-radius: 10px;
box-shadow: 0px 2px 20px #646464;
margin: -3rem auto;
z-index: 0;
flex-direction: row;
justify-content: space-between;
min-height: 525px;

@media (min-width: 768px){
  margin: 5rem auto;
}
`;