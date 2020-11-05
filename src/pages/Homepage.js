import React, { Component } from "react";
import SidebarNav from "./components/SidebarNav";
import SidebarHealthCard from "./components/SidebarHealthCard";
import SidebarSignup from "./components/SidebarSignup";
import SidebarTrainingCard from "./components/SidebarTrainingCard";
import SidebarTrainers from "./components/SidebarTrainers";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage--left">hello left</div>
        <div className="homepage--right">
          <SidebarNav name="Floyd Miles" account="Host account" />
          <h2 className="homepage--right__health-cards-header">Health</h2>
          <div className="homepage--right__health-cards">
            <SidebarHealthCard
              title="Hours"
              content="6:25"
              source="https://i.ibb.co/2KKt2T5/clock.png"
            />
            <SidebarHealthCard
              title="RPM"
              content="120"
              source="https://i.ibb.co/PwPnBd8/wheel.png"
            />
            <SidebarHealthCard
              title="KCal"
              content="184"
              source="https://i.ibb.co/HVGHD2w/apple.png"
            />
          </div>
          <SidebarSignup />
          <div className="homepage--right__training">
            <h2 className="homepage--right__training-header">
              Today's trainings
            </h2>
            <SidebarTrainingCard
              title="Box"
              venue="Sports Club"
              time="10:00"
              targetTime1="40"
              unit1="min"
              activity1="Warm-Up"
              targetTime2="20"
              unit2="min"
              activity2="Stretch"
              color="blue"
            />
            <SidebarTrainingCard
              title="Crossfit"
              venue="Sports Club"
              time="12:00"
              targetTime1="20"
              unit1="min"
              activity1="Warm-Up"
              targetTime2="20"
              unit2="min"
              activity2="Pull-Ups"
              color="red"
            />
          </div>
          <img
            src="https://i.ibb.co/sQJ7nbZ/horizontal-dots-black.png"
            alt=""
            className="homepage--right__horizontal-dots"
          />
          <div className="homepage--right__trainers">
            <h2 className="homepage--right__trainers-header">Your Trainers</h2>
            <SidebarTrainers
              source="https://i.ibb.co/DYMSQs9/user-2.png"
              name="John Kavanagh"
              designation="MMA coach"
            />
            <SidebarTrainers
              source="https://i.ibb.co/W0q3VyK/user-3.png"
              name="Jacob Jones"
              designation="Boxing Coach"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
