import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'
const ProductCard = props => {

  const { img01, img02, name, price, slug, promotionalPrice } = props
  return (
    <div className="product-card">
        <Link to={`/catalog/${slug}`}>
            <div className="product-card__image">
                <img src={img01} alt=''/>
                <img src={img02} alt=''/>
            </div>
            <h3 className="product-card__name">
                {name}
            </h3>
            <div className="product-card__price">
                {promotionalPrice}
                <span className="product-card__price__old">
                    <del>{price}</del>
                </span>
            </div>
        </Link>
        <div className="product-card__btn">
            <Button
                size="sm"
                icon="bx bx-cart"
                animate
            >
                Chọn mua
            </Button>
        </div>
    </div>
  )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard