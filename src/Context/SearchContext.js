import React from 'react';

const SearchContext = React.createContext({
    namePokemon: '',
    imgPokemon: '',
    typePokemon: '',
    searched: false,
    errorSearched: false,
    searchPokemon: () => { },
    clearSearch: () => { },
    setNamePokemon: () => { }
});

export default SearchContext;