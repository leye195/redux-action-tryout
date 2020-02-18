import React from "react";
import style from "./Counter.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);
const color = [
  "#111111",
  "#acca34",
  "#f3f3e3",
  "#aaccdd",
  "#00ddaa",
  "#ff00fd",
  "#ffee22",
  "#458874",
  "#119927",
  "#333399"
];
const getColor = () => {
  const idx = Math.floor(Math.random() * color.length);
  return color[idx];
};
const Counter = ({ number, color, handleIncrement, handleColor, index }) => {
  return (
    <div
      className={cx("counter")}
      onClick={() => {
        handleIncrement(index);
        handleColor(getColor(), index);
      }}
      style={{ backgroundColor: color }}
    >
      <div>{number}</div>
    </div>
  );
};

export default Counter;
