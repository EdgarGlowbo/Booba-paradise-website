import React from "react";
import bubbleTeaImg from "../../images/cute-bubble-milk-tea-vector.png";
import "./homepage.scss";

function Homepage(props) {
  return (
    <div className="l-homepage">
      <div className="l-homepage__presentation">
        <img
          src={bubbleTeaImg}
          className="homepage__img l-homepage__img"
          alt="Una linda caricatura de un té de booba con leche"
        />
        <h1 className="homepage__title-wrapper l-homepage__title">
          <span>B</span>
          <span>o</span>
          <span>o</span>
          <span>b</span>
          <span>a</span> <span>P</span>
          <span>a</span>
          <span>r</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>s</span>
          <span>e</span>
        </h1>
      </div>

      <button className="homepage__menu-btn">Menú</button>
    </div>
  );
}

export default Homepage;
