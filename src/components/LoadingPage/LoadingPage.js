import React, { useState, useEffect } from "react";
import "../../index.css";
import "./loading.scss";

import App from "../../App";
import boobaLogo from "../../images/Homepage_logo.png";

function LoadingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="l-loading-page c-loading-page">
          <img
            src={boobaLogo}
            className="c-loading-logo"
            alt="Logo de la empresa. Booba rosa con 3 perlas negras de tapioca"
          />
          <div className="l-loading-dots">
            <div className="c-loading-dot c-loading-dot--red"></div>
            <div className="c-loading-dot c-loading-dot--green"></div>
            <div className="c-loading-dot c-loading-dot--blue"></div>
            <div className="c-loading-dot c-loading-dot--yellow"></div>
          </div>
        </div>
      )}
      {!loading && <App />}
    </>
  );
}

export default LoadingPage;
