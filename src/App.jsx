import logo from './logo.svg';
import './App.css';
import Component from "./components/Componente"
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </section>

        <section>
          <Component msg="hola soy un componente" />
          <hr />
          <Propiedades
            cadena="esto es una cadena"
            numero={18}
            booleano={true}
            objeto={{ nombre: "Axel", apellido: "Bresanovich" }}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
        </section>
      </header>
    </div>
  );
}

export default App;
