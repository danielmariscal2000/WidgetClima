import React from 'react'
import style from "./weatherForm.module.css"
function WatherForm({onChangeCity}) {
    const [city,setCity]=React.useState("");
    
    function onChange(e){
        const value=e.target.value;
        if (value!==""){
            setCity(value);
        }
    } 
    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} className={style.form} placeholder='Busca tu Ciudad' />
    </form>
  )
}

export default WatherForm