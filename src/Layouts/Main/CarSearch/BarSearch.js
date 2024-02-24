
import ReservationSearch from './BarSearch/ReservationSearch'
import CarSlider from './BarSearch/CarSlider'
import styled from 'styled-components'

function NumberSearch() {
 
  return (
    <StyledBarSearch>
    <ReservationSearch/>
    <CarSlider/>
    </StyledBarSearch>
  );
}

export default NumberSearch;

const StyledBarSearch = styled.div`

@media (min-width: 768px) {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 60px;
}

`;