import React from 'react';
import data from "../../helpers/data.json"
import { func } from 'prop-types';

function ElementoLista(props) {
    return (
        <li>
            <a href={props.e.web} target='_black'>{props.e.name}</a>
        </li>
    )
}

class RenderizadoElementos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ["primavera", "verano", "otoño", "invierno"]
        };
    }

    render() {
        console.log(data)
        return (
            <div>
                <h2>RenderizadoElementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((e, index) => (
                            <li key={index}>{e}</li>

                        ))
                    }
                </ol>
                <h3>Frameworks fronted javascrip</h3>
                <ul>
                    {
                        data.framewors.map(e =>
                            <ElementoLista key={e.id} e={e} />)
                    }
                </ul>
            </div>
        );
    }
}

export default RenderizadoElementos;
