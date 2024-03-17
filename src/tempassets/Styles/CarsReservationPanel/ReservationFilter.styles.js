import styled from 'styled-components'
import theme from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Panel = styled.div`
    padding: 20px;
`;

export const ToggleButton = styled.button`
  position: relative;
  background-color: ${theme.colors.primary};
  color: white;
  padding: 10px 20px;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  border-radius: ${props => (props.$isExpanded ? '8px 8px 0 0 ' : '8px 8px 8px 8px')};
  width: 100%;
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  transform: ${props => (props.$isExpanded ? 'rotateX(0)' : 'rotateX(180deg)')};
  transition: transform .3s;
`;


export const Options = styled.div`
  display: ${props => (props.$isExpanded ? 'block' : 'none')};
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  background-color: #f9f9f9;
`;

export const Category = styled.div`
  margin: 10px 0;
`;

export const CategoryTitle = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 1.6rem;
  margin: 16px 0;
`;

export const Label = styled.label`
  display: flex;
  align-items: center; 
  margin: 8px;
  font-size: 1.4rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 1px solid #ccc;
  background-color: transparent;
`;