import { icon } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';


export const SectionWrapper = styled.div`
    display: flex;
    position:relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border-radius: 0px 0px 10px 10px;
    background-color: #8a0b24;
    padding-bottom:5px;
    /* border: 2px solid rgba(1, 1, 1, 1); */
    @media (min-width: 768px){
        width: 100%;
        border-radius:0;
        padding-bottom:15px;
    }
`;

export const NameDiv=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* height: fit-content; */
    /* border: 2px solid rgba(123, 1, 166, 1); */
    p {
        color: #ffffff;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        padding:1px;
        @media (min-width: 768px){
            color: #8a0b24;
        }
    }
    @media (min-width: 768px){
        background-color: #ffffff;
        width: 500px;
        border-radius:2px;
    }
`;
export const Icon=styled.p`
    position:absolute;
    right:5%;
    width:25px;
    font-size:25px;
    color:#ffffff;
    cursor: pointer;

`;
export const Icon2 = styled(Icon)`
    left:5%;
`;
