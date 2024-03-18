import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductContexProps, ProductCardProps } from "../interfaces/interface";
import styles from "../styles/styles.module.css";

export const ProductContex = createContext({} as ProductContexProps);
const { Provider } = ProductContex;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increasBy } = useProduct();
  return (
    <Provider value={{ counter, increasBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
