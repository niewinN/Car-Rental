import styled from 'styled-components'
import theme from '../theme'
import { Link } from 'react-router-dom';

export const SummaryCardsTitle = styled.div`
    font-size: 16px;
    padding: 20px 20px 0 20px;
    color: ${theme.colors.primary};
`

export const ReservationSummaryCardLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  padding: 20px;
  font-size: 16px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }

  &:hover {
    color: ${theme.colors.lightGray};
  }
`;