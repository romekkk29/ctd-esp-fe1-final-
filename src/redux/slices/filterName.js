import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const URL_CHARACTER_NAME='https://rickandmortyapi.com/api/character/?name='
export const get_character_name= createAsyncThunk('characters/get_character_name',async(namePage)=>{
        try{
            console.log(namePage)
            const response= await fetch(URL_CHARACTER_NAME+namePage.name+'&page='+namePage.page);
            const data= await response.json()
            return data
        }
        catch(error){
            console.log(error)
        }
    
})


export const getCharacterNameSlice=createSlice({
    name:'nameCharacters',
    initialState:{
        characters2:{},
        loading2:false
    },
    extraReducers:{
        [get_character_name.pending]: (state)=>{
            state.loading2=true
        },
        [get_character_name.fulfilled]: (state,action)=>{
            state.characters2=action.payload;
            state.loading2=false;
        },
        [get_character_name.rejected]: (state,action)=>{
            state.loading2=false;
        },
    }

})

export default getCharacterNameSlice.reducer