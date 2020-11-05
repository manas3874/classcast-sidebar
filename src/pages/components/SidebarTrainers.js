import React from "react";

const SidebarTrainers = (props) => {
  return (
    <div className="sidebar-trainers">
      <div className="sidebar-trainers--profile">
        <img src={props.source} alt="" />
      </div>
      <div className="sidebar-trainers--details">
        <div className="sidebar-trainers--details__name">{props.name}</div>
        <div className="sidebar-trainers--details__designation">
          {props.designation}
        </div>
      </div>
      <div className="sidebar-trainers--chat-icon">
        <img src="https://i.ibb.co/56YcKJ9/chat.png" alt="" />
      </div>
    </div>
  );
};

export default SidebarTrainers;
