import React from "react";
import style from "./Profile.module.scss";
import Header from "./../Header/Header";
import { IS_MOBILE } from "../../utils/constants";
import Section from "./../Section/Section";
const HEADER_HIDE_SCROLL_POSITION = 10;
interface ProfileState {
  currentScrollPosition: number;
  shouldShowHeader: boolean;
}

export default class Profile extends React.Component<{}, ProfileState> {
  BackgroundElement: HTMLDivElement;

  constructor(props) {
    super(props);
    this.state = {
      currentScrollPosition: 0,
      shouldShowHeader: true,
    };
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

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<ProfileState>
  ): void {
    if (this.state.currentScrollPosition !== prevState.currentScrollPosition)
      this.setState({
        shouldShowHeader:
          this.state.currentScrollPosition - prevState.currentScrollPosition >
          HEADER_HIDE_SCROLL_POSITION,
      });
  }

  shouldShowHeader = (): boolean =>
    !IS_MOBILE || (IS_MOBILE && this.state.shouldShowHeader);

  render(): React.ReactNode {
    return (
      <>
        <div
          className={style.background}
          ref={(elem: HTMLDivElement) => (this.BackgroundElement = elem)}
        >
          <Header shouldShowHeader={this.shouldShowHeader()} />
          <div className={style.glassPanel}>
            <Section title="lllll">
            </Section>
          </div>
        </div>
      </>
    );
  }
}
