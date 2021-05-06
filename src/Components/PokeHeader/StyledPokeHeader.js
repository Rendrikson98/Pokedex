import styled from 'styled-components';

export const LeftHeader = styled.div`
    position: absolute;
    width: 232px;
    height: 135px;
    background-color: #c00d0d;
    margin: -375px 0 0 -168px;
    box-shadow: 0 10px  #860909;
    border-bottom-right-radius: 2px;
`;

export const RightHeader = styled.div`
    position: absolute;
    width:170px;
    height: 85px;
    background-color: #c00d0d;
    margin: -425px 0 0 230px; 
    box-shadow: 0 10px #860909;
`

export const DiagonalHeader = styled.div`
    position: absolute;
    width: 80px;
    height: 52px;
    background-color: #c00d0d;
    margin: -290px 0 0 20px;
    transform: skew(-55deg);
    box-shadow: 18px 0 #860909;
`;

export const CircleHeader = styled.div`
    position: absolute;
    width: 70px;
    height: 70px;
    background: radial-gradient(circle, rgba(189,236,242,1) 3%, rgba(40,170,253,1) 45%);
    border-radius: 50%;
    margin: -375px 0 0 -260px;
`;

export const CircleHeaderBack = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid gray;
    margin: -375px 0 0 -260px;
`;

export const CircleRed = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(217,120,133,1) 0%, rgba(148,9,32,1) 69%);
    border-radius: 50%;
    margin: -420px 0 0 -120px;
`;

export const CircleYellow = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(246,239,197,1) 0%, rgba(193,179,22,1) 71%);
    border-radius: 50%;
    margin: -420px 0 0 -50px;
`;
export const CircleGreen = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(189,238,189,1) 0%, rgba(22,193,22,1) 71%);
    border-radius: 50%;
    margin: -420px 0 0 20px;
`;