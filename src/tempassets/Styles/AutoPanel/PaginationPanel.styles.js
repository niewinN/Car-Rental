import styled from 'styled-components';

export const PaginationWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:90%;
    height:40px;
    margin-top:20px;
`;
export const Arrow=styled.button`
    font-size: 20px;
    width:fit-content;
    cursor: pointer;
    background-color:white;
    border:none;
`;

export const PageNumber=styled.div`
    width:fit-content;
    margin: 0 30px;
    p{
        font-size: 20px;
    }
`;
