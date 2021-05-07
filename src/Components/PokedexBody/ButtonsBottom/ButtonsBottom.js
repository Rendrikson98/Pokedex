import React from 'react';

import {
    CircleButtomLeft,
    Row,
    Column,
    LineButtom,
    ScreenGreen,
    ButtonTopAndBottom,
    ButtonLeftAndRight
} from './StyledButtonsBottom';

const BottonsBottom = () => (
    <>
        <Row>
            <CircleButtomLeft />
            <Column>
                <Row>
                    <LineButtom red />
                    <LineButtom />
                </Row>
                <ScreenGreen />
            </Column>
            <Column top>
                <ButtonTopAndBottom top />
                <ButtonLeftAndRight />
                <ButtonTopAndBottom />
            </Column>
        </Row>
    </>
)

export default BottonsBottom;