import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

const CREATE = "CREATE";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_COLOR = "SETCOLOR";

export const create = createAction(CREATE);
export const increment = createAction(INCREMENT); //index
export const decrement = createAction(DECREMENT); //index
export const setColor = createAction(SET_COLOR); //{index,color}

const initialState = Map({
  counters: List([
    Map({
      color: "black",
      number: 0
    })
  ])
});
export default handleActions(
  {
    [CREATE]: (state, action) => {
      const counters = state.get("counters");
      return state.set(
        "counters",
        counters.push(
          Map({
            number: 0,
            color: "black"
          })
        )
      );
    },
    [INCREMENT]: (state, action) => {
      const counters = state.get("counters");
      console.log(action.payload);
      //console.log(counters.get(action.payload).get("number"));
      return state.set(
        "counters",
        counters.update(action.payload, counter =>
          counter.set("number", counter.get("number") + 1)
        )
      );
    },
    [DECREMENT]: (state, action) => {
      const counters = state.get("number");
      return state.set(
        "counters",
        counters.update(action.payload, counter =>
          counter.set("number", counter.get("number") - 1)
        )
      );
    },
    [SET_COLOR]: (state, action) => {
      const counters = state.get("counters");
      console.log(action);
      return state.set(
        "counters",
        counters.update(action.payload.index, counter =>
          counter.set("color", action.payload.color)
        )
      );
    }
  },
  initialState
);
