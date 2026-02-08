import "./Cierre.css";

function Cierre() {
  return (
    <section className="cierre">
      <video
        className="cierre__video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
    src={`${import.meta.env.BASE_URL}videos/pareja.mp4`}
    type="video/mp4"
  />
      </video>

      <div className="cierre__overlay">
        <h1 className="cierre__texto">
          Esto recién empieza...
        </h1>
        <h2 className="cierre__firma">
          Maria & Felipe
        </h2>
      </div>
    </section>
  );
}

export default Cierre;

