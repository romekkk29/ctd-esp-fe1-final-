import './paginacion.css';
import { useDispatch,useSelector } from "react-redux";
import {sum,res,setear} from "../../redux/slices/pageSlice";
import { useEffect, useState } from 'react';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
   
    const {characters2,loading2}=useSelector((state)=>state.filterByName)
    const [max,setMax]=useState("")
    const dispatch=useDispatch()
    const suma=()=>{
        dispatch(sum())
    }
    const resta=()=>{
        dispatch(res())
    }
    const getCount=useSelector((state)=>state.page.value)
    useEffect(()=>{
        if(characters2.info){
            setMax(characters2.info.pages)
        }else if(characters2.error){
            setMax(1)
        }
    },[characters2])
    
    return <div className="paginacion">
        <button onClick={resta} disabled={getCount===1?true:false} className={"primary"}>Anterior</button>
        <button onClick={suma} disabled={getCount===max?true:false} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;