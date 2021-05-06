import styled from 'styled-components';

export const Div = styled.div`
    width: 400px;
    height: 460px;
    background-color: #c00d0d;
    margin: 240px 0 0 0;
    border-bottom-left-radius:85px 60px;
    z-index: 2;
`;

export const ColumnLeft = styled.div`
    position: absolute;
    width: 200px;
    height: 300px;
    background-color: #c00d0d;
    margin: -25px -200px 0 0;
    border-top-left-radius: 125px 90px;
    z-index: -1;
`;

export const ColumnLeftDiagonalRight = styled.div`
    position: absolute;
    width: 80px;
    height: 120px;
    background-color:#c00d0d;
    margin: -203px -90px 0 0;
    transform: skew(-55deg);
    z-index: 1;
`;