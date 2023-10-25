import React, {useState} from 'react'

function State(props) {
    const [contador, setContador] = useState(0);
    
    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return (
    <div>
        <h3>useState</h3>
        <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        </nav>
        <p>Contador de {props.titulo}</p>
        <h3>Contador: {contador}</h3>
    </div>
    );
}
    State.defaultProps={
        titulo:"clicks"
    }
    

export default State