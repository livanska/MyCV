import React from "react";
import style from "./Header.module.scss";
import Navbar from "./../Navbar/Navbar";
interface IHeaderProps {
  currentScrollPosition: number;
}

interface IHeaderState {
  imagePosition: string;
  shouldShowHeader: boolean;
  elementsPosition: string;
}

const DEFAULT_IMAGE_POSITION = "100% 50%, 100% 50%, 100% 50%";
const DEFAULT_ELEMENT_POSITION = "  98% 50%,  100% 50%, 100% 50%";
const PARALLAX_LIMIT_WIDTH = 900;

export default class Header extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  headerElement: HTMLDivElement;

  constructor(props) {
    super(props);
    this.state = {
      imagePosition: DEFAULT_IMAGE_POSITION,
      elementsPosition: DEFAULT_ELEMENT_POSITION,
      shouldShowHeader: props.currentScrollPosition < 50,
    };
  }

  componentDidMount() {
    if (window.innerWidth > PARALLAX_LIMIT_WIDTH) {
      this.headerElement.addEventListener("mousemove", (e: MouseEvent) =>
        this.parallax(e)
      );
      this.headerElement.addEventListener("mouseleave", this.toInitialPosition);
    }
  }

  componentWillUnmount() {
    if (window.innerWidth > PARALLAX_LIMIT_WIDTH) {
      this.headerElement.removeEventListener("mousemove", (e: MouseEvent) =>
        this.parallax(e)
      );
      this.headerElement.removeEventListener(
        "mouseleave",
        this.toInitialPosition
      );
    }
  }

  toInitialPosition = (): void => {
    this.setState({
      imagePosition: DEFAULT_IMAGE_POSITION,
      elementsPosition: DEFAULT_ELEMENT_POSITION,
    });
  };

  parallax = (e: MouseEvent): void => {
    const width = window.innerWidth / 2;
    const height = this.headerElement.clientHeight / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const depth1 = `${100 - (mouseX - width) * 0.01}% ${
      50 - (mouseY - height) * 0.01
    }%`;
    const depth2 = `${100 - (mouseX - width) * 0.02}% ${
      50 - (mouseY - height) * 0.02
    }%`;
    const depth3Param = 100 - (mouseX - width) * 0.02;

    const depth3ImageParam = 100;

    const depth3ElemParam =
      depth3Param > 140 ? 140 : depth3Param < 90 ? 90 : depth3Param;

    const depth3 = `${depth3ElemParam}% ${50 - (mouseY - height) * 0.02}%`;

    const depth3Image = `${depth3ImageParam}% ${
      50 - (mouseY - height) * 0.02
    }%`;

    this.setState({
      imagePosition: `${depth3Image}, ${depth2}, ${depth1}`,
      elementsPosition: `${depth3}, ${depth2}, ${depth1}`,
    });
  };

  render() {
    return (
      <div
        className={style.header}
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
          <div
            style={{ backgroundPosition: this.state.elementsPosition }}
            className={style.header__element}
          />
          <div
            style={{ backgroundPosition: this.state.imagePosition }}
            className={style.header__image}
          />
        </div>
      </div>
    );
  }
}
