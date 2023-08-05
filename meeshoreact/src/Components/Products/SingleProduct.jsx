import React, { useContext, useEffect, useState } from "react";
import "../../Styles/ProductsCss/SingleProduct.css";
import Navbar from "../Navbar";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { MeeshoContext } from "../Context/MyContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const [singleProd, setSingleProd] = useState({});
  const [updateProdModal, setProdModal] = useState(false);
  const { state } = useContext(MeeshoContext);
  const { id } = useParams();
  const route = useNavigate();
  // console.log(singleProd);

  useEffect(() => {
    const getMeeshoProduct = JSON.parse(localStorage.getItem("meeshoproducts"));

    if (getMeeshoProduct) {
      const findProduct = getMeeshoProduct.find((e) => e.id === id);
      setSingleProd(findProduct);
    }
  }, []);

  const showUpdateProdModal = () => {
    setProdModal(true);
  };
  const hideUpdateProdModal = () => {
    setProdModal(false);
  };

  const handleUpdateProdDetails = (e) => {
    const { name, value } = e.target;
    setSingleProd({ ...singleProd, [name]: value });
  };

  const handleUpdateProdDetailsForm = (e) => {
    e.preventDefault();

    const getMeeshoProduct = JSON.parse(localStorage.getItem("meeshoproducts"));
    if (getMeeshoProduct) {
      for (let i = 0; i < getMeeshoProduct.length; i++) {
        if (getMeeshoProduct[i].id === id) {
          getMeeshoProduct[i].img = singleProd.img;
          getMeeshoProduct[i].title = singleProd.title;
          getMeeshoProduct[i].price = singleProd.price;
          getMeeshoProduct[i].discount = singleProd.discount;
          getMeeshoProduct[i].deliveryCharge = singleProd.deliveryCharge;
          getMeeshoProduct[i].category = singleProd.category;

          localStorage.setItem(
            "meeshoproducts",
            JSON.stringify(getMeeshoProduct)
          );
          setProdModal(false);
          toast.success("product Updated");
        }
      }
    }
  };

  const addToCart = (id) => {
    const currentuser = JSON.parse(localStorage.getItem("currentmeeshouser"));
    const regUser = JSON.parse(localStorage.getItem("meeshoreguser"));

    if (currentuser) {
      for (let i = 0; i < regUser.length; i++) {
        if (regUser[i].meeshoEmail === currentuser.meeshoEmail) {
          const filterProd = regUser[i].cart.find((e) => e.id === id);
          if (regUser[i].cart.length && filterProd) {
            toast.info("already added");
            setTimeout(() => {
              route("/cart");
            }, 900);
          } else {
            regUser[i].cart.push(singleProd);
            localStorage.setItem("meeshoreguser", JSON.stringify(regUser));
            toast.success("product added");
            setTimeout(() => {
              route("/allproducts");
            }, 900);
          }
        }
      }
    }
  };

  return (
    <>
      <Navbar />

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

      {updateProdModal ? (
        <div className="updateProfModal">
          <div className="modalProdUpdateContainer">
            <p onClick={hideUpdateProdModal} className="closeProdModal">
              X
            </p>
            <h2>Update Profile</h2>
            <form
              className="updateProdForm"
              onSubmit={handleUpdateProdDetailsForm}
            >
              <div>
                <input
                  type="text"
                  placeholder="Update Image URL"
                  onChange={handleUpdateProdDetails}
                  value={singleProd.img}
                  name="img"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Update Product Title"
                  onChange={handleUpdateProdDetails}
                  value={singleProd.title}
                  name="title"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Update Product Price"
                  onChange={handleUpdateProdDetails}
                  value={singleProd.price}
                  name="price"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Update Product discount"
                  onChange={handleUpdateProdDetails}
                  value={singleProd.discount}
                  name="discount"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Update Product Delivery Charge"
                  onChange={handleUpdateProdDetails}
                  value={singleProd.deliveryCharge}
                  name="deliveryCharge"
                />
              </div>
              <div>
                <select
                  name="category"
                  value={singleProd.category}
                  onChange={handleUpdateProdDetails}
                >
                  <option value="">SELECT CATEGORY</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Kids">Kids</option>
                  <option value="Home">Home & Accessories</option>
                  <option value="Jwellery">Jwellery</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>

              <div>
                <input type="submit" value="UPDATE PRODUCT" />
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <main>
        <div id="main-inner-body">
          <div id="left-section">
            <div id="left-small-outer-container">
              <div className="left-small-inner-container">
                <div className="left-small">
                  <img src={singleProd.img} alt="" />
                </div>
              </div>
              <div className="left-small-inner-container">
                <div className="left-small">
                  <img src={singleProd.img} alt="" />
                </div>
              </div>
              <div className="left-small-inner-container">
                <div className="left-small">
                  <img src={singleProd.img} alt="" />
                </div>
              </div>
              <div className="left-small-inner-container">
                <div className="left-small">
                  <img src={singleProd.img} alt="" />
                </div>
              </div>
            </div>

            <div id="middle-main-image-container">
              <div>
                <div id="middle-main-image">
                  <div id="middle-image">
                    <img src={singleProd.img} alt="" />
                  </div>
                </div>
              </div>

              {state?.currentuser &&
              state?.currentuser?.meeshoRole === "Buyer" ? (
                <div id="main-btn">
                  <div id="cart-btn">
                    <button onClick={() => addToCart(singleProd.id)}>
                      Add to Cart
                    </button>
                  </div>
                  <div id="buy-btn">
                    <button>Buy Now</button>
                  </div>
                </div>
              ) : null}
              {state?.currentuser?.meeshoRole === "Seller" ? (
                <div id="main-btn">
                  <div id="buy-btn">
                    <button onClick={showUpdateProdModal}>
                      UPDATE PRODUCT
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div id="right-section">
            <div id="right-top">
              <p>{singleProd.title}</p>
              <h1>₹{singleProd.price}</h1>
              <p>
                Discount ₹&nbsp;
                <span style={{ color: "red" }}>{singleProd.discount}</span>
              </p>
              <div id="rating-section">
                <div id="rating-p">
                  <p>3.8</p>
                  <i
                    className="fa-solid fa-star fa-sm"
                    style={{ color: "#ffffff" }}
                  ></i>
                </div>
                <span>105 Ratings, 32 Reviews </span>
              </div>
              <p>Delivery Charge Rs.{singleProd.deliveryCharge}</p>
            </div>
            <div id="right-middle">
              <h4>SELECT SIZE</h4>
              <div id="years">
                <p>2-3 Years</p>
                <p>3-4 Years</p>
                <p>4-5 Years</p>
                <p>5-6 Years</p>
                <p>6-7 Years</p>
                <p>7-8 Years</p>
                <p>8-9 Years</p>
                <p>9-10 Years</p>
                <p>10-11 Years</p>
              </div>
            </div>
            <div id="right-third">
              <h4>Product Details</h4>
              <div id="sizes">
                <p>Name : PARI FROCK DRESS</p>
                <p>Fabric : Net</p>
                <p>Sleeve Length : Three-Quarter Sleeves</p>
                <p>Pattern : Solid</p>
                <p>Net Quantity (N) : Single</p>
                <p>Sizes :</p>
                <p>2-3 Years (Bust Size : 24 in, Length Size: 26 in)</p>
                <p>3-4 Years (Bust Size : 25 in, Length Size: 27 in)</p>
                <p>4-5 Years (Bust Size : 26 in, Length Size: 30 in)</p>
                <p>5-6 Years (Bust Size : 27 in, Length Size: 31 in)</p>
                <p>6-7 Years (Bust Size : 28 in, Length Size: 32 in)</p>
                <p>7-8 Years (Bust Size : 29 in, Length Size: 34 in)</p>
                <p>8-9 Years (Bust Size : 30 in, Length Size: 35 in)</p>
                <p>9-10 Years (Bust Size : 31 in, Length Size: 37 in)</p>
                <p>10-11 Years (Bust Size : 32 in, Length Size: 38 in)</p>
                <p>11-12 Years (Bust Size : 34 in, Length Size: 40 in)</p>
                <p>PARI DRESS</p>
                <p>Country of Origin : India</p>
                <NavLink to="">More Information</NavLink>
              </div>
            </div>
            <div id="right-fourth">
              <div id="home-img">
                <img
                  src="https://images.meesho.com/images/pow/shop_100.webp"
                  alt=""
                />
              </div>

              <div id="view-shop">
                <button>View Shop</button>
              </div>
              <h4>Sold By</h4>
              <div id="priyanka-coll">
                <div id="priyanka-heading">
                  <h4>PRIYANKA'S</h4>
                  <h4>COLLECTION</h4>
                </div>
                <div id="main-ratings">
                  <div>
                    <p id="fourth-rating">3.8 *</p>
                    <p>39499 Ratings</p>
                  </div>
                  <div>
                    <p>66</p>
                    <p>Followers</p>
                  </div>
                  <div>
                    <p>30</p>
                    <p>Products</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="right-fifth">
              <div id="right-fifth-heading">
                <h3>Product Ratings & Reviews</h3>
              </div>
              <div id="reviews-section">
                <div id="review-left">
                  <div id="review-ratings-section">
                    <p>3.8</p>

                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#038d63" }}
                    ></i>
                  </div>
                  <p>105 Ratings,</p>
                  <p>32 Reviews</p>
                </div>
                <div id="review-right">
                  <div className="color-ratings">
                    <p>Excellent</p>
                    <div id="excellent-rating">
                      <div></div>
                    </div>
                    <p>47</p>
                  </div>
                  <div className="color-ratings">
                    <p>Very Good</p>
                    <div id="very-good-rating">
                      <div></div>
                    </div>
                    <p>24</p>
                  </div>
                  <div className="color-ratings">
                    <p>Good</p>
                    <div id="good-rating">
                      <div></div>
                    </div>
                    <p>13</p>
                  </div>
                  <div className="color-ratings">
                    <p>Average</p>
                    <div id="average-rating">
                      <div></div>
                    </div>
                    <p>4</p>
                  </div>
                  <div className="color-ratings">
                    <p>Poor</p>
                    <div id="poor-rating">
                      <div></div>
                    </div>
                    <p>17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="last-section">
          <h3 id="last-section-heading">People also viewed</h3>
          <div id="last-inner-section">
            <div className="last-inner-images">
              <div className="inner-image">
                <img
                  src="https://images.meesho.com/images/products/296055778/w4xbw_400.webp"
                  alt=""
                />
              </div>

              <div className="inner-details">
                <p className="inner-detail-1">Pretty Fancy Girls Frocks..</p>
                <h4>
                  ₹ 160 <span className="inner-detail-2">onwards</span>
                </h4>
                <small>
                  Free Delivery <span className="word-line"></span>{" "}
                </small>

                <div className="inner-ratings">
                  <p className="inner-star">
                    4.1 <i className="fa-regular fa-star fa-xs"></i>
                  </p>
                  <span className="inner-reviews"> 406 Reveiws </span>
                </div>
              </div>
            </div>
            <div className="last-inner-images">
              <div className="inner-image">
                <img
                  src="https://images.meesho.com/images/products/283578860/hpsa1_400.webp"
                  alt=""
                />
              </div>

              <div className="inner-details">
                <p className="inner-detail-1">Feminine Glittering Mang..</p>
                <h4>
                  ₹ 245 <span className="inner-detail-2">onwards</span>
                </h4>
                <small>
                  Delivery ₹61 <span className="word-line">₹70</span>{" "}
                </small>

                <div className="inner-ratings">
                  <p className="inner-star">
                    4.0 <i className="fa-regular fa-star fa-xs"></i>
                  </p>
                  <span className="inner-reviews"> 46 Reveiws </span>
                </div>
              </div>
            </div>
            <div className="last-inner-images">
              <div className="inner-image">
                <img
                  src="https://images.meesho.com/images/products/194681738/rz3zo_400.webp"
                  alt=""
                />
              </div>

              <div className="inner-details">
                <p className="inner-detail-1">Feminine Glittering Mang..</p>
                <h4>
                  ₹ 245 <span className="inner-detail-2">onwards</span>
                </h4>
                <small>
                  Delivery ₹61 <span className="word-line">₹70</span>{" "}
                </small>

                <div className="inner-ratings">
                  <p className="inner-star">
                    4.0 <i className="fa-regular fa-star fa-xs"></i>
                  </p>
                  <span className="inner-reviews"> 46 Reveiws </span>
                </div>
              </div>
            </div>
            <div className="last-inner-images">
              <div className="inner-image">
                <img
                  src="https://images.meesho.com/images/products/289904799/drgdr_400.webp"
                  alt=""
                />
              </div>

              <div className="inner-details">
                <p className="inner-detail-1">Feminine Glittering Mang..</p>
                <h4>
                  ₹ 245 <span className="inner-detail-2">onwards</span>
                </h4>
                <small>
                  Delivery ₹61 <span className="word-line">₹70</span>{" "}
                </small>

                <div className="inner-ratings">
                  <p className="inner-star">
                    4.0 <i className="fa-regular fa-star fa-xs"></i>
                  </p>
                  <span className="inner-reviews"> 46 Reveiws </span>
                </div>
              </div>
            </div>
            <div className="last-inner-images">
              <div className="inner-image">
                <img
                  src="https://images.meesho.com/images/products/296548076/kjzub_400.webp"
                  alt=""
                />
              </div>

              <div className="inner-details">
                <p className="inner-detail-1">Feminine Glittering Mang..</p>
                <h4>
                  ₹ 245 <span className="inner-detail-2">onwards</span>
                </h4>
                <small>
                  Delivery ₹61 <span className="word-line">₹70</span>{" "}
                </small>

                <div className="inner-ratings">
                  <p className="inner-star">
                    4.0 <i className="fa-regular fa-star fa-xs"></i>
                  </p>
                  <span className="inner-reviews"> 46 Reveiws </span>
                </div>
              </div>
            </div>
            <div className="last-inner-images">
              <div className="inner-image">
                <img
                  src="https://images.meesho.com/images/products/287102862/paahp_400.webp"
                  alt=""
                />
              </div>

              <div className="inner-details">
                <p className="inner-detail-1">Feminine Glittering Mang..</p>
                <h4>
                  ₹ 245 <span className="inner-detail-2">onwards</span>
                </h4>
                <small>
                  Delivery ₹61 <span className="word-line">₹70</span>{" "}
                </small>

                <div className="inner-ratings">
                  <p className="inner-star">
                    4.0 <i className="fa-regular fa-star fa-xs"></i>
                  </p>
                  <span className="inner-reviews"> 46 Reveiws </span>
                </div>
              </div>
            </div>
            <div className="last-inner-images">
              <div className="inner-image">
                <img
                  src="https://images.meesho.com/images/products/282239806/l3wa5_400.webp"
                  alt=""
                />
              </div>

              <div className="inner-details">
                <p className="inner-detail-1">Feminine Glittering Mang..</p>
                <h4>
                  ₹ 245 <span className="inner-detail-2">onwards</span>
                </h4>
                <small>
                  Delivery ₹61 <span className="word-line">₹70</span>{" "}
                </small>

                <div className="inner-ratings">
                  <p className="inner-star">
                    4.0 <i className="fa-regular fa-star fa-xs"></i>
                  </p>
                  <span className="inner-reviews"> 46 Reveiws </span>
                </div>
              </div>
            </div>
            <div className="last-inner-images">
              <div className="inner-image">
                <img
                  src="https://images.meesho.com/images/products/290450320/q25la_400.webp"
                  alt=""
                />
              </div>

              <div className="inner-details">
                <p className="inner-detail-1">Feminine Glittering Mang..</p>
                <h4>
                  ₹ 245 <span className="inner-detail-2">onwards</span>
                </h4>
                <small>
                  Delivery ₹61 <span className="word-line">₹70</span>{" "}
                </small>

                <div className="inner-ratings">
                  <p className="inner-star">
                    4.0 <i className="fa-regular fa-star fa-xs"></i>
                  </p>
                  <span className="inner-reviews"> 46 Reveiws </span>
                </div>
              </div>
            </div>
            <div className="last-inner-images">
              <div className="inner-image">
                <img
                  src="https://images.meesho.com/images/products/284421318/clvqu_400.webp"
                  alt=""
                />
              </div>

              <div className="inner-details">
                <p className="inner-detail-1">Feminine Glittering Mang..</p>
                <h4>
                  ₹ 245 <span className="inner-detail-2">onwards</span>
                </h4>
                <small>
                  Delivery ₹61 <span className="word-line">₹70</span>{" "}
                </small>

                <div className="inner-ratings">
                  <p className="inner-star">
                    4.0 <i className="fa-regular fa-star fa-xs"></i>
                  </p>
                  <span className="inner-reviews"> 46 Reveiws </span>
                </div>
              </div>
            </div>
            <div className="last-inner-images">
              <div className="inner-image">
                <img
                  src="https://images.meesho.com/images/products/282559240/mbsgp_400.webp"
                  alt=""
                />
              </div>

              <div className="inner-details">
                <p className="inner-detail-1">Feminine Glittering Mang..</p>
                <h4>
                  ₹ 245 <span className="inner-detail-2">onwards</span>
                </h4>
                <small>
                  Delivery ₹61 <span className="word-line">₹70</span>{" "}
                </small>

                <div className="inner-ratings">
                  <p className="inner-star">
                    4.0 <i className="fa-regular fa-star fa-xs"></i>
                  </p>
                  <span className="inner-reviews"> 46 Reveiws </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleProduct;
