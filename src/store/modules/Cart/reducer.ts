import { Reducer } from "redux";
import { ICartState } from "./types";

const InitialState: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state, action) => {
  console.log(state, action); 
  return InitialState;
};

export default cart;
