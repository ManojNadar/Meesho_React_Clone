import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";

const UpdateProduct = () => {
  const [productData, setproductData] = useState({});
  const { productId } = useParams();

  console.log(productId);

  const route = useNavigate();

  const handleUpdateProdDetails = (e) => {
    const { name, value } = e.target;
    setproductData({ ...productData, [name]: value });
  };

  useEffect(() => {
    const showUpdateProdContainer = async () => {
      // console.log(productId);
      try {
        const token = JSON.parse(localStorage.getItem("meeshoToken"));

        const response = await axios.post(
          "http://localhost:8000/GetEditProduct",
          { productId, token }
        );

        if (response.data.success) {
          setproductData(response.data.singleProduct);
        }
      } catch (error) {
        console.log(error);
      }
    };

    showUpdateProdContainer();
  }, []);

  const updateProductSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("meeshoToken"));

      const response = await axios.patch(
        "http://localhost:8000/updateproduct",
        { token, productData, productId }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          route("/myproducts");
        }, 800);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />

      <div className="updateProfModal">
        <div className="modalProdUpdateContainer">
          <p onClick={() => route("/myproducts")} className="closeProdModal">
            Go Back
          </p>
          <h2>Update Profile</h2>
          <form className="updateProdForm" onSubmit={updateProductSubmit}>
            <div>
              <input
                type="text"
                placeholder="Update Image URL"
                onChange={handleUpdateProdDetails}
                value={productData.image}
                name="image"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Update Product Title"
                onChange={handleUpdateProdDetails}
                value={productData.title}
                name="title"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Update Product Price"
                onChange={handleUpdateProdDetails}
                value={productData.price}
                name="price"
              />
            </div>

            <div>
              <select
                name="category"
                value={productData.category}
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
    </>
  );
};

export default UpdateProduct;
