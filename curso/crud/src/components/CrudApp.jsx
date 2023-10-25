import React from 'react'
import {useState} from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb=[
    {
    id:1,
    name:"seiya",
    constelacion: "pegaso"
  },
  {
  id:2,
  name:"shiryu",
  constelacion:"Dragon"
  },
  {
    id:3,
    name:"shun",
    constelacion:"andromeda"
  },
  {
    id:4,
    name:"hyoga",
    constelacion:"cisne"
    },
    {
      id:5,
      name:"ikki",
      constelacion:"Fenix"
  }
  ]

const CrudApp =()=> {
  const[db, setDb]=useState(initialDb)
  const[dataToEdit, setDataToEdit]=useState(null)


  const createData=(data)=>{
    data.id=Date.now();
    setDb([...db, data])
  }

  const updateData=(data)=>{
    let newData=db.map(el=>el.id===data.id?data:el);
    setDb(newData)
  }

  const deleteData=(id)=>{
    let isDelete=window.confirm(`¿Estas seguro de que quieres eliminar este caballero con el id ${id}?`);
    if(isDelete){
        let newData=db.filter((el)=>el.id!==id);
        setDb(newData);
    }
  }


  return (
    
    <div>
        <h2>Crud app</h2>
        <CrudForm createData={createData} 
        updateData={updateData} 
        dataToEdit={dataToEdit} 
        setDataToEdit={setDataToEdit}/>

        <CrudTable data={db} 
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData} />
    </div>
    )
}

export default CrudApp