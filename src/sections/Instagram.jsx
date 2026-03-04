import React from "react";
import "./styles/Instagram.scss";

const Instagram = () => {
  
  const feedList = [1, 2, 3, 4, 5, 6];

  return (

    <div className="inner instar-inner">
      <div className="t-wrap">
        <h2 className="tit">Instagram</h2>
        <p className="txt">@tocobo_official</p>
      </div>

      <ul className="instar-list">
        {feedList.map((num) => (
          <li key={num}>
            <a
              href="#"
              style={{ backgroundImage: `url(/img/instar${num}.jpg)` }}
            ></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Instagram;
