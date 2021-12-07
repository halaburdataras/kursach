import React from "react";

import * as s from "./style.module.scss";

const About = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.item}>
          <div className={s.fade}>
            <h3>ПРОКАТ ГІРСЬКИХ ЛИЖ</h3>
            <h4>
              ЛИЖІ : Atomik, Salomon, Volki, Nordica, Blizzard, Rossignol,
              Dynamik. Довжина: від 70 до 170 см.
            </h4>
          </div>
          <img
            alt="ski"
            src="https://res.cloudinary.com/didw9zkq6/image/upload/v1638831869/Ski/1_mfuv2z.jpg"
          />
        </div>
        <div className={s.item}>
          <div className={s.fade}>
            <h3>ПРОКАТ СНОУБОРДІВ</h3>
            <h4>СНОУБОРДИ : Burton, K2, Head. Довжина від 125 до 170 см.</h4>
          </div>
          <img
            alt="snowboard"
            src="https://res.cloudinary.com/didw9zkq6/image/upload/v1638831869/Ski/2_qsr1yl.jpg"
          />
        </div>
        <div className={s.item}>
          <div className={s.fade}>
            <h3>ОРЕНДА АКСЕСУАРІВ</h3>
            <h4>ШОЛОМИ, МАСКИ, ПАЛКИ, ЧОХЛИ.</h4>
          </div>
          <img
            alt="accesories"
            src="https://res.cloudinary.com/didw9zkq6/image/upload/v1638831869/Ski/3_fezker.jpg"
          />
        </div>
        <div className={s.item}>
          <div className={s.fade}>
            <h3>ОРЕНДА ЛИЖНОГО ОДЯГУ</h3>
            <h4>
              ОДЯГ: Killtec, Salomon, Head, Rossignol дитячий, жіночий,
              чоловічий.
            </h4>
          </div>
          <img
            alt="clothes"
            src="https://res.cloudinary.com/didw9zkq6/image/upload/v1638831869/Ski/4_sghbxw.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
