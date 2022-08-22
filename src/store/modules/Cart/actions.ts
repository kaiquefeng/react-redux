import { IProduct } from "./types";

export function addToCart(product: IProduct) {
  return {
    type: "ADD_TO_CART",
    payload: {
      product,
    },
  };
}
