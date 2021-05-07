import styled from 'styled-components';

export const CircleButtomLeft = styled.div`
    width: 40px;
    height: 40px;
    background-color: #0d0d0d;
    border-radius: 50%;
    box-shadow: 3px 2px black;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-left: 10%;
    height: 130px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${props => props.top ? '50px' : null};
`;

export const LineButtom = styled.div`
    width: 50px;
    height: 10px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: ${props => props.red ? '#710214' : '#045982'};
    margin-right: 5px;
`;

export const ScreenGreen = styled.div`
    width: 100px;
    height: 60px;
    background-color: #51ae5f;
    border-radius: 5px;
    border: 1px solid black;
    box-sizing: border-box;
    margin: -50px 0 0 5px;
`;

export const ButtonTopAndBottom = styled.div`
    width: 35px;
    height: 35px;
    background-color: #0d0d0d;
    border-radius: 5px;
    margin: ${props => props.top ? '0 0 -5px 38px' : '-5px 0 0 38px'};
`;

export const ButtonLeftAndRight = styled.div`
    width: 110px;
    height: 30px;
    background-color: #0d0d0d;
    border-radius: 5px;
`;