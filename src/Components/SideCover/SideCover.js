import React from 'react';

import {
    Cover,
    ColumnLeftCover,
    ColumnRightDiagonalLeft,
    ScreenTop,
    BottonsMiddle,
    RowMiddle,
    LineButtom,
    RowButtom,
    ButtonWhite,
    CircleYellow,
    RowButtomBottom,
    ButtonBottom
} from './styledSideCover';

const SideCover = () => (
    <>
        <Cover />
        <ColumnLeftCover />
        <ColumnRightDiagonalLeft />
        <ScreenTop />
        <RowMiddle top>
            <BottonsMiddle />
            <BottonsMiddle />
            <BottonsMiddle />
            <BottonsMiddle />
            <BottonsMiddle />
        </RowMiddle>
        <RowMiddle>
            <BottonsMiddle />
            <BottonsMiddle />
            <BottonsMiddle />
            <BottonsMiddle />
            <BottonsMiddle last />
        </RowMiddle>
        <RowButtom top>
            <LineButtom />
            <LineButtom />
        </RowButtom>
        <RowButtom>
            <ButtonWhite />
            <ButtonWhite />
        </RowButtom>
        <CircleYellow />
        <RowButtomBottom>
            <ButtonBottom >Limpar</ButtonBottom>
            <ButtonBottom >Buscar</ButtonBottom>
        </RowButtomBottom>
    </>
)

export default SideCover;