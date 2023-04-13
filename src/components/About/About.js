import React, { useEffect, useState } from "react";
import "./about.scss";
import {
  isWithinInterval,
  getDay,
  setMinutes,
  setHours,
  isAfter,
} from "date-fns";

function About() {
  const [businessStatus, setBusinessStatus] = useState({
    statusMsg: "ABIERTO",
    status: "open",
    desc: "Cerramos a las 9:00 PM",
  });
  const [businessHours, setBusinessHours] = useState([
    {
      id: 1,
      weekday: "Lunes",
      startHour: "3:30 PM",
      endHour: "9:00 PM",
      hourInterval: {
        start: setMinutes(setHours(new Date(), 15), 30),
        end: setMinutes(setHours(new Date(), 21), 0),
      },
      hoursStatus: null,
    },
    {
      id: 2,
      weekday: "Martes",
      startHour: "3:30 PM",
      endHour: "9:00 PM",
      hourInterval: {
        start: setMinutes(setHours(new Date(), 15), 30),
        end: setMinutes(setHours(new Date(), 21), 0),
      },
      hoursStatus: null,
    },
    {
      id: 3,
      weekday: "Miércoles",
      startHour: "3:30 PM",
      endHour: "9:00 PM",
      hourInterval: {
        start: setMinutes(setHours(new Date(), 15), 30),
        end: setMinutes(setHours(new Date(), 21), 0),
      },
      hoursStatus: null,
    },
    {
      id: 4,
      weekday: "Jueves",
      startHour: "3:30 PM",
      endHour: "9:00 PM",
      hourInterval: {
        start: setMinutes(setHours(new Date(), 15), 30),
        end: setMinutes(setHours(new Date(), 21), 0),
      },
      hoursStatus: null,
    },
    {
      id: 5,
      weekday: "Viernes",
      startHour: "3:30 PM",
      endHour: "9:00 PM",
      hourInterval: {
        start: setMinutes(setHours(new Date(), 15), 30),
        end: setMinutes(setHours(new Date(), 21), 0),
      },
      hoursStatus: null,
    },
    {
      id: 6,
      weekday: "Sábado",
      startHour: "3:30 PM",
      endHour: "9:00 PM",
      hourInterval: {
        start: setMinutes(setHours(new Date(), 15), 30),
        end: setMinutes(setHours(new Date(), 21), 0),
      },
      hoursStatus: null,
    },
    {
      id: 0,
      weekday: "Domingo",
      startHour: "4:00 PM",
      endHour: "8:00 PM",
      hourInterval: {
        start: setMinutes(setHours(new Date(), 16), 0),
        end: setMinutes(setHours(new Date(), 20), 0),
      },
      hoursStatus: null,
    },
  ]);

  const highlightDay = () => {
    const today = new Date();
    const weekday = getDay(today);
    const updatedBusinessHours = businessHours.map((day) => {
      if (day.id == weekday) {
        if (isWithinInterval(today, day.hourInterval)) {
          const diffInMs = Math.abs(day.hourInterval.end - today);
          const diffInMinutes = diffInMs / (1000 * 60);
          if (diffInMinutes <= 60) {
            setBusinessStatus({
              statusMsg: "ABIERTO",
              desc: `Cerraremos pronto, a las ${day.endHour}`,
              status: "closing",
            });
            return { ...day, hoursStatus: "closing" };
          }
          setBusinessStatus({
            statusMsg: "ABIERTO",
            desc: `Nuestro horario de cierre es a las ${day.endHour}`,
            status: "open",
          });
          return { ...day, hoursStatus: "open" };
        } else {
          if (isAfter(today, day.hourInterval.end)) {
            setBusinessStatus({
              statusMsg: "CERRADO",
              desc: `Estaremos listos para servirle mañana a las ${
                businessHours[weekday + 1].startHour
              }`,
              status: "closed",
            });
          } else {
            setBusinessStatus({
              statusMsg: "CERRADO",
              desc: `Estaremos disponibles a partir de las ${day.startHour}`,
              status: "closed",
            });
          }
          return { ...day, hoursStatus: "closed" };
        }
      } else {
        return day;
      }
    });
    setBusinessHours(updatedBusinessHours);
  };
  useEffect(() => {
    highlightDay();
  }, []);
  return (
    <div className="l-about m-about">
      <h1 className="location__h1">¡Visítanos en nuestro local!</h1>
      <div className="l-location-hours">
        <div className="l-location">
          <p className="location__dir">Boulevard Ortiz Mena #92, Col. Centro</p>
          <iframe
            className="location__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1257.6857200282923!2d-105.6637556564926!3d26.92657738817897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86945109529574d3%3A0x1c222c8379ae7a1!2sBooba%20paradise!5e0!3m2!1sen!2smx!4v1681068353400!5m2!1sen!2smx"
            loading="lazy"
          ></iframe>
        </div>
        <div className="l-business-hours">
          <h1
            className={`business-hours__status business-hours__status--${businessStatus.status}`}
          >
            {businessStatus.statusMsg}
          </h1>
          <span className="business-hours__description">
            {businessStatus.desc}
          </span>
          <div className="business-hours__panel">
            <h3 className="c-business-hours__label">Horario de atención</h3>
            <ul className="l-business-hours__list">
              {businessHours.map((weekday) => {
                if (weekday.hoursStatus != null) {
                  return (
                    <li
                      key={weekday.id}
                      className={`c-business-hours__day c-business-hours__day--${weekday.hoursStatus}`}
                    >
                      <span className="c-business-hours__weekday">
                        {weekday.weekday}:
                      </span>
                      <span className="c-business-hours__hours">
                        {weekday.startHour} a {weekday.endHour}
                      </span>
                    </li>
                  );
                } else {
                  return (
                    <li key={weekday.id} className="c-business-hours__day">
                      <span className="c-business-hours__weekday">
                        {weekday.weekday}:
                      </span>
                      <span className="c-business-hours__hours">
                        {weekday.startHour} a {weekday.endHour}
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
