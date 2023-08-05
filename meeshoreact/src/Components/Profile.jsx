import React from "react";
import "../Styles/Profile.css";
import Navbar from "./Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />

      <div className="profileContainer">
        <div className="profilesection">
          <div className="leftProfile">
            <div>
              <div className="accountName">
                <h3>ACCOUNT NAME</h3>
                <p>Manoj Buyer</p>
              </div>

              <div className="order">
                <h3>Overviews</h3>
              </div>
              <div className="order">
                <h3>Orders & Returns</h3>
              </div>
              <div className="coupons">
                <p>Coupons</p>
                <p>Meesho Credit</p>
              </div>
              <div className="termsPolicy">
                <p>Terms Of Use</p>
                <p>Privacy Policy</p>
              </div>
              <div className="editProf">
                <button>EDIT PROFILE</button>
              </div>
            </div>
          </div>
          <div className="rightProfile">
            <div className="profDetailsHeader">
              <h3>PROFILE DETAILS</h3>
            </div>

            <div className="profAllDetails">
              <div>
                <p>Name</p>
                <p>Manoj Buyer</p>
              </div>
              <div>
                <p>Email</p>
                <p>abc@gmail.com</p>
              </div>
              <div>
                <p>Role</p>
                <p>Buyer</p>
              </div>
              <div>
                <p>Mobile Number</p>
                <p>+91 321654987</p>
              </div>
              <div>
                <p>Location</p>
                <p>Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
