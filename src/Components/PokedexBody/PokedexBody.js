import React from 'react';

import { Div, ColumnLeft, ColumnLeftDiagonalRight } from './StyledPokedexBody';
import PokeHeader from '../PokeHeader/PokeHeader';
import Screen from './Screen/Screen';

const PokedexBody = () => (
    <>
        <PokeHeader />
        <Div>
            <Screen />
        </Div>
        <ColumnLeft />
        <ColumnLeftDiagonalRight />
    </>
)

export default PokedexBody;