import {configureStore,applyMiddleware} from '@reduxjs/toolkit';
import getCharacterReducer from '../slices/getCharacterSlice';
import pageReducer from '../slices/pageSlice';
import filterByNameReducer from '../slices/filterName';
import favoritosReducer from '../slices/favoritos';
const store = configureStore({
    reducer:{
        pageCharacters:getCharacterReducer,
        page:pageReducer,
        filterByName:filterByNameReducer,
        favoritos:favoritosReducer
    },
});

store.subscribe(()=>console.log(store))

export default store;