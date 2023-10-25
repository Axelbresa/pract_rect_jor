import React, { Component } from 'react';

function EstadoHijo(props) {
    return (
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <h2>Estado</h2>
                <p>Contador: {this.state.contador}</p>
                <p>estado hijo:
                    <EstadoHijo contadorHijo={this.state.contador} />
                </p>
            </div>
        );
    }
}
