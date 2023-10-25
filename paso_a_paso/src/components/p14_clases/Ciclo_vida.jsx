import React, {Component} from 'react'

export class Reloj extends Component {
    constructor(props){
        super(props);
    }
      render(){
        return <h3>{this.props.hora}</h3>

    }
}

class Ciclo_vida extends Component {
    constructor(props){
        super(props);

        this.state={
            hora:new Date().toLocaleTimeString()
        }

        this.temporizador=null;
    }

componentDidMount(){
    console.log(1, "el componente ya se encuentra en el dom")
}

componentDidUpdate(prevProps, prevState){
    console.log(2, "el componente a cambiado")
    console.log(prevProps)
    console.log(prevState)
}

componentWillUnmount(){
    console.log(3, "el componente ha sido eliminado del dom")
}

    tictac=()=>{
        this.temporizador=setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString(),
                visible:false
            })
        },1000);
    }

    iniciar=()=>{
        this.tictac();
        this.setState({
            visible:true
        })
    }

    
    detener=()=>{
        clearInterval(this.temporizador);
        this.setState({
            visible:false
        })
    }

    render(){
  return (
    <>
    <div>
        <h2>Ciclo de vida de componentes</h2> 
        {this.state.visible && <Reloj hora={this.iniciar}/>}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>    

    </div>
    </>
  )
    }
}

export default Ciclo_vida;