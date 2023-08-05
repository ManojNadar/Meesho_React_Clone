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

  const handleFilterProduct = (e) => {
    const { value } = e.target;

    const getMeeshoProd = JSON.parse(localStorage.getItem("meeshoproducts"));

    if (value === "Mens") {
      const filterProd = getMeeshoProd.filter((e) => e.category === "Mens");
      setProducts(filterProd);
    } else if (value === "Womens") {
      const filterProd = getMeeshoProd.filter((e) => e.category === "Womens");
      setProducts(filterProd);
    } else if (value === "Womens") {
      const filterProd = getMeeshoProd.filter((e) => e.category === "Womens");
      setProducts(filterProd);
    } else if (value === "Kids") {
      const filterProd = getMeeshoProd.filter((e) => e.category === "Kids");
      setProducts(filterProd);
    } else if (value === "Jwellery") {
      const filterProd = getMeeshoProd.filter((e) => e.category === "Jwellery");
      setProducts(filterProd);
    } else if (value === "Home") {
      const filterProd = getMeeshoProd.filter((e) => e.category === "Home");
      setProducts(filterProd);
    } else if (value === "Footwear") {
      const filterProd = getMeeshoProd.filter((e) => e.category === "Footwear");
      setProducts(filterProd);
    } else if (value === "Electronics") {
      const filterProd = getMeeshoProd.filter(
        (e) => e.category === "Electronics"
      );
      setProducts(filterProd);
    } else {
      setProducts(getMeeshoProd);
    }
  };
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
              <select onChange={handleFilterProduct}>
                <option value="">Sort by : Category</option>
                <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Kids">Kids</option>
                <option value="Jwellery">Jwellery</option>
                <option value="Home">Home & Accessories</option>
                <option value="Footwear">Footwear</option>
                <option value="Electronics">Electronics</option>
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
                      <p>{item.title.slice(0, 20)}..</p>
                      <h4>Rs.{item.price}</h4>

                      {parseInt(item.deliveryCharge) === 0 ? (
                        <p>Free Delivery</p>
                      ) : (
                        <p>Delvery Charges Rs.{item.deliveryCharge}</p>
                      )}
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
