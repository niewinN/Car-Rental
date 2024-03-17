import styled from 'styled-components'
import theme from '../theme'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999999998;
`;

export const PopupContainer = styled.div`
  position: relative;
  max-width: 500px;
  margin: 20px;
  border: none;
  border-radius: 8px;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 14px;
  background-color: #f2f4f6;
  border-top: 2px solid #333;
  padding: 20px;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.2);
  z-index: 9999999999999;
   max-height: 96vh;
    overflow-y: auto; 
`;

export const Title = styled.h3`
  color: #333;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Description = styled.p`
  color: #555;
  margin-bottom: 30px;
`;

export const PreferenceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const PreferenceTitle = styled.h4`
  margin: 0;
  color: #444;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const ToggleButton = styled(({ isActive, ...props }) => <div {...props} />)`
  position: relative;
  width: 80px;
  height: 34px;
  border-radius: 17px;
  background-color: ${({ isActive }) => isActive ? '#2ecc71' : 'gray'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${({ isActive }) => isActive ? 'flex-end' : 'flex-start'};
  padding: 0 4px;
  overflow: hidden;
  transition: justify-content 0.2s;
`;

export const Slider = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  transition: all 0.2s;
`;

export const ToggleText = styled(({ isActive, ...props }) => <span {...props} />)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  left: ${({ text }) => text === 'ON' ? '15px' : '45px'};
  transition: left 0.2s, opacity 0.2s;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
`;



export const ConfirmButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
  color: white;
  cursor: pointer;
  margin-top: 30px;
  display: block;
  width: 100%;
`;

export const PreferenceDescBox = styled.div`
    flex-basis: 70%;
`