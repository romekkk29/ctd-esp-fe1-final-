import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritos: []
  }
export const favoritosSlice=createSlice({
    name:'favoritos',
    initialState,
    reducers:{
        guardarFavorito:(state,action)=>{
                state.favoritos=[...state.favoritos,action.payload]

        },
        eliminarFavorito:(state,action)=>{
                
                
                const index = state.favoritos.findIndex( x => x.id === action.payload );
                console.log(action.payload)
                state.favoritos.splice( index, 1 );
        },
        eliminarFavoritos:(state)=>{
          
            state.favoritos=[]
        }
    }

})

export const {guardarFavorito, eliminarFavorito,eliminarFavoritos}=favoritosSlice.actions
export default favoritosSlice.reducer