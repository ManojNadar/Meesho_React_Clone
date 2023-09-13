import React, { useContext, useEffect, useState } from "react";
import "../Styles/Profile.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { MeeshoContext } from "./Context/MyContext";
import { toast } from "react-toastify";
import axios from "axios";

const Profile = () => {
  const [profModal, setProfModal] = useState(false);
  const [profDetails, setProfDetails] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const route = useNavigate();

  const { state, login } = useContext(MeeshoContext);

  const openProfModal = () => {
    setProfModal(true);
  };
  const hideProfModal = () => {
    setProfModal(false);
  };

  useEffect(() => {
    if (!state?.currentuser) {
      route("/");
    }
  }, [state]);

  const handleUpdateProfile = (e) => {
    const { name, value } = e.target;
    setProfDetails({ ...profDetails, [name]: value });
  };

  const handleProfSubmit = async (e) => {
    e.preventDefault();

    const { name, password, confirmPassword } = profDetails;

    if (name && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const token = JSON.parse(localStorage.getItem("meeshoToken"));
          const response = await axios.post(
            "http://localhost:8000/editprofile",
            {
              token,
              profDetails,
            }
          );

          if (response.data.success) {
            const userData = response.data.updateUser;
            login(userData, token);
            toast.success(response.data.message);
            setProfModal(false);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.warn("password doesnot match");
      }
    } else {
      toast.warn("all fields are mandatory");
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
                name="name"
                type="text"
                placeholder="Update Name"
                onChange={handleUpdateProfile}
                value={profDetails.name}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="Update password"
                onChange={handleUpdateProfile}
                value={profDetails.password}
              />
            </div>
            <div>
              <input
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                onChange={handleUpdateProfile}
                value={profDetails.confirmPassword}
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
                <p>{state?.currentuser?.name}</p>
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
                <p>{state?.currentuser?.name}</p>
              </div>
              <div>
                <p>Email</p>
                <p>abc@gmail.com</p>
              </div>
              <div>
                <p>Role</p>
                <p className="role">{state?.currentuser?.role}</p>
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
