import React, { useState, useEffect } from 'react'

const initialForm={
    name:"",
    constelacion:"",
    id:null,
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm]=useState(initialForm)

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const hanleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const hanleSubmit=(e)=>{
        e.preventDefault();
    
            if(!form.name || !form.constelacion){
                alert("datos incompletos");
                return;
        }


        if(form.id===null){
            createData(form)
        }else{
            updateData(form)
        }
        hanleReset()
    }

    const hanleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null)
    }


  return (
    <div>
        <h3>{dataToEdit ? "editar":"agregar"}</h3>
        <form onSubmit={hanleSubmit}>
            <input type="text" name="name" placeholder='nombre' onChange={hanleChange} value={form.name}/>
            <input type="text" name="constelacion" placeholder='constelacion' onChange={hanleChange} value={form.constelacion}/>
            <input type="submit" value="enviar"/>
            <input type="reset" value="limpiar" onClick={hanleReset}/>


        </form>
    </div>
  )
}

export default CrudForm