import React, { useContext } from 'react';

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
    ButtonBottom,
    Text,
    Input
} from './styledSideCover';

import SearchContext from '../../Context/SearchContext';

const SideCover = () => {

    const searchContext = useContext(SearchContext);

    let contentScreen = (
        <div>
            <Text islabel>Digite o nome do Pokemon</Text>
            <Input type='text' value={searchContext.namePokemon} onChange={e => searchContext.setNamePokemon(e.target.value.toLowerCase())} />
        </div>
    )

    if (searchContext.searched) {
        contentScreen = (
            <div>
                <Text>Nome: {searchContext.namePokemon}</Text>
                <Text>Elemento: {searchContext.typePokemon}</Text>
            </div>
        )
    }

    if (searchContext.errorSearched) {
        contentScreen = (
            <div>
                <Text>Pokemon Não Encontrado</Text>
                <Text>Pressione o Botão Limpar</Text>
            </div>
        )
    }

    return (
        <>
            <Cover />
            <ColumnLeftCover />
            <ColumnRightDiagonalLeft />
            <ScreenTop>
                {contentScreen}
            </ScreenTop>
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
                <ButtonBottom onClick={searchContext.clearSearch}>Limpar</ButtonBottom>
                <ButtonBottom onClick={searchContext.searchPokemon} >Buscar</ButtonBottom>
            </RowButtomBottom>
        </>
    )
}

export default SideCover;