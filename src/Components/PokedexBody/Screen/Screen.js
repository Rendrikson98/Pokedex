import React, { useContext } from 'react';

import {
    BorderScreen,
    ScreenIn,
    CircleTop,
    Row,
    CircleBottom,
    Column,
    Line,
    DiagonaLine,
    ImgPokemon
} from './StyledScreen';

import SearchContext from '../../../Context/SearchContext';

const Screen = () => {

    const searchContext = useContext(SearchContext);

    return (
        <>
            <BorderScreen>
                <Row>
                    <CircleTop />
                    <CircleTop />
                </Row>
                <ScreenIn >
                    {searchContext.searched ? <ImgPokemon src={searchContext.imgPokemon} /> : null}
                </ScreenIn>
                <Row>
                    <CircleBottom />
                    <Column>
                        <Line />
                        <Line />
                        <Line />
                        <Line />
                    </Column>
                </Row>
                <DiagonaLine />
            </BorderScreen>
        </>
    )
}

export default Screen;