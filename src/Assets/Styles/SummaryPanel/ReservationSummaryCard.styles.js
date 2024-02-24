import styled from 'styled-components'
import { HeaderDiv, FeaturesDiv, CardContainer } from '../CarsReservationPanel/CarReservationCard.styles'
import theme from '../theme'

export const HeaderDivSummary = styled(HeaderDiv)`
    flex-basis: 33.3%;
`

export const FeaturesDivSummary = styled(FeaturesDiv)`
    flex-basis: 33.3%;
    justify-content: center;
`

export const SummaryCardContainer = styled(CardContainer)`
    position: relative;
    height: 750px;
    font-size: 16px;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        height: 387px;
        flex-direction: row;
    }
`

export const ReservationSummaryCardContainer = styled.div`
    width: 100%;
    padding: 20px 20px 0 20px;
`

export const SummarySection = styled.div`
  margin: 20px;
  padding: 0 20px;
  flex-basis: 33.3%;

  @media (min-width: 768px) {
    border-left: 2px solid ${theme.colors.primary};
  }
`;

export const SummaryTitle = styled.h3`
  text-align: center;
  color: ${theme.colors.primary};
  padding: 20px 0;
  border-top: 2px solid ${theme.colors.primary};

  @media (min-width: 768px) {
    border-top: 0;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

export const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const ItemHeader = styled.span`
    margin-bottom: 5px;
`;

export const ItemValue = styled.span`
  font-weight: bold;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    color: #000;
    font-size: 25px;  
    cursor: pointer;
    z-index: 99999999999;
    padding: 15px 10px;

    @media (min-width: 768px) {
        padding: 10px;
    }

    &:hover {
        color: #555; 
    }
`;