import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import theme from '../../Assets/Styles/theme';

export const TrolleyIconBox = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: ${theme.colors.primary};
`;

export const FontAwesomeIconReservation = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: ${theme.colors.primary};
`;

const TrolleyIcon = ({ onClick }) => {
  return (
    <TrolleyIconBox onClick={onClick}>
      <FontAwesomeIconReservation icon={faShoppingCart} />
    </TrolleyIconBox>
  );
};

export default TrolleyIcon;
