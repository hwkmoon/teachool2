import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateDescription } from "../../../features/coursesSlice";
import MenuModifier from "./MenuModifier";

const Tarification = () => {
  const { courseId } = useParams();
  const courses = useSelector((state) => state.courses);
  const data = courses.find((course) => course.id === courseId);
  const [price, setPrice] = useState(data.price ? data.price : 10);
  const [promotion, setPromotion] = useState(
    data.promotion ? data.promotion : 0
  );
  const dispatch = useDispatch();

  const handlePromotion = () => {
    dispatch(updateDescription({ id: courseId, price, promotion }));
  };

  return (
    <div className="modifiercours">
      <MenuModifier />
      <div className="modifiercours-content">
        <div className="modifiercours__title">
          <h3 className="heading-3">Tarification</h3>
        </div>
        <div className="tarification">
          <p className="tarification__paragraph">Tarif du cours</p>
          <div className="tarification__content">
            <div className="tarification__price">
              <label htmlFor="base-price">Tarif de base</label>
              <input
                size={price.length}
                value={price}
                id="base-price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="tarification__promotion">
              <label htmlFor="promotion">Promotion</label>
              <input
                size={promotion.length}
                value={promotion}
                id="promotion"
                onChange={(e) => setPromotion(e.target.value)}
              />
              <button className="tarification__btn" onClick={handlePromotion}>
                Appliquer la promotion
              </button>
            </div>
            <span className="tarification__pricefinale">
              Prix final: {data.pricefinal} €
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarification;
