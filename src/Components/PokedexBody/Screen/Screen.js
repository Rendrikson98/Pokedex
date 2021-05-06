import React from 'react';

import { BorderScreen, ScreenIn, CircleTop, Row, CircleBottom, Column, Line, DiagonaLine } from './StyledScreen';

const Screen = () => (
    <>
        <BorderScreen>
            <Row>
                <CircleTop />
                <CircleTop />
            </Row>
            <ScreenIn />
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

export default Screen;