import React from "react";
import "./style.scss";
import Profile from "./components/Profile/Profile";
export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}
