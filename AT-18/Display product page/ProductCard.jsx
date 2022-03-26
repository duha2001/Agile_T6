import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating, numberWithCommas } from "../Common";
const ProductCard = (props) => {
  const { data } = props;
  const [isAdded, setAdded] = useState(false);
  const handleAdded = () => {
    setAdded(!isAdded);
  };

  return (
    <div className="product__card">
      <div className="product__card__item">
        <Link to={`/catelog/${data.id}`}>
          <div className="product__card__item__img">
            <img
              src={data.image}
              alt=""
              className="product__card__item__img__view"
            />
          </div>
          <div className="product__card__item__info">
            <h1 className="product__card__item__info__name">{data.title}</h1>
            <div className="product__card__item__info__content">
              <p className="product__card__item__info__content__price">
                {numberWithCommas(data.price)}&nbsp;đ&nbsp;&nbsp;
              </p>
              <div className="product__card__item__info__content__rate">
                <Rating data={data.rating.rate} />
              </div>
            </div>
          </div>
          <div className="product__card__canvas"></div>
          {isAdded === false ? (
            <button onClick={handleAdded} className="product__card__btn">
              ADD TO CARD
            </button>
          ) : (
            <button
              onClick={handleAdded}
              className="product__card__btn product__card__btn__disable"
            >
              ADDED
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
