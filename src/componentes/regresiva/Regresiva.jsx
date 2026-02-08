import { useEffect, useState } from "react";
import "./Regresiva.css";

function Countdown() {
  const weddingDate = new Date("2027-01-31T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown">
      <div className="container">
        <h1 className="countdown__title">Cuenta regresiva</h1>

        {timeLeft ? (
          <div className="countdown__time">
            <div>
              <span>{timeLeft.days}</span>
              <small>Días</small>
            </div>
            <div>
              <span>{timeLeft.hours}</span>
              <small>Horas</small>
            </div>
            <div>
              <span>{timeLeft.minutes}</span>
              <small>Min</small>
            </div>
            <div>
              <span>{timeLeft.seconds}</span>
              <small>Seg</small>
            </div>
          </div>
        ) : (
            <h2 className="countdown__ended">
            ¡Llegó el gran día!
          </h2>
        )}

        
      </div>
    </section>
  );
}

export default Countdown;

