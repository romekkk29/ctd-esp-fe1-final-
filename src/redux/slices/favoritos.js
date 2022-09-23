import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritos: [],
  }
export const favoritosSlice=createSlice({
    name:'favoritos',
    initialState,
    reducers:{
        guardarFavorito:(objeto,state)=>{
                state.favoritos.push(objeto)
        },
        eliminarFavorito:(state)=>{
        },
        listarFavorito:(state)=>{
          

        }
    }

})

export const {guardarFavorito, eliminarFavorito,listarFavorito}=favoritosSlice.actions
export default favoritosSlice.reducer