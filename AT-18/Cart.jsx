import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { numberWithCommas, Helmet, Banner, Button, CartItem } from "./Common";
const Cart = (props) => {
  const { datas, getCartItemDetails } = props;
  const carts = useSelector((state) => state.cart.carts);
  const [cartProduct, setCartProduct] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const handleOrder = () => {
    toast.success(
      "Cảm ơn bạn đã mua hàng. Vui lòng kiểm tra mail sau 3 ngày ^^"
    );
  };
  useEffect(() => {
    setCartProduct(getCartItemDetails(carts.slice(1)));
    let result = carts.reduce((total, currentValue) => {
      return Number(total) + currentValue.price;
    }, 0);
    setTotalCart(result);
  }, [carts]);
  return (
    <Fragment>
      <Helmet title="cart">
        <Banner
          img="https://magiamgialazada.vn/wp-content/uploads/2018/01/voucher-bi-mat-lazada-khuyen-mai-tet-am-lich-2018-truyen-nhan-sam-tet.png"
          marginBottom={50}
        />
        <div className="cart">
          <div className="cart__list">
            {cartProduct.length ? (
              cartProduct.map((item, index) => (
                <p>Handle Khi có sản phẩm</p>
                // <CartItem key={index} item={item} />
              ))
            ) : (
              <img
                src="https://bizweb.dktcdn.net/100/368/179/themes/738982/assets/empty-cart.png?1609300798440"
                alt=""
              />
            )}
          </div>
          <div className="cart__info">
            <div className="cart__info__txt">
              <p>Shopping Bag ({carts.slice(1).length})</p>
              <div className="cart__info__txt__price">
                <span>Thành tiền</span>
                <span>{numberWithCommas(totalCart)}$</span>
              </div>
            </div>
            <div className="cart__info__btn">
              <Button size="block" onClick={handleOrder}>
                Đặt hàng
              </Button>
              <Button size="block">
                <Link to="/catelog">Tiếp tục mua hàng</Link>
              </Button>
            </div>
          </div>
        </div>
      </Helmet>
    </Fragment>
  );
};
export default React.memo(Cart);