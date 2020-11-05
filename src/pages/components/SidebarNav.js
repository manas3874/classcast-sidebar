import React from "react";

const SidebarNav = (props) => {
  return (
    <div className="sidebar-nav">
      <img
        className="sidebar-nav--profile"
        src="https://i.ibb.co/mvR14Jf/user-1.png"
        alt=""
      />
      <div className="sidebar-nav--details">
        <div className="sidebar-nav--details__name">{props.name}</div>
        <div className="sidebar-nav--details__account-type">
          {props.account}
        </div>
      </div>
      <img
        className="sidebar-nav--notification"
        src="https://i.ibb.co/3c2CRb3/notification.png"
        alt=""
      />
      <img
        className="sidebar-nav--menu"
        src="https://i.ibb.co/MP6qj49/menu.png"
        alt=""
      />
    </div>
  );
};

export default SidebarNav;
