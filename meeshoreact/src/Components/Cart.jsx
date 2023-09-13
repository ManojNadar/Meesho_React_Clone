import React, { useContext, useEffect, useState } from "react";
import CartNav from "./CartNav";
import "../Styles/Cart.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { MeeshoContext } from "./Context/MyContext";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const route = useNavigate();

  const { state } = useContext(MeeshoContext);

  useEffect(() => {
    if (state?.currentuser?.role === "Seller") {
      route("/");
    }
  }, [state?.currentuser]);

  useEffect(() => {
    async function getCartProucts() {
      try {
        const token = JSON.parse(localStorage.getItem("meeshoToken"));
        const response = await axios.post(
          "http://localhost:8000/get-cart-products",
          { token }
        );

        if (response.data.success) {
          setCartItem(response.data.product);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getCartProucts();
  }, []);

  useEffect(() => {
    if (cartItem?.length) {
      let sum = 0;
      for (let i = 0; i < cartItem.length; i++) {
        sum += parseInt(cartItem[i].price);
      }
      setTotalPrice(sum);
    }
  }, [cartItem]);

  const removeSingleProduct = async (productId) => {
    try {
      const token = JSON.parse(localStorage.getItem("meeshoToken"));

      const response = await axios.post(
        "http://localhost:8000/delete-cart-product",
        {
          productId,
          token,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setCartItem(response.data.products);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const placeOrder = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("meeshoToken"));

      const response = await axios.post("http://localhost:8000/buyproduct", {
        token,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setCartItem([]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CartNav />

      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {cartItem?.length ? (
        <div id="cartbody">
          <div id="cart-main-body">
            <div id="left-cart">
              <div id="left-cart-heading">
                <h4>cart</h4>
                <p>|</p>
                <span>{cartItem?.length} item</span>
              </div>

              {cartItem.map((item) => (
                <div className="cart-items">
                  <div className="top-section-cart">
                    <div className="cart_image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="cart-details">
                      <h4>{item.title}</h4>
                      <div className="qty">
                        <p>Size: Free Size</p>
                        <p>Qty:1</p>
                      </div>
                      <p className="cartPrice">₹{item.price}</p>
                      <p className="cartDiscount">Discount ₹{item.discount}</p>
                      <div
                        className="remove"
                        onClick={() => removeSingleProduct(item._id)}
                      >
                        <i className="fa-solid fa-xmark fa-2xs"></i>
                        <p>REMOVE</p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-section">
                    <p>Sold By : JnD ENTERPRISES</p>
                    <p>Delivery Charge Rs. {item.deliveryCharge}</p>
                  </div>
                </div>
              ))}
            </div>
            <div id="right-cart">
              <h4>Price Details</h4>

              <div id="cart-price-container">
                <div id="prod_details">
                  <div id="prod_name">
                    <p>Total Product Price</p>
                    <p>Total Disounts</p>
                    <p>Additional Fees</p>
                  </div>
                  <div id="prod_price">
                    <p>₹{totalPrice}</p>
                    <p>₹ 0</p>
                    <p>₹ 0</p>
                    {/* <p>-₹{totalDiscount}</p>
                    <p>+{totalDelivery}</p> */}
                  </div>
                </div>
                <div id="total_price">
                  <p>Order Price</p>
                  {/* <p>₹{totalPrice + totalDelivery}</p> */}
                  <p>₹{totalPrice}</p>
                </div>

                <div id="green_container">
                  <div id="green_image">
                    <img
                      src="https://images.meesho.com/images/marketing/1657272960496_18.webp"
                      alt=""
                    />
                  </div>
                  {/* <p>Yay! Your total discount is ₹{totalDiscount}</p> */}
                </div>

                <div id="light_text">
                  <p>Clicking on ‘Continue’ will not deduct any money</p>
                </div>

                <div id="continue-btn">
                  <button onClick={placeOrder}>BUY PRODUCT</button>
                </div>

                <div id="cart-banner">
                  <img
                    src="https://images.meesho.com/images/marketing/1588578650850.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ marginTop: "5%", textAlign: "center" }}>
          Your Cart is Empty
        </h1>
      )}
    </>
  );
};

export default Cart;
