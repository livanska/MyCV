import React from "react";
import style from "./Profile.module.scss";
import Header from "./../Header/Header";
import { SCREEN_SIZES } from "../../utils/constants";
const HEADER_HIDE_SCROLL_POSITION = 10;
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

  shouldShowHeader = (): boolean =>
    window.innerWidth > SCREEN_SIZES.maxPhoneWidth ||
    (window.innerWidth <= SCREEN_SIZES.maxPhoneWidth &&
      this.state.currentScrollPosition < HEADER_HIDE_SCROLL_POSITION);

  render(): React.ReactNode {
    return (
      <>
        <div
          className={style.background}
          ref={(elem: HTMLDivElement) => (this.BackgroundElement = elem)}
        >
          <Header shouldShowHeader={this.shouldShowHeader()} />
          <div className={style.glassPanel}></div>
        </div>
      </>
    );
  }
}
