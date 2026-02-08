import { useState } from 'react'
import './App.css'
import Cardheader from "./componentes/cardheader/Cardheader";
import Musica from "./componentes/musica/Musica";
import Regresiva from "./componentes/regresiva/Regresiva";
import Presentacion from "./componentes/presentacion/Presentacion";
import Eventos from "./componentes/eventos/Eventos";
import Detalles from "./componentes/detalles/Detalles";
import Rsvp from "./componentes/rsvp/Rsvp";
import Cierre from "./componentes/cierre/Cierre";

function App() {
  return (
<div>
         <Musica />
        <Cardheader />
        <Regresiva />
        <Presentacion />
        <Eventos />
        <Detalles />
        <Rsvp />
        <Cierre/>

       
        </div>
);
}

export default App;