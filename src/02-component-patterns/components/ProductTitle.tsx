import { CSSProperties, useContext } from "react";
import { ProductContex } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContex);

  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
