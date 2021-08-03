import React from "react";
import ReactDOM from "react-dom";

const today = new Date();
let heading = "";
const customStyle = {
  color: "red"
};

if (today.getHours() < 12 && today.getHours() >= 0) {
  heading = "Good Morning";
} else if (today.getHours() >= 12 && today.getHours() < 18) {
  heading = "Good Afternoon";
  customStyle.color = "green";
} else if (today.getHours() >= 18 && today.getHours() < 24) {
  heading = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {heading}
  </h1>,
  document.getElementById("root")
);
