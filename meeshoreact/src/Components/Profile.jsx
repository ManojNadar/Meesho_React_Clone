import React, { useContext, useEffect, useState } from "react";
import "../Styles/Profile.css";
import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";
import { MeeshoContext } from "./Context/MyContext";
import { toast } from "react-toastify";

const Profile = () => {
  const [profModal, setProfModal] = useState(false);
  const [profDetails, setProfDetails] = useState({});
  // const route = useNavigate();

  const { state, login } = useContext(MeeshoContext);

  const openProfModal = () => {
    setProfModal(true);
  };
  const hideProfModal = () => {
    setProfModal(false);
  };

  // useEffect(() => {
  //   if (!state?.currentuser) {
  //     route("/");
  //   }
  // }, [state]);

  useEffect(() => {
    const currentuser = JSON.parse(localStorage.getItem("currentmeeshouser"));

    if (currentuser) {
      setProfDetails(currentuser);
    }
  }, [state?.currentuser]);

  const handleUpdateProfile = (e) => {
    const { name, value } = e.target;
    setProfDetails({ ...profDetails, [name]: value });
  };

  const handleProfSubmit = (e) => {
    e.preventDefault();

    const currentuser = JSON.parse(localStorage.getItem("currentmeeshouser"));
    const regUser = JSON.parse(localStorage.getItem("meeshoreguser"));
    const { meeshoPassword, meeshoCpassword } = profDetails;
    if (currentuser) {
      if (meeshoPassword === meeshoCpassword) {
        for (let i = 0; i < regUser.length; i++) {
          if (regUser[i].meeshoEmail === currentuser.meeshoEmail) {
            regUser[i].meeshoUser = profDetails.meeshoUser;
            regUser[i].meeshoPassword = profDetails.meeshoPassword;
            regUser[i].meeshoCpassword = profDetails.meeshoCpassword;
            currentuser.meeshoUser = profDetails.meeshoUser;
            currentuser.meeshoPassword = profDetails.meeshoPassword;
            currentuser.meeshoCpassword = profDetails.meeshoCpassword;

            login(currentuser);
            localStorage.setItem(
              "currentmeeshouser",
              JSON.stringify(currentuser)
            );
            localStorage.setItem("meeshoreguser", JSON.stringify(regUser));
            toast.success("Profile Updated success");
            setProfModal(false);
          }
        }
      } else {
        toast.error("password doesnot match");
      }
    }
  };
  return (
    <>
      <Navbar />

      {profModal ? (
        <div className="profModalParent">
          <form onSubmit={handleProfSubmit} className="profModal">
            <p onClick={hideProfModal} className="closeProfModal">
              X
            </p>
            <div>
              <input
                name="meeshoUser"
                type="text"
                placeholder="Update Name"
                onChange={handleUpdateProfile}
                value={profDetails.meeshoUser}
              />
            </div>
            <div>
              <input
                name="meeshoPassword"
                type="password"
                placeholder="Update password"
                onChange={handleUpdateProfile}
                value={profDetails.meeshoPassword}
              />
            </div>
            <div>
              <input
                name="meeshoCpassword"
                type="password"
                placeholder="confirm password"
                onChange={handleUpdateProfile}
                value={profDetails.meeshoCpassword}
              />
            </div>
            <div>
              <input type="submit" value="UPDATE PROFILE" />
            </div>
          </form>
        </div>
      ) : null}

      <div className="profileContainer">
        <div className="profilesection">
          <div className="leftProfile">
            <div>
              <div className="accountName">
                <h3>ACCOUNT NAME</h3>
                <p>{state?.currentuser?.meeshoUser}</p>
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
                <button onClick={openProfModal}>EDIT PROFILE</button>
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
                <p>{state?.currentuser?.meeshoUser}</p>
              </div>
              <div>
                <p>Email</p>
                <p>abc@gmail.com</p>
              </div>
              <div>
                <p>Role</p>
                <p className="role">{state?.currentuser?.meeshoRole}</p>
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
