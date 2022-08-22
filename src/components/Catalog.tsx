import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../services/api";
import { addToCart } from "../store/modules/Cart/actions";
import { IProduct } from "../store/modules/Cart/types";

export function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("products").then((res) => {
      setCatalog(res.data);
    });
  }, []);

  const handleAddProductCart = useCallback(
    (product: IProduct) => {
      dispatch(addToCart(product));
    },
    [dispatch]
  );
  return (
    <main>
      {catalog.map((item) => (
        <article key={item.id}>
          <strong>{item.title}</strong> {" - "}
          <strong>{item.price}</strong> {"  "}
          <button type="button" onClick={() => handleAddProductCart(item)}>
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
}
