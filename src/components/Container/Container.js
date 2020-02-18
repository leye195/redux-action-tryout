import React from "react";
import style from "./Container.scss";
import classNames from "classnames/bind";
import Counter from "../Counter";
import { connect } from "react-redux";
import * as actions from "../../module";
const cx = classNames.bind(style);
const Container = props => {
  return (
    <div className={cx("container")}>
      <header></header>
      <div className={cx("counter-wrapper")}>
        {props.counters.map((counter, idx) => {
          return (
            <Counter
              number={counter.get("number")}
              color={counter.get("color")}
              index={idx}
              handleIncrement={props.onIncrement}
              handleColor={props.onSetColor}
            />
          );
        })}
      </div>
      <div>
        <button onClick={() => props.onCreate()}>Create</button>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    counters: state.get("counters")
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCreate: () => dispatch(actions.create()),
    onIncrement: idx => dispatch(actions.increment(idx)),
    onDecrement: idx => dispatch(actions.decrement(idx)),
    onSetColor: (color, index) => dispatch(actions.setColor({ color, index }))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
