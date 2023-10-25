import React,{Component} from 'react'

function Boton(props){
    return (<button onClick={props.myOnClick}>Boton hecho de componente</button> )
}

class Eventos_sinteticos extends React.Component {
    handleClick=(e, mensaje)=>{
        console.log(e)
        console.log(e.target)
        console.log(mensaje)
        // usas native para que te aparesca los msj de javascrip y no de react
        console.log(e.nativeEvent)
        console.log(e.nativeEvent.target)
    }
    render() {
    return (
        <>
            <div>
                <h2>Eventos_sinteticos</h2>
                <button onClick={(e)=>this.handleClick(e, "hola")}>saludar</button>
                
                <Boton  myOnClick={(e)=>
                    this.handleClick(e, "hola")}></Boton>

            </div>
        </>
    );
    };
}

export default Eventos_sinteticos