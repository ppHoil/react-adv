import { useProduct } from "../hooks/useProduct";
import { CSSProperties, ReactElement, createContext } from "react";
import { Product, ProductContexProps } from "../interfaces/interface";
import styles from "../styles/styles.module.css";

export const ProductContex = createContext({} as ProductContexProps);
const { Provider } = ProductContex;
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increasBy } = useProduct();
  return (
    <Provider value={{ counter, increasBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
