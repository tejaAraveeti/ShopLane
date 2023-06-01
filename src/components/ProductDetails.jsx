import React, { useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { BsFillCartFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { addToCart, addToWishList, deleteCartItem } from '../Redux/CartSlice';
import { FaHeart } from "react-icons/fa";
function ProductDetails() {
  const { id } = useParams()
  console.log(useParams())
  const [product, setProduct] = useState({})
  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error))
  };
  useEffect(() => {
    fetchData();
    console.log(fetchData())
  }, [id])
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const heart = useRef();

  const actionButton = useRef()
  let isItemCart = cart.cartItems.find((items) => items.id === product.id);

  const handleHeartClick=()=>{
    dispatch(addToWishList(product))
  }

  const onClickHandler = () => {
    if (actionButton.current === 'Add to Cart') {
      dispatch(addToCart(product));
    } else {
      dispatch(deleteCartItem(product));
    }
    
   console.log("clicked add to cart")
  }
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6">

              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
              />
            </div>
            <div
              className="productHeartDiv"
              ref={heart}
              onClick={handleHeartClick}
            >
              <FaHeart
                size={"1.3rem"}
              />
            </div>
            <div className="col-md-6">
              <p>Brand</p>
              <h5>{product.title}</h5>
              <p>{product.unit}</p>
              <p>{product.description}</p>

              <button onClick={onClickHandler}
                ref={actionButton}
                className={
                  isItemCart
                    ? "btn redBtn addToCartBtn"
                    : "btn blueBtn addToCartBtn"
                }>
                {
                  isItemCart ?
                    (<MdDeleteForever size={"20px"}/>) : (<BsFillCartFill size={"20px"}/>)

                }AddToCart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails