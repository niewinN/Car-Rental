import styled from 'styled-components'
import theme from '../theme';
import { ErrorMessage } from './CarsReservationPanel.styles';

export const CardWrapper = styled.div`
    padding: 20px;
`

export const CardContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 15px #646464;
  height: 552px;
  margin-bottom: 30px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(245, 245, 245, 0.5);
    display: ${props => props.$reserved ? 'block' : 'none'};
  }

  @media (min-width: 768px) {
    display: flex;
    height: 387px;
  }
`;

export const HeaderDiv = styled.div`
  position: relative;
  width: 100%;
  height: 238px;
  overflow: hidden;
  background-color: #fff;
  flex-basis: 50%;

  @media (min-width: 768px) {
    height: 387px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primary}; 
    clip-path: polygon(0 0, 100% 0, 0 100%);
  }
`;

export const CarImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  width: 360px;
`;

export const CarName = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 10px;
  color: black;
  font-weight: bold;
  font-size: 24px;
  color: ${theme.colors.secondary};

  @media (min-width: 768px) {
    padding: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const FeaturesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  margin: 5px 0;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 16px;
    margin: 10px 0;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const PriceDiv = styled.div`
  text-align: right;
  width: 90%;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto;
  color: ${theme.colors.primary};
  font-size: 36px;
`;

export const ReserveButton = styled.button`
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  background-color: ${theme.colors.primary};
  padding: 15px;
  font-size: 17px;
  text-transform: uppercase;
  color: white;
  border: none;
  cursor: pointer;
  opacity: ${props => props.$reserved ? 0.5 : 1};
  pointer-events: ${props => props.$reserved ? 'none' : 'auto'};
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: space-around;
`

export const AddButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    color: #0c7f4e;
    font-size: 25px;  
    cursor: pointer;
    z-index: 9998;
    padding: 15px 10px;
    opacity: ${props => props.$reserved ? 0.5 : 1};
    color: ${props => props.$reserved ? 'gray' : '#0c7f4e'};
    pointer-events: ${props => props.$reserved ? 'none' : 'auto'};

    @media (max-width: 320px) {
      padding: 25px 10px;
    }

    @media (min-width: 768px) {
        padding: 10px;
    }

    &:hover {
        color: #555; 
    } 
`

export const ErrorMessageType = styled(ErrorMessage)`
  margin-left: -2px;
  margin-right: -2px;
`

export const ReservedLabel = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(120deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 26px;
    max-width: 90%;
    width: fit-content;
    /* white-space: nowrap; */
    text-align: center;
    font-weight: bold;
    z-index: 10;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 2px solid white;

    @media (min-width: 768px) {
      font-size: 36px;
    }
`;

export const RemoveButton = styled(AddButton)`
    color: ${theme.colors.primary};
    z-index: 9998;
    pointer-events: auto;
    opacity: 1;
    &:hover {
        color: gray;
    }
`;
