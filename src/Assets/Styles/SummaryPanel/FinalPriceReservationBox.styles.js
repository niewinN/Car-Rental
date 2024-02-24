import styled from 'styled-components'
import theme from '../theme'
import { ReserveButton, PriceDiv } from '../CarsReservationPanel/CarReservationCard.styles';

export const SummaryFormTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: 50%;
`

export const FinalPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding: 20px;
`

export const FinalPrice = styled.div`
    font-size: 16px;
    margin-bottom: 5px;
    color: ${theme.colors.primary};
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 22px;
    }
`

export const FinalPriceDiv = styled(PriceDiv)`
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0;
`

export const FinalPriceBtn = styled(ReserveButton)`
    width: 50%;
    margin: 0;
    padding: 10px;
    font-size: 16px;

    &[disabled] {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }

    @media (min-width: 768px) {
        width: 25%;
    }
`

export const SummaryFormText = styled.div`
    font-size: 12px;
    font-weight: normal;
    text-align: left;

    @media(min-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 1024px) {
        font-size: 20px;
    }
`