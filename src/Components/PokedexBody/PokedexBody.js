import React, { useState } from 'react';

import { Div, ColumnLeft, ColumnLeftDiagonalRight, Hinge, LineHinge } from './StyledPokedexBody';
import PokeHeader from '../PokeHeader/PokeHeader';
import Screen from './Screen/Screen';
import ButtonsBottom from './ButtonsBottom/ButtonsBottom';
import SideCover from '../SideCover/SideCover';

import SearchContext from '../../Context/SearchContext';
import axios from 'axios';


const PokedexBody = () => {

    const [namePokemon, setNamePokemon] = useState('');
    const [imgPokemon, setImgPokemon] = useState('');
    const [typePokemon, setTypePokemon] = useState('');
    const [searched, setSearched] = useState(false);
    const [errorSearched, setErrorSearched] = useState(false);

    const searchPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
            .then(res => {
                setImgPokemon(res.data.sprites.front_default);
                setTypePokemon(res.data.types[0].type.name);
                setSearched(true);
                setErrorSearched(false);
            }).catch(error => {
                setErrorSearched(true);
                console.log('aqui')
            })
    }

    const clearSearch = () => {
        setSearched(false);
        setErrorSearched(false);
    }

    return (
        <>
            <SearchContext.Provider value={{
                namePokemon,
                imgPokemon,
                typePokemon,
                searched,
                errorSearched,
                searchPokemon,
                clearSearch,
                setNamePokemon
            }}>
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
            </SearchContext.Provider>
        </>
    )
}


export default PokedexBody;