import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let count = 0;
    let price = 0;
    cart.forEach((item) => {
      count += item.qty;
      price += item.qty * item.price;
    });

    setCartCount(count);
    setTotalPrice(price);
  }, [cart, cartCount, totalPrice]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        
        <h2 className={styles.navbar__logo}>📚 Book Shop</h2>
      </Link>
      <Link to="about">
        <h2 className={styles.navbar__logo}>👥 Thông tin nhóm</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Giỏ hàng</h3>
          <img
            className={styles.cart__image}
            src="https://www.prodraw.net/favicon/download.php?file=y2hlt1s3_3.ico"
            alt="shopping cart"
          />
          <span> {totalPrice} ₫ </span>
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
