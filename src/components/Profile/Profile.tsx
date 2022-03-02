import React from "react";
import style from "./Profile.module.scss";
import Header from "./../Header/Header";

interface ProfileState {
  currentScrollPosition: number;
}

export default class Profile extends React.Component<{}, ProfileState> {
  BackgroundElement: HTMLDivElement;

  constructor(props) {
    super(props);
    this.state = { currentScrollPosition: 0 };
  }

  setScrollPosition = (): void => {
    this.setState({
      currentScrollPosition: this.BackgroundElement.scrollTop,
    });
  };

  componentDidMount() {
    this.BackgroundElement.addEventListener("scroll", this.setScrollPosition);
  }

  componentWillUnmount() {
    this.BackgroundElement.removeEventListener(
      "scroll",
      this.setScrollPosition
    );
  }

  render(): React.ReactNode {
    return (
      <>
        <div
          className={style.background}
          ref={(elem: HTMLDivElement) => (this.BackgroundElement = elem)}
        >
          <Header currentScrollPosition={this.state.currentScrollPosition} />
          <div className={style.glassPanel}></div>
        </div>
      </>
    );
  }
}
