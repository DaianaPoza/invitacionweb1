import "./Eventos.css";

function Evento({ icon, tipo, lugar, hora, direccion, ciudad, mapUrl }) {
  return (
    <div className="evento">
      <div className="evento__icon">{icon}</div>

      <p className="evento__tipo">{tipo}</p>
      <h2 className="evento__lugar">{lugar}</h2>

      <p className="evento__info">{hora}</p>
      <p className="evento__info">{direccion}</p>
      <p className="evento__info">{ciudad}</p>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="evento__btn"
      >
        Cómo llegar
      </a>
    </div>
  );
}

function Eventos() {
  return (
    <section className="eventos">
      <Evento
        icon={<span className="icon">💍</span>}
        tipo="Ceremonia"
        lugar="Basílica del Santísimo Sacramento"
        hora="20:00 hs"
        direccion="San Martín 1035"
        ciudad="CABA"
        mapUrl="https://www.google.com/maps/place/Bas%C3%ADlica+del+Sant%C3%ADsimo+Sacramento/@-34.5955499,-58.394855,14z/data=!3m1!4b1!4m6!3m5!1s0x95bccad316089dfb:0xf4e3243dcaf17213!8m2!3d-34.595587!4d-58.3742983!16s%2Fg%2F120n2tz6?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
      />

      <div className="eventos__divider" />

      <Evento
        icon={<span className="icon">🥂</span>}
        tipo="Fiesta"
        lugar="Hotel Hilton Buenos Aires"
        hora="21:00 hs"
        direccion="Macacha Güemes 351"
        ciudad="CABA"
        mapUrl="https://www.google.com/maps/place/Hotel+Hilton+Buenos+Aires/@-34.605662,-58.3841159,14z/data=!3m2!4b1!5s0x95a3352ee7a49941:0x288c9bfe63bf2c97!4m9!3m8!1s0x95a335ef4809ceef:0x3945c8c351477a54!5m2!4m1!1i2!8m2!3d-34.605699!4d-58.3635592!16s%2Fm%2F064mb0g?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
      />
    </section>
  );
}

export default Eventos;

