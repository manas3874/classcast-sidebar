import React from "react";

const SidebarSignup = () => {
  return (
    <div className="sidebar-signup">
      <img
        src="https://i.ibb.co/tq7gbgF/signup.png"
        alt=""
        className="sidebar-signup--img"
      />
      <div className="sidebar-signup--details">
        <p className="sidebar-signup--details__text">
          Sign up for a personal trainer to improve your results
        </p>
        <button className="sidebar-signup--details__btn">Sign Up</button>
      </div>
    </div>
  );
};

export default SidebarSignup;
