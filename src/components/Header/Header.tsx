import React from "react";
import style from "./Header.module.scss";
import Navbar from "./../Navbar/Navbar";
interface IHeaderProps {
  shouldShowHeader: boolean;
}

interface IHeaderState {}

export const MOBILE_HEADER_HEIGHT = 480;

export default class Header extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  headerElement: HTMLDivElement;

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={style.header}
        style={{
          top: this.props.shouldShowHeader ? 0 : -MOBILE_HEADER_HEIGHT,
        }}
        ref={(elem: HTMLDivElement) => (this.headerElement = elem)}
      >
        <div className={style.header__infoContainer}>
          <div className={style.header__textContainer}>
            <h1 className={style.header__title}>Liliia Ivanska</h1>
            <h6 className={style.header__subtitle}>Front-End Developer</h6>
          </div>
          <Navbar />
        </div>
        <div className={style.header__imageContainer}>
          <div className={style.header__element} />
          <div className={style.header__image} />
        </div>
      </div>
    );
  }
}
