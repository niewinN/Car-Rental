import styled from 'styled-components';
import theme from '../../../Assets/Styles/theme';

export const StyledTileParameter = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
/* max-width: 400px */
/* flex-basis: 55%; */
max-width: 420px;
margin: 5% auto;

@media (min-width: 768px){
    margin: 10px;
}

@media (min-width: 1024px) {
  margin-left: 40px;
}
`;

export const StyledLine = styled.div`
height: 0.2rem;
width: 95%;
margin: 2.5%;
background-color: ${theme.colors.primary};
cursor: pointer;

@media (min-width:768px){
    width: 100%;
    margin: 2.5% 0;
}
`;

export const StyledFilterParameter = styled.div`
/* width: 35vw; */
flex-basis: 45%;
background-color: ${theme.colors.primary};
/* margin: 1rem 5% 1rem 10%; */
margin: 10px;
border-radius: 10px;
color: white;
text-align: center;
flex-direction: column;
display: none;


@media (min-width:768px){
    display: flex;
}

@media (min-width: 1024px) {
  margin-right: 40px;
}
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  overflow: hidden;
`;

export const Category = styled.div`
  margin: 10px 0;
  width: 100%;
`;

export const CategoryTitle = styled.div`
  
  font-weight: bold;
  text-align: center;
  font-size: 1.6rem;
  margin: 20px 0;
`;

export const Label = styled.label`
  display: flex;
  align-items: center; 
  margin: 15px;
  font-size: 1.4rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  margin-right: 17px;
  border: 1px solid #ccc;
  background-color: transparent;
  border-radius: 50%;
`;