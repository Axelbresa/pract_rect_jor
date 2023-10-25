import React from 'react'
import PropTypes from 'prop-types'

function Propiedades(props) {
    return (
        <div>
            <h2> {props.porDefecto} </h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "verdadero" : "falso"}</li>
                <li>{props.objeto.nombre + "." + props.objeto.apellido}</li>
            </ul>
        </div>
    )
}

Propiedades.defaultProps = {
    porDefecto: "las props"
}

Propiedades.propTypes = {
    numero: PropTypes.number,
}

export default Propiedades