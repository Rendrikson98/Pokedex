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

export const Hinge = styled.div`
    position: absolute;
    width: 50px;
    height: 520px;
    background: linear-gradient(90deg, rgba(192,13,13,1) 2%, rgba(241,61,61,1) 24%, rgba(192,13,13,1) 63%, rgba(137,6,28,1) 91%);
    margin: 180px 0 0 450px;

`;

export const LineHinge = styled.div`
    position:absolute;
    width: 50px;
    height: 10px;
    background-color: rgba(0,0,0,0.3);
    margin: ${props => props.top ? '-150px 0 0 450px' : '500px 0 0 450px'};
`;