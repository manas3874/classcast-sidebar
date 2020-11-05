import React from "react";

const SidebarHealthCard = (props) => {
  return (
    <div className="sidebar-health-card">
      <h2 className="sidebar-health-card--content">{props.content}</h2>
      <div className="sidebar-health-card--details">
        <img
          src={props.source}
          alt=""
          className="sidebar-health-card--details__icon"
        />
        <h2 className="sidebar-health-card--details__title">{props.title}</h2>
      </div>
      <div className="sidebar-health-card--progress-bar">
        <div className="sidebar-health-card--progress-bar__content"></div>
      </div>
    </div>
  );
};

export default SidebarHealthCard;
