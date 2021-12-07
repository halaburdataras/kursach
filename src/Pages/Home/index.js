import React from "react";
import About from "../../components/About";

import * as s from "./style.module.scss";

const Home = () => {
  return (
    <div className={s.root}>
      <img
        className={s.mainImg}
        alt="home"
        src="https://res.cloudinary.com/didw9zkq6/image/upload/v1638829869/Ski/lyzhi2_900_y2aolw.jpg"
      />
      <About />
    </div>
  );
};

export default Home;
