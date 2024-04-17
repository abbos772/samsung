import React from "react";
import "../Banner/Banner.css";
const Banner = (props) => {
  return (
    <div>
      <div className="banner">
        <h1 className="h11">{props.title}</h1>
        <div className="textt">
          <ul>
            {props.text?.map((el, ind) => (
              <li key={ind}>{el}</li>
            ))}
          </ul>
        </div>
        <div className="sam">
          <h1 className="ultra">{props.samsung}</h1>
          <p>{props.samtitle}</p>
          <button className="btn_buy">Buy now</button>
        </div>
      </div>

      <div className="banner2">
        <h1>{props.tv}</h1>
        <div className="textt">
          <ul>
            {props.text2?.map((el, ind) => (
              <li key={ind}>{el}</li>
            ))}
          </ul>
        </div>
        <div className="sam">
          <h1 className="ultra">{props.samsung}</h1>
          <p>{props.samtitle}</p>
          <button className="btn_buy">Buy now</button>
        </div>
      </div>
      <div className="banner3">
        <h1>{props.home}</h1>
        <ul className="text3">
          {props.text3?.map((el, ind) => (
            <li key={ind}>{el}</li>
          ))}
        </ul>
        <div className="sam">
          <h1 className="ultra">{props.samsung}</h1>
          <p>{props.samtitle}</p>
          <button className="btn_buy">Buy now</button>
        </div>
      </div>
      <div className="banner4"></div>
    </div>
  );
};

export default Banner;
