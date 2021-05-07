import React from 'react';

import { Div, ColumnLeft, ColumnLeftDiagonalRight, Hinge, LineHinge } from './StyledPokedexBody';
import PokeHeader from '../PokeHeader/PokeHeader';
import Screen from './Screen/Screen';
import ButtonsBottom from './ButtonsBottom/ButtonsBottom';
import SideCover from '../SideCover/SideCover';

const PokedexBody = () => (
    <>
        <PokeHeader />
        <Div>
            <Screen />
            <ButtonsBottom />
        </Div>
        <ColumnLeft />
        <ColumnLeftDiagonalRight />
        <Hinge />
        <LineHinge top />
        <LineHinge />
        <SideCover />
    </>
)

export default PokedexBody;