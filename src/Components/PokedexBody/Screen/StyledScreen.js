import styled from 'styled-components';

export const BorderScreen = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 250px;
    margin: 0 auto;
    margin-top: 50px;
    background-color: #dedede;
    border-radius: 8px;
`;

export const ScreenIn = styled.div`
    width: 250px;
    height: 150px;
    background-color: white;
    border-radius: 8px;
    border: 1px solid gray;

`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const CircleTop = styled.div`
    width: 10px;
    height: 10px;
    background-color: #b80624;
    border: 1px solid black;
    border-radius: 50%;
    margin: 0 15px 10px 15px;
`;

export const CircleBottom = styled.div`
    width: 30px;
    height: 30px;
    background-color: #b80624;
    border-radius: 50%;
    border: 1px solid black;
    margin: 10px 90px 0 0;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px -20px 0 40px;
`;

export const Line = styled.span`
    width: 50px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 8px;
    background-color: gray;
    border: 1 px solid black;
`;

export const DiagonaLine = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border: 25px solid;
    border-color: #dedede #dedede #c00d0d #c00d0d;
    margin: 200px 0 0 -250px;
`;
