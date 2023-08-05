import React, { useContext, useState } from "react";
import "../Styles/Navbar.css";
import meeshologo from "../Assets/Meesho.png";
import { NavLink, useNavigate } from "react-router-dom";
import { MeeshoContext } from "./Context/MyContext";
import { BiUserCircle } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuid } from "uuid";
const Navbar = () => {
  const [profileDd, setProfileDd] = useState(false);
  const [addProdModal, setAddProdModal] = useState(false);
  const [addProduct, setAddProduct] = useState({
    img: "",
    title: "",
    price: "",
    deliveryCharge: "",
    discount: "",
    category: "",
  });

  const handleProdDetails = (e) => {
    const { value, name } = e.target;
    setAddProduct({ ...addProduct, [name]: value });
  };

  const handleAddProdForm = (e) => {
    e.preventDefault();

    const { img, title, price, deliveryCharge, discount, category } =
      addProduct;

    if (img && title && price && deliveryCharge && discount && category) {
      const getMeeshoProd =
        JSON.parse(localStorage.getItem("meeshoproducts")) || [];

      const meeshObj = {
        ...addProduct,
        id: uuid(),
      };

      getMeeshoProd.push(meeshObj);
      localStorage.setItem("meeshoproducts", JSON.stringify(getMeeshoProd));
      toast.success("product added successfully");
      setAddProdModal(false);
      setAddProduct({
        img: "",
        title: "",
        price: "",
        deliveryCharge: "",
        discount: "",
        category: "",
      });

      setTimeout(() => {
        route("/allproducts");
      }, 600);
    } else {
      toast.error("please fill all the fields");
    }
  };

  const { state, logout } = useContext(MeeshoContext);

  const route = useNavigate();

  const showProfileDd = () => {
    setProfileDd(true);
  };
  const hideProfileDd = () => {
    setProfileDd(false);
  };

  const showProdModal = () => {
    setAddProdModal(true);
  };
  const hideProdModal = () => {
    setAddProdModal(false);
  };

  return (
    <>
      {/* <!-- profile dropDown --> */}

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

      {addProdModal ? (
        <div className="addProdParentContainer">
          <div className="addProdModal">
            <p onClick={hideProdModal}>X</p>
            <h3 className="addProdheading">Add Product</h3>
            <form onSubmit={handleAddProdForm} className="addProdForm">
              <div>
                <input
                  onChange={handleProdDetails}
                  type="text"
                  placeholder="Product Image Url"
                  name="img"
                  value={addProduct.img}
                />
              </div>
              <div>
                <input
                  onChange={handleProdDetails}
                  type="text"
                  placeholder="Product Title"
                  name="title"
                  value={addProduct.title}
                />
              </div>
              <div>
                <input
                  onChange={handleProdDetails}
                  type="number"
                  placeholder="Product Price"
                  name="price"
                  value={addProduct.price}
                />
              </div>
              <div>
                <input
                  onChange={handleProdDetails}
                  type="number"
                  placeholder="Delivery Charge"
                  name="deliveryCharge"
                  value={addProduct.deliveryCharge}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Product Discount"
                  name="discount"
                  value={addProduct.discount}
                  onChange={handleProdDetails}
                />
              </div>
              <div>
                <select
                  value={addProduct.category}
                  onChange={handleProdDetails}
                  name="category"
                >
                  <option value="">SELECT CATEGORY</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Kids">Kids</option>
                  <option value="Home">Home & Kitchen</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Jwellery">Jwellery</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>
              <div>
                <input type="submit" value="Add Prouct" />
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {profileDd ? (
        <div
          onMouseOver={showProfileDd}
          onMouseLeave={hideProfileDd}
          id="profile-dropDown"
        >
          <div id="user">
            {state?.currentuser ? (
              <div id="user-login-details">
                <div className="userIcon">
                  <BiUserCircle />
                </div>
                <div className="username">
                  <h3 id="current_user">{state?.currentuser?.meeshoUser}</h3>
                  <p>+91 1234567890</p>
                </div>
              </div>
            ) : (
              <div id="user-details">
                <h5 id="current_user">Hello User</h5>
                <p>To access Your Meesho Account </p>

                <button onClick={() => route("/login")}>Login/SignUp</button>
              </div>
            )}
          </div>
          <div id="orders">
            <i className="fa-solid fa-bag-shopping fa-xl"></i>
            <h4>My Orders</h4>
          </div>

          {state?.currentuser && (
            <div className="logoutBtn">
              <button onClick={() => logout()}>Logout</button>
            </div>
          )}
        </div>
      ) : null}

      {/* header Navbar */}

      <header>
        <div id="nav-container">
          <div id="left-nav">
            <div id="logo">
              <NavLink to="/">
                <img src={meeshologo} alt="" />
              </NavLink>
            </div>
            <div id="search">
              <i className="fa-solid fa-magnifying-glass fa-lg"></i>
              <input
                type="text"
                placeholder="Try Saree,Kurti or Search by product Code"
              />
            </div>
          </div>
          <div id="right-nav">
            <div id="mobile">
              <i
                className="fa-solid fa-mobile-screen-button fa-lg"
                style={{ color: "#464646" }}
              ></i>
              <p>Download App</p>
            </div>
            <div id="supplier">
              <p>Become a Supplier</p>
            </div>
            <div id="profile-container">
              <div
                id="profile"
                onMouseOver={showProfileDd}
                onMouseLeave={hideProfileDd}
              >
                <NavLink>
                  <i
                    className="fa-solid fa-user "
                    style={{ color: "#828283" }}
                  ></i>
                  <p>Profile</p>
                </NavLink>
              </div>

              {/* cart */}

              {state?.currentuser &&
                state?.currentuser?.meeshoRole === "Buyer" && (
                  <div id="cart">
                    <NavLink to="/cart">
                      <i
                        className="fa-solid fa-cart-shopping fa-sm"
                        style={{ color: "#828283" }}
                      ></i>
                      <p>Cart</p>
                    </NavLink>
                  </div>
                )}

              {/* Add product  */}

              {state?.currentuser &&
                state?.currentuser?.meeshoRole === "Seller" && (
                  <div id="cart" onClick={showProdModal}>
                    <NavLink>
                      <i
                        className="fa-regular fa-square-plus"
                        style={{ color: "#828283" }}
                      ></i>
                      <p>Add Product</p>
                    </NavLink>
                  </div>
                )}

              {/* No user */}

              {!state?.currentuser && (
                <div id="cart">
                  <NavLink>
                    <i
                      className="fa-solid fa-face-frown fa-lg"
                      style={{ color: "#828283" }}
                    ></i>
                    <p>nouser</p>
                  </NavLink>
                </div>
              )}

              {/* <div id="wishList">
                <NavLink to="/wishList">
                  <i
                    className="fa-solid fa-heart fa-sm"
                    style={{ color: "#828283" }}
                  ></i>
                  <p>Wishlist</p>
                </NavLink>
              </div> */}
            </div>
          </div>
        </div>
      </header>
      <nav>
        <div id="sec-nav-container">
          <p>
            <NavLink to="/allproducts">All</NavLink>
          </p>
          <p>
            <NavLink to="/womenEthnic">Women Ethnic</NavLink>
          </p>

          <p>
            <NavLink to="/womenWestern">Women Western</NavLink>
          </p>

          <p>
            <NavLink to="/men">Men</NavLink>
          </p>

          <p>
            <NavLink to="/kids">Kids</NavLink>
          </p>

          <p>
            <NavLink to="/homeKitchen">Home & Kitchen</NavLink>
          </p>
          <p>
            <NavLink to="/beauty">Beauty & Health</NavLink>
          </p>

          <p>
            <NavLink to="/jwellery">Jwellery & Accessories</NavLink>
          </p>

          <p>
            <NavLink to="/bags">Bags & Footwear</NavLink>
          </p>

          <p>
            <NavLink to="/electronics">Electronics</NavLink>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
