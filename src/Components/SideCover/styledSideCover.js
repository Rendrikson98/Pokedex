import styled from 'styled-components';

export const Cover = styled.div`
    position:absolute;
    width: 400px;
    height: 460px;
    background-color: #c00d0d;
    margin: 240px 0 0 900px;
    border-bottom-right-radius:85px 60px;
    z-index: 2;
`;

export const ColumnLeftCover = styled.div`
    position: absolute;
    width: 200px;
    height: 90px;
    background-color: #c00d0d;
    margin: -250px -700px 0 0;
    border-top-right-radius: 125px 90px;
    z-index: -1;
`;

export const ColumnRightDiagonalLeft = styled.div`
    position: absolute;
    width: 80px;
    height: 120px;
    background-color:#c00d0d;
    margin: -220px -845px 0 0;
    transform: skew(55deg);
    z-index: 1;
`;

export const ScreenTop = styled.div`
    position:absolute;
    width: 300px;
    height: 80px;
    background-color: white;
    color: black;
    border-radius: 8px;
    margin: -40px -900px 0 0;
    text-align: center;
    z-index: 2;
`;

export const Text = styled.p`
    font-size: 1rem;
    font-weight: 500;
    margin: ${props => props.islabel ? '10px 0 0 10px' : '18px 0 -13px 10px'};
`;

export const Input = styled.input`
    width: 250px;
    height: 20px;
    margin: 4px 0 0 10px;
`;

export const RowMiddle = styled.div`
    position: absolute;
    display: flex;
    flex-direction:row;
    margin: ${props => props.top ? '150px  0 0 900px' : '210px 0 0 900px'};
    width: 310px;
    height: 62px;
    z-index: 2;
    box-shadow: ${props => props.top ? '0 2px #196ca2' : null} ;
    
`

export const BottonsMiddle = styled.div`
    width:60px;
    height:30px;
    background-color: #28aafd;
    border: 1px solid black;
    box-shadow: ${props => props.last ? '1px 0 #196ca2' : null} ;
`

export const RowButtom = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    margin: ${props => props.top ? '250px  0 0 1110px' : '400px 0 0 700px'} ;
    width: ${props => props.top ? '120px' : null};
    z-index: 2;
`;

export const LineButtom = styled.div`
    width: 50px;
    height: 10px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: black;
    margin-right: 5px;
`;

export const ButtonWhite = styled.div`
    width:50px;
    height:50px;
    background-color: #dedede;
    border: 1px solid black;
    box-shadow: ${props => props.last ? '1px 0 #196ca2' : null} ;
    box-shadow: 1px 1px #a2a2a2;
`;

export const CircleYellow = styled.div`
    position:absolute;
    width:40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(143deg, rgba(255,228,64,1) 16%, rgba(159,139,15,1) 75%);
    margin: 400px 0 0 1150px;
    z-index: 2;
`;

export const RowButtomBottom = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 310px;
    height: 60px;
    margin: 570px 0 0 905px;
    z-index: 2;
`;

export const ButtonBottom = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 2px;
    background-color: #002e29;
    color:white;
    text-align: center;
    cursor: pointer;
`;

