// src/componentes/rsvp/RSVP.jsx
import { useState } from "react";
import "./RSVP.css";

export default function RSVP() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xgolerpq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="rsvp">
      <div className="container">
        <h2 className="rsvp__title">Confirmación de asistencia</h2>
        <p className="rsvp__subtitle">
        
        </p>

        <form className="rsvp__form" onSubmit={handleSubmit}>
          {/* Formspree helpers */}
          <input type="hidden" name="_subject" value="RSVP - Nueva confirmación" />

          <label className="rsvp__field">
            <span>Nombre y apellido</span>
            <input name="nombre" type="text" required placeholder="Ej: Ana Pérez" />
          </label>

          <label className="rsvp__field">
            <span>¿Asistís?</span>
            <select name="asistencia" required defaultValue="">
              <option value="" disabled>
                Seleccioná una opción
              </option>
              <option value="Si, asisto">Sí, asisto</option>
              <option value="No, no puedo">No, no puedo</option>
            </select>
          </label>

          <label className="rsvp__field">
            <span>Cantidad de personas</span>
            <input
              name="cantidad"
              type="number"
              min="1"
              max="10"
              required
              defaultValue="1"
            />
          </label>

          <label className="rsvp__field">
            <span>Mensaje (opcional)</span>
            <textarea
              name="mensaje"
              rows="3"
              placeholder="Ej: Alergias, comentarios, etc."
            />
          </label>

          <button className="rsvp__btn" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Confirmar"}
          </button>

          {status === "success" && (
            <p className="rsvp__msg rsvp__msg--ok">¡Gracias! Tu respuesta fue enviada. ¡Te esperamos!</p>
          )}

          {status === "error" && (
            <p className="rsvp__msg rsvp__msg--err">
              No se pudo enviar
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
