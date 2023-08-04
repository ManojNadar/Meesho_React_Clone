import React from "react";
import "../Styles/Home.css";
import Navbar from "./Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div id="main-body">
          <div id="banner-1">
            <div id="left-banner-1">
              <div id="left-banner-1-heading">
                <h1>Lowest Prices</h1>
                <h1>Best Quality Shopping</h1>
              </div>

              <div id="left-banner-1-middle">
                <div className="left-banner-1-middle-icons">
                  <img
                    src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                    alt=""
                  />

                  <div>
                    <p>Free</p>
                    <p>Delivery</p>
                  </div>
                </div>
                <div className="left-banner-1-middle-icons">
                  <img
                    src="https://images.meesho.com/images/pow/cod_jamun.svg"
                    alt=""
                  />

                  <div>
                    <p>Cash On</p>
                    <p>Delivery</p>
                  </div>
                </div>
                <div className="left-banner-1-middle-icons">
                  <img
                    src="https://images.meesho.com/images/pow/easyReturns_jamun.svg"
                    alt=""
                  />

                  <div>
                    <p>Easy</p>
                    <p>Delivery</p>
                  </div>
                </div>
              </div>
              <div id="left-banner-1-last">
                <div id="left-banner-1-last-img-btn">
                  <div id="play-store">
                    <img
                      src="https://images.meesho.com/images/pow/playstoreSmallIcon.png"
                      alt=""
                    />
                  </div>
                  <p>Download the Meesho App</p>
                </div>
              </div>
            </div>
            <div id="right-banner-1">
              <div id="right-banner-1-img">
                <img
                  src="https://images.meesho.com/images/marketing/1686234459500_512.webp"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div id="banner-2-heading">
            <div className="banner-2-line"></div>
            <span id="banner-2-middle-heading">
              Top Categories to choose from
            </span>
            <div className="banner-2-line"></div>
          </div>

          <div id="banner-2-image">
            <div id="left-banner-2">
              <div id="left-banner-2-image">
                <img
                  src="https://images.meesho.com/images/marketing/1678691686252_400.webp"
                  alt=""
                />
              </div>
            </div>
            <div id="right-banner-2">
              <h1>Be Fashion Forward</h1>

              <div id="right-banner-2-image">
                <div className="right-banner-2-inside-img">
                  <img
                    src="https://images.meesho.com/images/marketing/1678691699680_300.webp"
                    alt=""
                  />
                </div>
                <div className="right-banner-2-inside-img">
                  <img
                    src="https://images.meesho.com/images/marketing/1678691712594_300.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div id="main-left-heading">
            <h2 id="prod-heading">Products For You</h2>
          </div>
          <div id="main-container">
            <div id="main-left-container">
              <div id="select-option">
                <select>
                  <option>
                    Sort by : <strong>Relevance</strong>
                  </option>
                  <option>New Arrival</option>
                  <option>Price (High to Low)</option>
                  <option>Price ( Low to High)</option>
                </select>
              </div>
              <div id="second-left-container">
                <div id="filter-heading">
                  <h3>FILTERS</h3>
                  <p>1000 + products</p>
                </div>

                <div id="categories-heading">
                  <h2>Categories</h2>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div id="categories-input">
                  <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                  <input type="text" placeholder="Search" />
                </div>
                <div id="check-input">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Analog Watches</p>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Bangles & Bracelets</p>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>bathing Soaps</p>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>BedSheets</p>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Bike Covers</p>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Blouses</p>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Bra</p>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Car Covers</p>
                  </div>

                  <p id="see-more">See More</p>
                </div>
              </div>

              <div id="third-left-container">
                <div id="gemder-heading">
                  <h3>Gender</h3>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div id="genders">
                  <p>Boys</p>
                  <p>Girls</p>
                  <p>Mens</p>
                  <p>Womens</p>
                </div>
              </div>

              <div id="fourth-left-container">
                <div className="left-lists">
                  <p>Fabric</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="left-lists">
                  <p>Oxfords</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="left-lists">
                  <p>dail_shape</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="left-lists">
                  <p>Color</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="left-lists">
                  <p>Price</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="left-lists">
                  <p>Meesho Mall</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="left-lists">
                  <p>Ocassion</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="left-lists">
                  <p>Material</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="left-lists">
                  <p>bottom Length</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="left-lists">
                  <p>bottom Style</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div id="main-right-container">
              <div id="main-right-inside">
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/279383910/t886r_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/241165033/sszqb_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/143829359/bzags_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/37280506/jokdw_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/73775336/orunf_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/82144198/byzsh_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/161561190/g2a8h_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/267432236/szyij_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/42958844/zzzh2_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/42182017/gtwro_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/144966596/jcf1l_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/294859765/grxz1_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/294859765/grxz1_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/157299996/pz7of_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/79418387/qsiy1_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/6447575/7a301_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/266436002/tr2oz_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/230238625/pgur1_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/70170877/syve0_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
                <div className="main-right-images">
                  <div className="single-image">
                    <img
                      src="https://images.meesho.com/images/products/107725974/97h5n_400.webp"
                      alt=""
                    />
                  </div>

                  <div className="image-details">
                    <p className="image-detail-1">Feminine Glittering Mang..</p>
                    <h4>
                      ₹ 62 <span className="image-detail-2">onwards</span>
                    </h4>
                    <small>
                      Delivery ₹61 <span className="word-line">₹70</span>
                    </small>

                    <div className="ratings">
                      <p className="star">
                        4.0 <i className="fa-regular fa-star fa-xs"></i>
                      </p>
                      <span className="reviews"> 46 Reveiws </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        {/* <!-- <div id="last-banner"></div> --> */}
      </main>
    </>
  );
};

export default Home;
