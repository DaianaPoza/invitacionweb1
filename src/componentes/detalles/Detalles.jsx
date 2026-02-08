import Accordion from "react-bootstrap/Accordion";
import "./Detalles.css";

function Detalles() {
  return (
    <section className="detalles">
      <h1 className="detalles__title">Acá te contamos todos los detalles…</h1>

      <Accordion className="detalles__acc" flush alwaysOpen={false}>
        <Accordion.Item eventKey="0" className="detalles__item">
          <Accordion.Header>Dress Code</Accordion.Header>
          <Accordion.Body>
            Elegante sport
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="detalles__item">
          <Accordion.Header>Regalo</Accordion.Header>
          <Accordion.Body>
            Tu presencia es lo más importante. Si deseás regalarnos algo, podés hacerlo por alias: <b>ALIAS: mariayfelipe</b>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" className="detalles__item">
          <Accordion.Header>Música para la fiesta</Accordion.Header>
          <Accordion.Body>
          Si hay una canción que no puede faltar, podés sumarla para que suene en la fiesta
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className="detalles__item">
          <Accordion.Header>Niños</Accordion.Header>
          <Accordion.Body>
          Esperamos que puedan acompañarnos y disfrutar de una noche pensada solo para adultos
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default Detalles;
