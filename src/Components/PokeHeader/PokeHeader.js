import React from 'react';

import {
    LeftHeader,
    RightHeader,
    DiagonalHeader,
    CircleHeader,
    CircleHeaderBack,
    CircleRed,
    CircleYellow,
    CircleGreen
} from './StyledPokeHeader';

const PokeHeader = () => (
    <>
        <LeftHeader />
        <CircleHeaderBack />
        <CircleHeader />
        <CircleRed />
        <CircleYellow />
        <CircleGreen />
        <RightHeader />
        <DiagonalHeader />
    </>

)

export default PokeHeader;