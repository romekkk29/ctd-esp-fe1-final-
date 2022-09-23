import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const URL_CHARACTER_PAGE='https://rickandmortyapi.com/api/character/?page='
export const get_character_page= createAsyncThunk('characters/get_character_page',async(number)=>{
        try{
            const response= await fetch(URL_CHARACTER_PAGE+number);
            const data= await response.json()
        
            return data
        }
        catch(error){
            console.log(error)
        }
    
})


export const getCharacterSlice=createSlice({
    name:'pageCharacters',
    initialState:{
        characters:{},
        loading:false
    },
    extraReducers:{
        [get_character_page.pending]: (state)=>{
            state.loading=true
        },
        [get_character_page.fulfilled]: (state,action)=>{
            state.characters=action.payload;
            state.loading=false;
        },
        [get_character_page.rejected]: (state,action)=>{
            state.loading=false;
        },
    }

})

export default getCharacterSlice.reducer