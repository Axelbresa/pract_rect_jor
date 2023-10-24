import { useState } from 'react'

function Login() {
    return (
        <div>
            <h3>Login</h3>
        </div>
    )
}

function Logout() {
    return (
        <div>
            <h3>Logout</h3>
        </div>
    )
}

function RenderizadoCondicional() {
    const [session] = useState(true);

    return (
        <div>
            <h1>Renderizado Condicional</h1>
            {session ? <Login /> : <Logout />}
        </div>
    )
}

export default RenderizadoCondicional