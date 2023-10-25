import React, { Component } from 'react';

export default class EventosBiding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };
        this.sumar=this.sumar.bind(this);
        this.restar=this.restar.bind(this);


    }

    sumar(e){
        
        console.log("sumando")
        this.setState({
            contador:this.state.contador+1,
        })
    }

    restar(e){
        console.log("restando")
        this.setState({
            contador:this.state.contador-1,
        })
    }

    render() {
        return (
            <>
                <h2>Eventos  biding</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>

            </nav>
            <div>
                <h3>{this.state.contador}</h3>

            </div>
                </>
        );
    }
}
