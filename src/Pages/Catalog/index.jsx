import React from "react";
import Category from "../../components/Category";
import img from "../../assets/img/skis1.webp";

import * as s from "./style.module.scss";

const Catalog = () => {
  return (
    <div className={s.catalog}>
      <div className={s.catalog_container}>
        <Category
          path="/catalog/skis"
          title="Лижне спорядження"
          photo="http://tvoemisto.tv/media/gallery/full/s/k/ski-mobile-dolomites_cl.jpg"
        />
        <Category
          path="/catalog/clothes"
          title="Лижний одяг"
          photo="https://images.ua.prom.st/2641421041_w640_h640_2641421041.jpg"
        />
        <Category
          path="/catalog/complects"
          title="Комплекти"
          photo="https://ireland.apollo.olxcdn.com/v1/files/5bzgwsui65c5-UA/image;s=644x461"
        />
        <Category
          path="/catalog/other"
          title="Інше"
          photo={img}
          style={{ gridColumnStart: "2" }}
        />
      </div>
    </div>
  );
};

export default Catalog;
