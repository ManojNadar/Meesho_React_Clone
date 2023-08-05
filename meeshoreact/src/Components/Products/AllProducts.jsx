import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "../../Styles/ProductsCss/AllProducts.css";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const route = useNavigate();
  //   console.log(products);

  useEffect(() => {
    const getMeeshoProd = JSON.parse(localStorage.getItem("meeshoproducts"));

    if (getMeeshoProd) {
      setProducts(getMeeshoProd);
    }
  }, []);
  return (
    <>
      <Navbar />

      <div id="main-body">
        <div id="main-left-heading">
          <h2 id="prod-heading">Men Top Wear</h2>
          <p>Showing 1-20 out of 10000 products</p>
        </div>
        <div id="main-Product_container">
          <div id="main-left-product-container">
            <div id="select-option">
              <select>
                <option>Sort by : Relevance</option>
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
                  <p>T-shirts</p>
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <p>Shirts</p>
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <p>Vests</p>
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <p>Tracks andPants</p>
                </div>
              </div>
            </div>

            <div id="third-left-container">
              <div id="gemder-heading">
                <h3>Gender</h3>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div id="genders">
                <p>Mens</p>
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

          {/* right */}

          <div id="right-product-container">
            {products.length ? (
              <div className="image_section">
                {products.map((item) => (
                  <div
                    className="main_img_container"
                    key={item.id}
                    onClick={() => route(`/singleproduct/${item.id}`)}
                  >
                    <img src={item.img} alt="" />
                    <div className="ProdDetails">
                      <p>{item.title.slice(0, 25)}..</p>
                      <h4>Rs.{item.price}</h4>
                      <p>Delvery Charges Rs.{item.deliveryCharge}</p>
                      <h5>
                        Discount Rs.
                        <span className="strikeText">{item.discount}</span>
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>Loading....</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
