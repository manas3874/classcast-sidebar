import React, { Component } from "react";
import SidebarNav from "./components/SidebarNav";
import SidebarHealthCard from "./components/SidebarHealthCard";
import SidebarSignup from "./components/SidebarSignup";
import SidebarTrainingCard from "./components/SidebarTrainingCard";
import SidebarTrainers from "./components/SidebarTrainers";
import { Link } from "react-router-dom";
class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage--left">
          <h2 className="homepage--left__header">Welcome</h2>
          <p className="homepage--left__text-1">
            This is a sidebar concept made using React.js
          </p>
          <p className="homepage--left__text-2">
            The scope of this project is not to make any functional component.
            This is just to view the UI. The design can be found on{" "}
            <Link
              to={{ pathname: "https://i.ibb.co/YkCYv0W/design-image.png" }}
              target="_blank"
            >
              this link
            </Link>
          </p>
          <p className="homepage--left__text-2">
            The sidebar can be made dynamic by fetching data in real-time from
            local bluetooth-devices (fitness bands) or fetching data from our
            server. States will be established and managed to render dynamic
            content.
          </p>
        </div>
        <div className="homepage--right">
          <SidebarNav name="Floyd Miles" account="Host account" />
          <h2 className="homepage--right__health-cards-header">Health</h2>
          <div className="homepage--right__health-cards">
            <SidebarHealthCard
              title="Hours"
              content="6:25"
              source="https://i.ibb.co/2KKt2T5/clock.png"
              iconColor="4D95FC"
              progressColor="4D95FC"
              progress="80"
            />
            <SidebarHealthCard
              title="RPM"
              content="120"
              source="https://i.ibb.co/PwPnBd8/wheel.png"
              iconColor="ED7066"
              progressColor="ED7066"
              progress="100"
            />
            <SidebarHealthCard
              title="KCal"
              content="184"
              source="https://i.ibb.co/HVGHD2w/apple.png"
              iconColor="6DCF5E"
              progressColor="6DCF5E"
              progress="40"
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
              color="4D95FC"
              id="first"
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
              color="ED7066"
              id="second"
            />
          </div>
          <div className="homepage--right__horizontal-dots">
            <img
              src="https://i.ibb.co/sQJ7nbZ/horizontal-dots-black.png"
              alt=""
            />
          </div>

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
