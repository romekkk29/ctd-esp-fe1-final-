import { useEffect, useState } from 'react';
import './filtros.css';
import { useDispatch,useSelector } from "react-redux";
import { get_character_name } from "../../redux/slices/filterName";
import {sum,res,setear} from "../../redux/slices/pageSlice";

const Filtros = () => {
    const {characters2,loading2}=useSelector((state)=>state.filterByName)
    const [getName,setName]=useState("")
    const dispatch=useDispatch()
    const getCount=useSelector((state)=>state.page.value)

    const handlerChange=(e)=>{
            dispatch(setear())
            setName(e.target.value)
            dispatch(get_character_name({name:e.target.value,page:getCount}))
    }
    useEffect(()=>{
        if(characters2.info){
            if(getName.length>1){
            if(characters2.info.count===826){
                setName('')
            }}
        }
    })
    useEffect(()=>{
        dispatch(get_character_name({name:"",page:1}))
    },[])
    useEffect(()=>{
        dispatch(get_character_name({name:getName,page:getCount}))
    },[getCount])

    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" value={getName} name="nombre" onChange={handlerChange} />
    </div>
}

export default Filtros;