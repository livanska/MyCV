import React from "react";
import style from "./Section.module.scss";

interface ISectionProps {
  title: string;
}

export default class Section extends React.Component<ISectionProps, {}> {
  render(): React.ReactNode {
    return <div className={style.section}>{this.props.children}</div>;
  }
}
