import styled, {keyframes} from 'styled-components'
import theme from '../theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStyled = styled.div`
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  min-height: 360px;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (orientation: landscape) {
    min-height: 300px;
  }

  @media (min-width: 1024px) {
    min-height: 360px;
  }

  h2 {
    color: ${theme.colors.primary};
    margin-bottom: 15px;
    padding: 15px;
    font-size: 15px;

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 12px;
    margin-bottom: 5px;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
  cursor: pointer;
  color: #000;

  &:hover {
    color: #000;
  }
`;

export const driveAnimation = keyframes`
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(470%);
  }
`;

export const AnimatedCar = styled.img`
  position: absolute;
  bottom: 18%;
  left: 0;
  width: 150px;
  animation: ${driveAnimation} 4s linear forwards;
`;