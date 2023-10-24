import React, { useState } from 'react'

function Formulario() {
    const [form, setForm]=useState({})

    const handleChange=e=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handleChecked=e=>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        })
    }

    const hanleSubmit = (e) => {
        e.preventDefault(); // Corrección: Utiliza preventDefault() con "t" minúscula
        alert("El formulario se ha enviado");
    }

  return (
    <>
    <div>
        <h2>Formulario</h2>

        {/* input text */}
        <form onSubmit={hanleSubmit} action="">
            <label htmlFor="nombre"></label>
            <input 
            type="text" id="nombre" name="nombre"
            value={form.nombre}
            onChange={handleChange} />

             {/* radio */}
            <p>Eliji tu sabor favorito</p>
            <input type="radio" name="sabor" id="vanilla" value="vanilla" onChange={handleChange} defaultChecked/>
            <label htmlFor="vanilla">Vanilla</label>
            <input type="radio" name="sabor" id="react" value="react" onChange={handleChange}/>
            <label htmlFor="react">React</label>
            <input type="radio" name="sabor" id="angular" value="angular" onChange={handleChange}/>
            <label htmlFor="angular">Angular</label>
            
            {/* select */}
            <p>Eleji tu lenguaje de programacion favorito</p>
            <select name="lenguaje" onChange={handleChange}
                defaultValue="">
                <option value=""></option>
                <option value="js">Javascript</option>
                <option value="py">Python</option>
                <option value="php">Php</option>
                <option value="go">Go</option>
                <option value="rb">Ruby</option>
            </select>

                <br />
                {/* checkbook */}
                <label htmlFor="terminos">acepto terminos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked} />

                {/* submit */}
                <input type="submit" />
        </form>
    </div>
    </>
  )
}

export default Formulario;


// !!!!!version sencilla!!!!!!

// import React, { useState } from 'react'

// function Formulario() {
//     const [nombre, setNombre]=useState("")
//     const [sabor, setSabor]=useState("")
//     const [lenguaje, setLenguaje]=useState("")
//     const [terminos, setTerminos]=useState(false)

//     const hanleSubmit = (e) => {
//         e.preventDefault(); // Corrección: Utiliza preventDefault() con "t" minúscula
//         alert("El formulario se ha enviado");
//     }

//   return (
//     <>
//     <div>
//         <h2>Formulario</h2>

//         {/* input text */}
//         <form onSubmit={hanleSubmit} action="">
//             <label htmlFor="nombre"></label>
//             <input 
//             type="text" id="nombre" 
//             value={nombre}
//             onChange={(e)=> 
//             setNombre(e.target.value)} />

//              {/* radio */}
//             <p>Eliji tu sabor favorito</p>
//             <input type="radio" name="sabor" id="vanilla" value="vanilla" onChange={e=>setSabor(e.target.value)} defaultChecked/>
//             <label htmlFor="vanilla">Vanilla</label>
//             <input type="radio" name="sabor" id="react" value="react" onChange={e=>setSabor(e.target.value)}/>
//             <label htmlFor="react">React</label>
//             <input type="radio" name="sabor" id="angular" value="angular" onChange={e=>setSabor(e.target.value)}/>
//             <label htmlFor="angular">Angular</label>
            
//             {/* select */}
//             <p>Eleji tu lenguaje de programacion favorito</p>
//             <select name="lenguaje" onChange={e=>setLenguaje(e.target.value)}
//                 defaultValue="">
//                 <option value=""></option>
//                 <option value="js">Javascript</option>
//                 <option value="py">Python</option>
//                 <option value="php">Php</option>
//                 <option value="go">Go</option>
//                 <option value="rb">Ruby</option>
//             </select>

//                 <br />
//                 {/* checkbook */}
//                 <label htmlFor="terminos">acepto terminos y condiciones</label>
//                 <input type="checkbox" name="terminos" id="terminos" onChange={e=>setTerminos(e.target.checked)} />

//                 {/* submit */}
//                 <input type="submit" />
//         </form>
//     </div>
//     </>
//   )
// }

// export default Formulario
