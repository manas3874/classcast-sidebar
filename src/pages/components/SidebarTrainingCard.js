import React from "react";

const SidebarTrainingCard = (props) => {
  return (
    <div className="sidebar-training-card">
      <div className="sidebar-training-card--details">
        <h2 className="sidebar-training-card--details__title">{props.title}</h2>
        <h2 className="sidebar-training-card--details__venue">{props.venue}</h2>
        <h2 className="sidebar-training-card--details__time">{props.time}</h2>
      </div>
      <div className="sidebar-training-card--target">
        <h2 className="sidebar-training-card--target__time">
          {props.targetTime1}
        </h2>
        <h2 className="sidebar-training-card--target__unit">{props.unit1}</h2>
        <h2 className="sidebar-training-card--target__activity">
          {props.activity1}
        </h2>
      </div>
      <div className="sidebar-training-card--target">
        <h2 className="sidebar-training-card--target__time">
          {props.targetTime2}
        </h2>
        <h2 className="sidebar-training-card--target__unit">{props.unit2}</h2>
        <h2 className="sidebar-training-card--target__activity">
          {props.activity2}
        </h2>
      </div>

      <div className="sidebar-training-card--options">
        <img src="https://i.ibb.co/zszCDKR/vertical-dots-white.png" alt="" />
      </div>
    </div>
  );
};

export default SidebarTrainingCard;
