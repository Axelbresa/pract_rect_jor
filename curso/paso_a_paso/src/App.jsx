import logo from './logo.svg';
import './App.css';
import Component from "./components/p14_clases/Componente"
import Propiedades from './components/p14_clases/Propiedades';
import Estado from './components/p14_clases/Estado';
import RenderizadoCondicional from './components/p14_clases/RenderizadoCondicional';
import RenderizadoElementos from './components/p14_clases/RenderizadoElementos';
import EventosBiding from './components/p14_clases/EventosBiding';
import {Eventos_property_E6, Eventos_property_E7} from './components/p14_clases/Eventos_property';
import Eventos_sinteticos from './components/p14_clases/Eventos_sinteticos_nativo';
import { Padre } from './components/p14_clases/Comunicacion_componentes';
import Ciclo_vida from './components/p14_clases/Ciclo_vida';
import Peticiones_ajax_api from './components/p14_clases/Peticiones_ajax_api';
import State from './components/p_h/useState';
import EfectScroll from './components/p_h/useEfect';
import EfectReloj from './components/p_h/efectReloj';
import Peticones_hooks from './components/p_h/Peticones_hooks';
import Formulario from './components/p_h/Formulario';

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
          <EventosBiding/>
          <hr />
          <Eventos_property_E6/>
          <Eventos_property_E7/>
          <hr />
          <Eventos_sinteticos/>
          <hr />
          <Padre/>
          <hr />
          <Ciclo_vida/>
          <hr />
          <Peticiones_ajax_api/>
          <hr />
          <h2>Hooks</h2>
          <State/>
          <hr />
          <EfectScroll/>
          <hr />
          <EfectReloj/>
          <hr />
          <Peticones_hooks/>
          <hr />
          <Formulario/>
          <hr />
        </section>
      </header>
    </div>
  );
}

export default App;
