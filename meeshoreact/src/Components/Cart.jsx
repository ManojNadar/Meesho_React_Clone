import React, { useEffect, useState } from "react";
import CartNav from "./CartNav";
import "../Styles/Cart.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDelivery, setTotalDelivery] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const route = useNavigate();

  useEffect(() => {
    const currentuser = JSON.parse(localStorage.getItem("currentmeeshouser"));
    if (currentuser) {
      if (currentuser?.meeshoRole === "Seller") {
        route("/");
      }
    }
  }, []);

  useEffect(() => {
    const currentuser = JSON.parse(localStorage.getItem("currentmeeshouser"));
    const regUser = JSON.parse(localStorage.getItem("meeshoreguser"));
    if (currentuser) {
      for (let i = 0; i < regUser.length; i++) {
        if (regUser[i].meeshoEmail === currentuser.meeshoEmail) {
          setCartItem(regUser[i].cart);
        }
      }
    }
  }, []);

  useEffect(() => {
    let sum = 0;
    let totalDelivery = 0;
    let totalDiscount = 0;
    if (cartItem?.length) {
      for (let i = 0; i < cartItem.length; i++) {
        sum += parseInt(cartItem[i].price);
        totalDelivery += parseInt(cartItem[i].deliveryCharge);
        totalDiscount += parseInt(cartItem[i].discount);
      }
    }
    setTotalPrice(sum);
    setTotalDelivery(totalDelivery);
    setTotalDiscount(totalDiscount);
  }, [cartItem]);

  const removeSingleItem = (id) => {
    const currentuser = JSON.parse(localStorage.getItem("currentmeeshouser"));
    const regUser = JSON.parse(localStorage.getItem("meeshoreguser"));

    const removeProd = cartItem.filter((e) => e.id !== id);

    for (let i = 0; i < regUser.length; i++) {
      if (regUser[i].meeshoEmail === currentuser.meeshoEmail) {
        setCartItem(removeProd);
        regUser[i].cart = removeProd;
        localStorage.setItem("meeshoreguser", JSON.stringify(regUser));
        toast.info("product removed");
      }
    }
  };

  const buyProduct = () => {
    const currentuser = JSON.parse(localStorage.getItem("currentmeeshouser"));
    const regUser = JSON.parse(localStorage.getItem("meeshoreguser"));

    for (let i = 0; i < regUser.length; i++) {
      if (regUser[i].meeshoEmail === currentuser.meeshoEmail) {
        regUser[i].cart = [];
        toast.info("Order Placed Successfully");
        setTotalPrice(0);
        setTotalDelivery(0);
        setTotalDiscount(0);
        setCartItem([]);
        localStorage.setItem("meeshoreguser", JSON.stringify(regUser));
      }
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
                      <img src={item.img} alt="" />
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
                        onClick={() => removeSingleItem(item.id)}
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
                    <p>-₹{totalDiscount}</p>
                    <p>+{totalDelivery}</p>
                  </div>
                </div>
                <div id="total_price">
                  <p>Order Price</p>
                  <p>₹{totalPrice + totalDelivery}</p>
                </div>

                <div id="green_container">
                  <div id="green_image">
                    <img
                      src="https://images.meesho.com/images/marketing/1657272960496_18.webp"
                      alt=""
                    />
                  </div>
                  <p>Yay! Your total discount is ₹{totalDiscount}</p>
                </div>

                <div id="light_text">
                  <p>Clicking on ‘Continue’ will not deduct any money</p>
                </div>

                <div id="continue-btn">
                  <button onClick={buyProduct}>BUY PRODUCT</button>
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
